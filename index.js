const Discord = require('discord.js');
const axios = require('axios');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.MESSAGE_CONTENT,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    ]
});



client.login(process.env.TOKEN);
const prefix = (process.env.PREFIX);
const CHATGPT_COMMAND = 'chatgpt';
const CHATGPT_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const CHATGPT_API_KEY = (process.env.GPT_KEY);

client.on("ready", () => {
    console.log(`✅ Le Bot ${client.user.tag} est opérationnel ! ✅`)

    client.user.setPresence({
        status: 'online', // Vous pouvez choisir parmi 'online', 'idle', 'dnd' ou 'invisible'
        activities: [
          {
            name: '𝐺𝑂𝑀𝑈𝑆𝐶𝑈', // Le texte à afficher
            type: 'PLAYING', // Vous pouvez choisir parmi 'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING' ou 'COMPETING'
            url: 'https://discord.gg/T9fUEbsJrt', // URL facultative pour le type 'STREAMING'
          },
        ],
      });
    });

client.on("interactionCreate", interaction => {
    // Gérer les interactions ici
});

client.on('message', message => {
    if (message.content === prefix) {
      message.reply('Oui ?');
    }
  });

client.on('message', message => {
    if (message.author.bot) return;
    const greetings = ['salut', 'slt', 'bonjour', 'bjr', 'bonsoir', 'bsr', 'wesh', 'hey'];
  
    if (greetings.some(word => message.content.toLowerCase().includes(word))) {
      message.react('👋');
    }
  });


client.on("messageCreate", async message => {
    if (message.author.bot) return;



    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(prefix)) {
        switch (command) {
            
            case 'discord':
            case 'Discord':
                message.reply("https://discord.gg/T9fUEbsJrt");
                break;
            case 'hey':
            case 'yo':
                message.reply("Salut à toi !");
                break;
            case 're':
                message.reply("Ah te revoilà !");
                break;
            case 'role':
            case 'roles':
            case 'rôle':
            case 'rôles':
                message.reply("Voici le salon des <#987820202752356375>");
                break;
            case 'departement':
            case 'departements':
            case 'département':
            case 'départements':
                message.reply("Voici le salon des <#987835514591772722>");
                break;
            case 'discussion':
                message.reply("Voici le salon des <#987820203343761451>");
                break;
            case 'performance':
            case 'performances':
                message.reply("Voici le salon des <#987829100053925988>");
                break;
            case 'evolution':
            case 'evolutions':
            case 'évolution':
            case 'évolutions':
                message.reply("Voici le salon des <#990369064377532436>");
                break;
            case 'programme':
            case 'programmes':
                message.reply("Voici le salon des <#987829603462709278>");
                break;
            case 'alimentation':
                message.reply("Voici le salon des <#991696422745428018>");
                break;
            case 'playlist':
                message.reply("Voici le salon des <#988065218099822612>");
                break;
            case 'reseau':
            case 'reseaux':
            case 'réseau':
            case 'réseaux':
            case 'reseausociaux':
            case 'reseauxsociaux':
            case 'réseausociaux':
            case 'réseauxsociaux':
            case 'reseau sociaux':
            case 'reseaux sociaux':
            case 'réseau sociaux':
            case 'réseaux sociaux':
            case 'reseau-sociaux':
            case 'reseaux-sociaux':
            case 'réseau-sociaux':
            case 'réseaux-sociaux':
                message.reply("Voici le salon des <#990913515218927656>");
                break;
            case 'gymbro':
            case 'gym-bro':
            case 'gym bro':
                message.reply("Voici le salon des <#987842500997820477>");
                break;
            case 'aide':
            case 'help':
                    const embed = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
                        .setDescription("Le prefix de <@994859660727291985> est **sa mention**.\n\nCommandes pour trouver les salons.\n\n<@994859660727291985> **discord** \n<@994859660727291985> **roles**\n<@994859660727291985> **departements**\n<@994859660727291985> **discussion**\n<@994859660727291985> **performances**\n<@994859660727291985> **evolutions**\n<@994859660727291985> **programmes**\n<@994859660727291985> **playlist**\n<@994859660727291985> **reseauxsociaux**\n<@994859660727291985> **gymbro**\n\n<@994859660727291985> **exercice**\n<@994859660727291985> **exercice+**\n<@994859660727291985> **exerciceaide**")
                        .setTitle("Liste des commandes GLOBALES");
                    message.reply({ embeds: [embed] });
                    break;
            case 'aide+':
            case 'help+':
                if (message.member.permissions.has("ADMINISTRATOR")) {
                    const embed = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
                        .setDescription("Le prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> **suppr** *[nombre de messages]*\n<@994859660727291985> **code**\n<@994859660727291985> **repete** *[message]*\n<@994859660727291985> **repete&suppr** *[message]*\n<@994859660727291985> **reinvite** *[user_id]*\n<@994859660727291985> **invite** *[user_id]*\n\n<@994859660727291985> **mute** *[user_id] ou [user_mention] [temps en min/h] (temps : facultatif)*\n<@994859660727291985> **demute** *[user_id] ou [user_mention]*")
                        .setTitle("Liste des commandes EMPLOYÉS");
                    message.reply({ embeds: [embed] });
                    } else {
                    message.reply("Désolé, cette commande est réservée aux employés.");
                    } break;
                };
                           
        }
        

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~command_SUPPR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
switch (command) {

    case 'suppr':
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.reply("Désolé, cette commande est réservée aux employés.");
        }

        const deleteCount = parseInt(args[0], 10);
        if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
            return message.reply("Veuillez fournir un nombre entre 1 et 100 pour le nombre de messages à supprimer.");
        }

        message.channel.bulkDelete(deleteCount + 1)
            .then(() => {
                message.channel.send(`J'ai supprimé ${deleteCount} message(s).`).then(msg => {
                    setTimeout(() => msg.delete(), 3000);
                });
            })
            .catch(error => {
                console.error(`Impossible de supprimer les messages en raison de: ${error}`);
                message.reply("Une erreur s'est produite lors de la suppression des messages.");
            });
        break;
    // ...
}
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~command_MENU : ENVOIE_LES_MENUS_POUR_CHOISIR_SON_DÉPARTEMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const selectdepartement = require('./selectdepartement.js');

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_CODE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.on('message', async message => {
  if (message.author.bot) return;

  if (message.content === prefix + 'code') {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }

    const url = 'https://github.com/mddesage/gomuscu';

    try {
      await message.author.send(`Voici le lien que vous avez demandé: ${url}`);
      await message.reply('Je vous ai envoyé un message privé avec le lien demandé.');
    } catch (error) {
      console.error(error);
      message.reply("Je n'ai pas pu vous envoyer un message privé. Veuillez vérifier vos paramètres de confidentialité.");
    }
  }
});
  
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_REPETE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.on('messageCreate', async (message) => {
    // Vérifier si l'auteur du message est un bot ou si le message ne commence pas par le préfixe
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    // Récupération de la commande et des arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    // Gestion de la commande "repete"
    if (command === 'repete') {
      // Vérifier si l'utilisateur a la permission d'administrateur
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        return message.reply("Désolé, cette commande est réservée aux employés.");
      }
  
      // Obtenir le message à répéter
      const messageToRepeat = args.join(' ');
  
      // Vérifier si un message a été fourni
      if (!messageToRepeat) {
        return message.reply('Veuillez fournir un message à répéter ( ex : **<@994859660727291985> repete [le message à répeter]** )');
      }
  
      // Répéter le message
      message.channel.send(messageToRepeat);
    }
  });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_REPETE&SUPPR~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  client.on('messageCreate', async (message) => {
    // Vérifier si l'auteur du message est un bot ou si le message ne commence pas par le préfixe
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    // Récupération de la commande et des arguments
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    // Gestion de la commande "repete"
    if (command === 'repete' || command === 'repete&suppr') {
      // Vérifier si l'utilisateur a la permission d'administrateur
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        return message.reply("Désolé, cette commande est réservée aux employés.");
      }
  
      // Obtenir le message à répéter
      const messageToRepeat = args.join(' ');
  
      // Vérifier si un message a été fourni
      if (!messageToRepeat) {
        return message.reply('Veuillez fournir un message à répéterex : (ex : **<@994859660727291985> repete&suppr [le message à répeter]**).');
      }
  
      // Répéter le message
      message.channel.send(messageToRepeat);
  
      // Supprimer le message initial si la commande est 'repete&suppr'
      if (command === 'repete&suppr') {
        message.delete();
      }
    }
  });

//react message
client.on('messageReactionAdd', async (reaction, user) => {
    if (user.bot) return; 
  
    try {
      if (!reaction.message.guild) return; 
  
      await reaction.message.react(reaction.emoji);
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la réaction:', error);
    }
  });

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_ChatGPT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  client.on('message', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + CHATGPT_COMMAND)) {
        const userInput = message.content.slice(prefix.length + CHATGPT_COMMAND.length).trim();

        const response = await getChatGPTResponse(userInput);
        message.channel.send(response);
    }
});

async function getChatGPTResponse(prompt) {
    try {
        const response = await axios.post(
            CHATGPT_API_URL,
            {
                prompt: prompt,
                max_tokens: 100,
                n: 1,
                stop: null,
                temperature: 1.0,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHATGPT_API_KEY}`,
                },
            }
        );

        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Erreur lors de l\'appel à l\'API ChatGPT:', error);
        return 'Désolé, je ne peux pas répondre en ce moment.';
    }
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_EXERCICE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const { exercices } = require('./commands/liste_exercices.js');
  
  client.on('message', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (command === 'exercice') {
      let groupeMusculaire = args.join(' ');
      let exercicesFiltres = exercices;
  
      if (groupeMusculaire) {
        exercicesFiltres = exercices.filter(e => e.groupeMusculaire === groupeMusculaire);
        if (exercicesFiltres.length === 0) {
          message.channel.send(`Aucun exercice trouvé pour le groupe musculaire "${groupeMusculaire}". Vérifiez que le groupe musculaire est correct.`);
          return;
          }
          }
          const index = Math.floor(Math.random() * exercicesFiltres.length);
          const exercice = exercicesFiltres[index];
          message.channel.send(`**${exercice.nom}** - ${exercice.description}
*(Groupe musculaire : **${exercice.groupeMusculaire}**)*`);
        }
      });

client.on("messageCreate", async message => {
    if (message.author.bot) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (message.content.startsWith(prefix)) {
      switch (command) {
        case 'exerciceaide':
        case 'exercicehelp':
        case 'exercicesaide':
        case 'exerciceshelp':
        case 'aideexercice':
        case 'helpexercice':
        case 'aideexercices':
        case 'helpexercices':
          const embed = new Discord.MessageEmbed()
            .setColor("YELLOW")
            .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
            .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
            .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
            .setDescription("\n\n\nLe prefix de <@994859660727291985> est **sa mention**.\n\n\n<@994859660727291985> **exercice** \n\n Envoie un exercice au hasard sur n'importe quel groupe musculaire (75 possiblité).\n\n\n<@994859660727291985> **exercice** *[groupe musculaire]*\n\nEnvoie un exercice au hasard sur le groupe musculaire cité (10 groupes musculaires).\n       - épaules\n       - biceps\n       - triceps\n       - pectoraux\n       - abdominaux\n       - dos\n       - fessiers\n       - ischios jambiers\n       - quadriceps\n       - mollets\n\n\n<@994859660727291985> **exercice+**\n\nEnvoie 11 boutons pour afficher des exercice de manière totalement aléatoire ou au choix du groupe musculaire.")
            .setTitle("Liste des commandes EXERCICE");
            message.reply({ embeds: [embed] });
          break;
      }
    }
  }); 
  

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_REINVITE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Vérifier si la commande est "reinvit", "reinvite" ou "réinvite"
  if (['reinvit', 'reinvite', 'réinvite'].includes(command)) {
    // Vérifier si l'utilisateur est un administrateur
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }

    let userID = args[0];

    // Vérifier si un user_id est fourni
    if (!userID) {
      const response = await message.reply("Veuillez fournir un ID d'utilisateur.");

      const filter = m => m.author.id === message.author.id;
      const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30000 });

      if (collected.size === 0) {
        return response.edit("Le temps est écoulé, veuillez réessayer.");
      }

      userID = collected.first().content;
    }

    try {
      // Obtenir l'utilisateur
      const user = await client.users.fetch(userID);

      // Envoyer le message privé
      user.send(`Bonjour/bonsoir <@${userID}>, 

Vous avez rejoint le serveur 𝐺𝑂𝑀𝑈𝑆𝐶𝑈, cependant il semblerait que vous n'avez pas passé la vérification et donc avez été expulsé du serveur. Je vous invite donc à cliquer sur le lien ci-dessous afin de pouvoir réintégrer notre communauté. 
Lors de votre arrivée, pensez à passer la vérification en réécrivant les lettres que vous voyez sur : <#987834307651457044>. 
      
      *Cordialement,  
      Équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈.*
      
  https://discord.gg/T9fUEbsJrt`);

      message.channel.send(`Le message de ré-invitation a été envoyé à <@${userID}>.`);
    } catch (error) {
      console.error(error);
      message.reply("Impossible d'envoyer un message à cet utilisateur. Assurez-vous que l'ID est correct.");
    }
  }
});



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_INVITE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  // Vérifier si la commande est "reinvit", "reinvite" ou "réinvite"
  if (['invit', 'invite', 'invitation'].includes(command)) {
    // Vérifier si l'utilisateur est un administrateur
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }

    let userID = args[0];

    // Vérifier si un user_id est fourni
    if (!userID) {
      const response = await message.reply("Veuillez fournir un ID d'utilisateur.");

      const filter = m => m.author.id === message.author.id;
      const collected = await message.channel.awaitMessages({ filter, max: 1, time: 30000 });

      if (collected.size === 0) {
        return response.edit("Le temps est écoulé, veuillez réessayer.");
      }

      userID = collected.first().content;
    }

    try {
      // Obtenir l'utilisateur
      const user = await client.users.fetch(userID);

      // Envoyer le message privé
      user.send(`Bonjour/bonsoir <@${userID}>, 

Je me permet de vous envoyer ce message pour le serveur discord 𝐺𝑂𝑀𝑈𝑆𝐶𝑈, une super communauté de passionnés de sport plus précisément de musculation. Je vous invite donc à cliquer sur le lien ci-dessous afin de pouvoir réintégrer notre communauté. 
Lors de votre arrivée, pensez à passer la vérification en réécrivant les lettres que vous voyez sur : <#987834307651457044>. 
      
      *Cordialement,  
      Équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈.*
      
  https://discord.gg/T9fUEbsJrt`);

      message.channel.send(`Le message d'invitation a été envoyé à <@${userID}>.`);
    } catch (error) {
      console.error(error);
      message.reply("Impossible d'envoyer un message à cet utilisateur. Assurez-vous que l'ID est correct.");
    }
  }
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_EXERCICE+~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const exercicePlus = require('./commands/exercice+.js');
exercicePlus.execute(client, null, null, prefix, exercices);

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Command_MUTE~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(`<@994859660727291985>`) || message.author.bot) return;

  const args = message.content
    .replace(`<@994859660727291985>`, '')
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'mute') {
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.reply("Vous n'avez pas la permission d'utiliser cette commande.");
    }

    const target = message.mentions.members.filter(member => member.id !== client.user.id).first() || message.guild.members.cache.get(args[0]);

    if (!target) {
      return message.reply("Veuillez mentionner un utilisateur ou fournir son ID.");
    }

    const muteRoleID = '991408401538105445';
    const muteRole = message.guild.roles.cache.get(muteRoleID);

    if (!muteRole) {
      return message.reply("Le rôle de mute n'a pas été trouvé.");
    }

    let muteDuration = args[1] || 'indefini';
    let muteTime = null;

    if (muteDuration !== 'indefini') {
      const timePattern = /^(\d+)\s*(minutes?|minute|min|heures?|heure|h)$/i;
      const match = muteDuration.match(timePattern);

      if (!match) {
        return message.reply('Veuillez spécifier une durée valide (en minutes ou heures). Exemple: 10min, 2h, 1heure');
      }

      const value = parseInt(match[1]);
      const unit = match[2].toLowerCase();

      if (unit.startsWith('min')) {
        muteTime = value * 60 * 1000;
      } else if (unit.startsWith('h') || unit.startsWith('heure')) {
        muteTime = value * 60 * 60 * 1000;
      }
    }

    await target.roles.add(muteRole);
    message.channel.send(`${target} a été muté${muteTime ? ` pour ${muteDuration}` : ' indéfiniment'}.`);

    if (muteTime) {
      setTimeout(async () => {
        // Vérifiez si l'utilisateur est toujours muté avant de le démuter.
        if (target.roles.cache.has(muteRoleID)) {
          await target.roles.remove(muteRole);
          message.channel.send(`${target} a été démuté.`);
        }
      }, muteTime);
    }
  } else if (command === 'demute') {
    if (!message.member.permissions.has('MANAGE_ROLES')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }
  
    const target = message.mentions.members.filter(member => member.id !== client.user.id).first() || message.guild.members.cache.get(args[0]);
    if (!target) {
      return message.reply("Veuillez mentionner un utilisateur ou fournir son ID.");
    }
    
    const muteRoleID = '991408401538105445';
    const muteRole = message.guild.roles.cache.get(muteRoleID);
    
    if (!muteRole) {
      return message.reply("Le rôle de mute n'a pas été trouvé.");
    }
    
    if (!target.roles.cache.has(muteRoleID)) {
      return message.reply(`${target} n'est pas actuellement mute.`);
    }
    
    await target.roles.remove(muteRole);
    message.channel.send(`${target} a été démuté.`);
  }
});    
