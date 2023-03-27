


//          .o  
//        o888  
//         888  
//         888  
//         888  
//         888  
//        o888o 



const { joinVoiceChannel, createAudioResource, StreamType, AudioPlayerStatus, createAudioPlayer, getVoiceConnection } = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const queue = new Map();

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'musique' || command === 'musiquesuivante') {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      message.reply('Veuillez rejoindre un salon vocal pour utiliser cette commande.');
      return;
    }

    const serverQueue = queue.get(message.guild.id);

    if (command === 'musique') {
      if (!args[0]) {
        message.reply('Veuillez fournir un lien YouTube.');
        return;
      }
      const youtubeLink = args[0];

      if (!ytdl.validateURL(youtubeLink)) {
        message.reply('Veuillez fournir un lien YouTube valide.');
        return;
      }

      const songInfo = await ytdl.getInfo(youtubeLink);
      const song = {
        title: songInfo.videoDetails.title,
        url: songInfo.videoDetails.video_url,
      };

      if (!serverQueue) {
        const queueConstructor = {
          voiceChannel: voiceChannel,
          textChannel: message.channel,
          connection: null,
          songs: [],
          playing: true,
        };

        queue.set(message.guild.id, queueConstructor);
        queueConstructor.songs.push(song);

        try {
          const connection = joinVoiceChannel({
            channelId: voiceChannel.id,
            guildId: voiceChannel.guild.id,
            adapterCreator: voiceChannel.guild.voiceAdapterCreator,
          });
          queueConstructor.connection = connection;
          play(message.guild, queueConstructor.songs[0]);
        } catch (err) {
          console.error(err);
          queue.delete(message.guild.id);
          return message.channel.send(err);
        }
      } else {
        serverQueue.songs.push(song);
        return message.channel.send(`${song.title} a été ajouté à la file d'attente.`);
      }
    } else if (command === 'musiquesuivante') {
      if (!serverQueue) {
        return message.channel.send('Il n\'y a pas de musique en cours de lecture.');
      }
    
      if (serverQueue.songs.length > 1) {
        serverQueue.songs.shift(); 
        play(message.guild, serverQueue.songs[0]); 
      } else {
        message.channel.send('Il n\'y a pas de chanson suivante dans la file d\'attente.');
      }
    }    
    
  } else if (command === 'musiqueattente') {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) {
      return message.channel.send('Il n\'y a pas de musique en file d\'attente.');
    }
    let queueMessage = 'File d\'attente:\n';
    serverQueue.songs.forEach((song, index) => {
      queueMessage += `${index + 1}. ${song.title} (${song.url})\n`;
    });
    message.channel.send(queueMessage);
  }
  if (command === 'musiquemaintenant') {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) {
      return message.channel.send('Il n\'y a pas de musique en cours de lecture.');
    }
    const currentSong = serverQueue.songs[0];
    message.channel.send(`La musique actuelle est "${currentSong.title}".`);
  } else if (command === 'musiquesuppr') {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) {
      return message.channel.send('Il n\'y a pas de musique en file d\'attente.');
    }
    const songIndex = parseInt(args[0]) - 1;
    if (isNaN(songIndex) || songIndex < 1 || songIndex >= serverQueue.songs.length) {
      return message.channel.send('Veuillez fournir un numéro de musique valide dans la file d\'attente.');
    }
    const removedSong = serverQueue.songs.splice(songIndex, 1)[0];
    message.channel.send(`La musique "${removedSong.title}" a été supprimée de la file d'attente.`);
  }
  if (command === 'musiquedirect') {
    const serverQueue = queue.get(message.guild.id);
    if (!serverQueue) {
      return message.channel.send('Il n\'y a pas de musique en cours de lecture.');
    }
    
    if (args[0]) {
      const position = parseInt(args[0]) - 1;
      if (!isNaN(position) && position >= 0 && position < serverQueue.songs.length) {
        serverQueue.songs.splice(0, position);
        play(guild, serverQueue.songs[0]); // Correction: appel à la fonction play
        message.channel.send(`Passage à la musique numéro ${args[0]} dans la file d'attente.`);
      } else if (ytdl.validateURL(args[0])) {
        const youtubeLink = args[0];
        const songInfo = await ytdl.getInfo(youtubeLink);
        const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
        };
    
        serverQueue.songs.splice(0, 1, song);
        play(guild, serverQueue.songs[0]); // Correction: appel à la fonction play
        message.channel.send(`Passage direct à la musique : "${song.title}"`);
      } else {
        message.channel.send('Veuillez fournir un numéro valide ou un lien YouTube valide.');
      }
    } else {
      message.channel.send('Veuillez fournir un numéro de musique dans la file d\'attente ou un lien YouTube.');
    }
    
  }
  
});

async function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const stream = ytdl(song.url, { filter: 'audioonly', quality: 'highestaudio' });
  const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });

  const player = createAudioPlayer();
  player.play(resource);

  serverQueue.connection.subscribe(player);

  player.on(AudioPlayerStatus.Playing, () => {
    console.log(`La musique "${song.title}" se lance !`);
    serverQueue.textChannel.send(`La musique "${song.title}" se lance !`);
  });

  player.on(AudioPlayerStatus.Idle, () => {
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  });

  player.on('error', (error) => {
    console.error(error);
    serverQueue.textChannel.send('Il y a eu une erreur lors de la lecture de la vidéo.');
  });
}

async function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const stream = ytdl(song.url, { filter: 'audioonly', quality: 'highestaudio' });
  const resource = createAudioResource(stream, { inputType: StreamType.Arbitrary });

  const player = createAudioPlayer();
  player.play(resource);

  serverQueue.connection.subscribe(player);

  player.on(AudioPlayerStatus.Playing, () => {
    console.log(`La musique "${song.title}" se lance !`);
    serverQueue.textChannel.send(`La musique "${song.title}" se lance !`);
    serverQueue.setPlaying(); 
  });

  player.on(AudioPlayerStatus.Idle, () => {
    if (!serverQueue.isPlaying()) { 
      return;
    }
    serverQueue.setNotPlaying(); 
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  });

  player.on('error', (error) => {
    console.error(error);
    serverQueue.textChannel.send('Il y a eu une erreur lors de la lecture de la vidéo.');
    serverQueue.setNotPlaying(); 
  });
}





client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'musiqueaide') {
    const embed = new MessageEmbed()
      .setTitle('Commandes du bot musique')
      .setColor('#0099ff')
      .addFields(
        {
          name: 'musique [lien YouTube]',
          value: 'Ajoute une musique à la file d\'attente et la joue si aucune musique n\'est en cours de lecture.',
        },
        {
          name: 'musiquesuivante',
          value: 'Passe à la musique suivante dans la file d\'attente.',
        },
        {
          name: 'musiqueattente',
          value: 'Affiche la liste des musiques en file d\'attente.',
        },
        {
          name: 'musiquesuppr [numéro]',
          value: 'Supprime la musique correspondant au numéro donné dans la file d\'attente.',
        },
        {
          name: 'musiquemaintenant [numéro]',
          value: 'Passe directement à la musique correspondant au numéro donné dans la file d\'attente.',
        },
        {
          name: 'musiquemaintenant [lien YouTube]',
          value: 'Passe directement à la musique du lien YouTube fourni.',
        }
      )
      .setFooter('Utilisez ces commandes pour contrôler le bot musique.');

    message.channel.send({ embeds: [embed] });
  }
});



//          .oooo.   
//        .dP""Y88b  
//              ]8P' 
//            .d8P'  
//          .dP'     
//        .oP     .o 
//        8888888888 



const ytdl = require("ytdl-core");
const ytSearch = require("yt-search");
const queue = new Map();

client.on("messageCreate", async (message) => {
  if (!message.guild || message.author.bot || !message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
  const serverQueue = queue.get(message.guild.id);

  switch (command) {
    case "musiquestart":
      await execute(message, args, serverQueue);
      break;
    case "musiquepause":
      pause(serverQueue);
      break;
    case "musiquestop":
      stop(serverQueue);
      break;
    case "musiquereprend":
      resume(serverQueue);
      break;
    case "musiquerredémarrer":
    case "musiquerredemarrer":
      restart(serverQueue);
      break;
    case "musiqueajoute":
      await addToQueue(message, args, serverQueue);
      break;
    case "musiqueattente":
      showQueue(serverQueue);
      break;
    case "musiquesuppr":
    case "musiquesupprime":
      removeFromQueue(args, serverQueue);
      break;
    case "musiquesuivante":
      skip(serverQueue);
      break;
    case "musiquedirect":
      playDirect(message, args, serverQueue);
      break;
    case "musiqueaide":
    case "musiquehelp":
      showHelp(message);
      break;
    default:
      message.channel.send("Commande non reconnue.");
  }
});

async function execute(message, args, serverQueue) {
  const voiceChannel = message.member.voice.channel;

  if (!voiceChannel) {
    return message.channel.send("Vous devez être dans un salon vocal pour jouer de la musique.");
  }

  const permissions = voiceChannel.permissionsFor(message.client.user);

  if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
    return message.channel.send("J'ai besoin des permissions pour rejoindre et parler dans le salon vocal.");
  }

  const songInfo = await ytdl.getInfo(args[0]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
  };

  if (!serverQueue) {
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 5,
      playing: true,
    };

    queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);

    try {
      const connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (err) {
      console.log(err);
      queue.delete(message.guild.id);
      return message.channel.send(err);
    }
  } else {
    serverQueue.songs.push(song);
    return message.channel.send(`**${song.title}** a été ajouté à la file d'attente.`);
  }
}

function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const dispatcher = serverQueue.connection
    .play(ytdl(song.url, { filter: "audioonly", quality: "highestaudio", highWaterMark: 1 << 25 }))
    .on("finish", () => {
      serverQueue.songs.shift();
      play(guild, serverQueue.songs[0]);
    })
    .on("error", (error) => console.error(error));

  dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
  serverQueue.textChannel.send(`En train de jouer: **${song.title}**`);
}

function pause(serverQueue) {
  if (!serverQueue || !serverQueue.playing) {
    return;
  }
  serverQueue.connection.dispatcher.pause();
  serverQueue.playing = false;
}

function resume(serverQueue) {
  if (!serverQueue || serverQueue.playing) {
    return;
  }
  serverQueue.connection.dispatcher.resume();
  serverQueue.playing = true;
}

function stop(serverQueue) {
  if (!serverQueue) {
    return;
  }
  serverQueue.songs = [];
  serverQueue.connection.dispatcher.end();
}

function restart(serverQueue) {
  if (!serverQueue || !serverQueue.playing) {
    return;
  }
  serverQueue.connection.dispatcher.end();
  play(serverQueue.textChannel.guild, serverQueue.songs[0]);
}

async function addToQueue(message, args, serverQueue) {
  if (!serverQueue) {
    return message.channel.send("Aucune musique n'est en cours de lecture.");
  }

  const songInfo = await ytdl.getInfo(args[0]);
  const song = {
    title: songInfo.videoDetails.title,
    url: songInfo.videoDetails.video_url,
  };

  serverQueue.songs.push(song);
  message.channel.send(`**${song.title}** a été ajouté à la file d'attente.`);
}

function showQueue(message, serverQueue) {
  if (!serverQueue || serverQueue.songs.length === 0) {
    return serverQueue.textChannel.send("Aucune musique dans la file d'attente.");
  }

  let queueMessage = "File d'attente:\n";
  serverQueue.songs.forEach((song, index) => {
    queueMessage += `${index + 1}. ${song.title}\n`;
  });

  message.channel.send(queueMessage);
}


function removeFromQueue(args, serverQueue) {
  if (!serverQueue || serverQueue.songs.length === 0) {
    return;
  }

  const indexToRemove = parseInt(args[0]) - 1;
  if (indexToRemove < 0 || indexToRemove >= serverQueue.songs.length) {
    return;
  }

  const removedSong = serverQueue.songs.splice(indexToRemove, 1)[0];
  message.channel.send(`**${removedSong.title}** a été supprimé de la file d'attente.`);
}

function skip(serverQueue) {
  if (!serverQueue) {
    return;
  }
  serverQueue.connection.dispatcher.end();
}

async function playDirect(message, args, serverQueue) {
}

function showHelp(message) {
  const helpEmbed = new MessageEmbed()
    .setColor("RED")
    .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
    .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
    .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
    .setTitle("Liste des commandes MUSIQUE")
    .setDescription(`
      - ${prefix}**musiquestart** *[lien YouTube]*
      Jouer une musique

      - ${prefix}**musiquepause**
      Mettre en pause la musique

      - ${prefix}**musiquestop**
      Arrêter la musique et déconnecter le bot du salon vocal

      - ${prefix}**musiquereprend**
      Reprendre la musique

      - ${prefix}**musiquerredemarrer**
      Redémarrer la musique depuis le début

      - ${prefix}**musiqueajoute** *[lien YouTube]**
      Ajouter une musique à la file d'attente

      - ${prefix}**musiqueattente**
      Afficher la liste d'attente
      
      - ${prefix}**musiquesuppr** *[numéro]*
      Supprimer de la file d'attente

      - ${prefix}**musiquesuivante**
      Passer à la musique suivante

      - ${prefix}**musiquedirect** *[lien YouTube]*
      Passer directement à la musique du lien

      - ${prefix}**musiquedirect** *[numéro]*
      Passer directement à la musique du numéro de la file d'attente

      - ${prefix}**musiquehelp**
      Afficher cette liste de commandes

    `);

  message.channel.send({ embeds: [helpEmbed] });
}



//        ooooooooo.   ooooooooo.     .oooooo.   ooo        ooooo ooooooooo.          .oooo.   
//        `888   `Y88. `888   `Y88.  d8P'  `Y8b  `88.       .888' `888   `Y88.      .dP""Y88b  
//         888   .d88'  888   .d88' 888      888  888b     d'888   888   .d88'            ]8P' 
//         888ooo88P'   888ooo88P'  888      888  8 Y88. .P  888   888ooo88P'           .d8P'  
//         888          888`88b.    888      888  8  `888'   888   888                .dP'     
//         888          888  `88b.  `88b    d88'  8    Y     888   888              .oP     .o 
//        o888o        o888o  o888o  `Y8bood8P'  o8o        o888o o888o             8888888888 



A partir de discord.js v13, créé un code pour les commandes suivantes :
 - (prefix + "musiquestart" + [lien YouTube]) : pour que le bot se connecte au salon vocal où est l'utilisateur et joue la musique ;
 - (prefix + "musiquepause") : pour mettre en pause la musique ;
 - (prefix + "musiquestop") : pour arrêter la musique et déconnecter le bot du salon vocal
 - (prefix + "musiquereprend") : pour reprendre le musique ; 
 - (prefix + "musiquerredémarrer") ou (prefix + "musiquerredémarrer") : pour redémarrer la musique depuis le début ;
 - (prefix + "musiqueajoute" [lien YouTube]) : pour ajouter un musique a la file d'attente et que les musiques s'enchainent; 
 - (prefix + "musiqueattente") : pour afficher la liste d'attente ;
 - (prefix + "musiquesuppr" + [numéro]) ou (prefix + "musiquesupprime" + [numéro]) : pour supprimé de la file d'attente ; 
 - (prefix + "musiquesuivante") : pour passer directement à la musique suivante ;
 - (prefix + "musiquedirect" + [lien YouTube]) : pour passer directement à la musique du liens sans prendre en compte la file d'attente, à la fin de la musique, elle reprendra la lecture de la file d'attente ;
 - (prefix + "musiquedirect" + [numéro]) : pour passer directement à la musique du numéro de la file d'attente, elle reprendra la lecture de la file d'attente ;
 - (prefix + "musiqueaide") ou (prefix + "musiquehelp") pour créé un embed de type (modifie le description) : 
            .setColor("RED")
            .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
            .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
            .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
            .setDescription()
            .setTitle("Liste des commandes MUSIQUE");
écris le code en entier.



Le code que tu étais entrain de rédiger s'est interromptu à la ligne : 
Continue le code