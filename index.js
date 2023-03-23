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
            case 'invit':
            case 'invite':
            case 'invitation':
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
                        .setFooter("Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈.")
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
                        .setDescription("Le prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> **discord** \n<@994859660727291985> **roles**\n<@994859660727291985> **departements**\n<@994859660727291985> **discussion**\n<@994859660727291985> **performances**\n<@994859660727291985> **evolutions**\n<@994859660727291985> **programmes**\n<@994859660727291985> **playlist**\n<@994859660727291985> **reseauxsociaux**\n<@994859660727291985> **gymbro**")
                        .setTitle("Liste des commandes");
                    message.channel.send({ embeds: [embed] });
                    break;
            case 'aide+':
            case 'help+':
                if (message.member.permissions.has("ADMINISTRATOR")) {
                    const embed = new Discord.MessageEmbed()
                        .setColor("RED")
                        .setFooter("Au nom de l'équipe  𝐺𝑂𝑀𝑈𝑆𝐶𝑈.")
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
                        .setDescription("Le prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> **suppr** *[nombre de messages]*\n<@994859660727291985> **code**\n<@994859660727291985> **repete** *[message]*\n<@994859660727291985> **repete&suppr** *[message]*\n<@994859660727291985> **reinvite** *[user_id]*")
                        .setTitle("Liste des commandes EMPLOYÉS");
                    message.channel.send({ embeds: [embed] });
                    } else {
                    message.reply("Désolé, cette commande est réservée aux employés.");
                    } break;
            case 'reinvit': 
            case 'reinvite': 
            case 'réinvite': 
                if (message.member.permissions.has("ADMINISTRATOR")) {  
                    const args = message.content.slice(prefix.length).trim().split(/ +/);
                    const command = args.shift().toLowerCase();
                

                        const userID = args[0];
                        const user = await client.users.fetch(userID);
                
                        if (!user) {
                            return message.channel.send(`L'utilisateur avec l'ID ${userID} n'a pas été trouvé.`);
                        }
                
                        const invitationMessage = `

Bonjour <@${userID}>, 

Hier vous avez rejoins le serveur **𝐺𝑂𝑀𝑈𝑆𝐶𝑈**, cependant il semblerait que vous n'avez pas passé la vérification et donc avez été expulsé du serveur. Je vous invite donc à cliquer sur le lien ci-dessous afin de pouvoir réintégrer notre communauté.
**Lors  de votre arrivé, pensez à passer la vérification en réécrivant les lettres que vous voyez sur  : <#987834307651457044> .**

Cordialement,
*Équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈*

https://discord.gg/T9fUEbsJrt`;
                
                        user.send(invitationMessage)
                            .then(() => message.reply(`Invitation envoyée à <@${userID}> !`))
                            .catch(error => message.reply(`Impossible d'envoyer un message à <@${userID}>: ${error}`));
                    } else {
                            message.reply("Désolé, cette commande est réservée aux employés.");
                    } break;

                };           
        }

        

//SUPPR
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

// MENU : ENVOIE_LES_MENUS_POUR_CHOISIR_SON_DÉPARTEMENT
const { MessageActionRow, MessageSelectMenu } = Discord;

const createMenu = (customId, start, end, extraOptions = []) => {
    const menu = new MessageSelectMenu()
        .setCustomId(customId)
        .setPlaceholder(`Choisissez votre département du ${start} au ${end}`)
        .addOptions(
            Array.from({ length: end - start + 1 }, (_, i) => {
                const num = (i + start).toString().padStart(2, '0');
                return {
                    label: `Département ${num}`,
                    value: `departement_${num}`,
                };
            }).concat(extraOptions)
        );

    const row = new MessageActionRow()
        .addComponents(menu);

    return row;
};

const handleInteraction = async (interaction, customIdPrefix) => {
    if (!interaction.isSelectMenu() || !interaction.customId.startsWith(customIdPrefix)) return;

    const choice = interaction.values[0];
    const departementNumber = choice.split('_')[1];
    const roleName = `🧭┃Département ${departementNumber}`;
    const role = interaction.guild.roles.cache.find(r => r.name === roleName);

    if (!role) {
        await interaction.reply({ content: `Le rôle ${roleName} n'a pas été trouvé.`, ephemeral: true });
        return;
    }

    try {
        await interaction.member.roles.add(role);
        await interaction.reply({ content: `Le rôle ${roleName} vous a été attribué.`, ephemeral: true });
    } catch (error) {
        console.error(`Impossible d'attribuer le rôle en raison de: ${error}`);
        await interaction.reply({ content: "Une erreur s'est produite lors de l'attribution du rôle.", ephemeral: true });
    }
};

client.on("messageCreate", async message => {
    if (message.content === "ENVOIE_LES_MENUS_POUR_CHOISIR_SON_DÉPARTEMENT") 
    if (message.member.permissions.has("ADMINISTRATOR")) {
        const menu1 = createMenu('departement_menu1', 1, 25);
        const menu2 = createMenu('departement_menu2', 26, 50);
        const menu3 = createMenu('departement_menu3', 51, 75);
        const menu4 = createMenu('departement_menu4', 76, 95, [971, 972, 973, 974, 976].map(num => ({
            label: `Département ${num}`,
            value: `departement_${num}`,
        })));

        await message.channel.send({
            content: '**Sélectionnez votre département** :',
            components: [menu1, menu2, menu3, menu4],
        });
    } else {
        message.reply("Désolé, cette commande est réservée aux employés.");
    }
});

client.on("interactionCreate", async interaction => {
    handleInteraction(interaction, 'departement_menu');
});

  //CODE
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
  
//REPETE
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

  //REPETE&SUPPR
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

  //ChatGPT
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

//exercice
const exercices = [
    {
      nom: 'Développé couché',
      description: 'Un exercice classique pour travailler les pectoraux, les triceps et les deltoïdes antérieurs.',
      image: 'https://media.giphy.com/media/7z0hNl6vQUgWpf79Nc/giphy.gif'
    },
    {
      nom: 'Squat',
      description: 'Un exercice de base pour renforcer les quadriceps, les ischio-jambiers, les fessiers et le bas du dos.',
      image: 'https://media.giphy.com/media/8fen5LSZcHQ5O/giphy.gif'
    },
    {
      nom: 'Traction à la barre fixe',
      description: "Un exercice de base pour travailler les muscles du dos, notamment les grands dorsaux, les biceps et les avant-bras.",
      image: 'https://media.giphy.com/media/UJG4jKpU4Ylqg/giphy.gif'
    },
    {
      nom: 'Rowing haltère',
      description: "Un exercice qui cible principalement les grands dorsaux, les trapèzes, les rhomboïdes et les biceps.",
      image: 'https://media.giphy.com/media/xUOwGjKz9GHFkmC8hy/giphy.gif'
    },
    {
      nom: 'Curl biceps',
      description: "Un exercice classique pour développer la force et la masse des biceps et des avant-bras.",
      image: 'https://media.giphy.com/media/13NFPU6Z1NL0n6/giphy.gif'
    },
    {
      nom: 'Dips',
      description: "Un exercice pour renforcer les triceps, les pectoraux et les deltoïdes antérieurs en utilisant le poids du corps.",
      image: 'https://media.giphy.com/media/13rQ7rrTrvZXlm/giphy.gif'
    },
    {
      nom: 'Leg press',
      description: "Un exercice de musculation des jambes qui cible les quadriceps, les fessiers, les ischio-jambiers et les mollets.",
      image: 'https://media.giphy.com/media/Tj83GRql5Vh8A/giphy.gif'
    },
    {
      nom: 'Soulevé de terre',
      description: "Un exercice polyarticulaire qui renforce le dos, les jambes, les fessiers et les muscles du tronc.",
      image: 'https://media.giphy.com/media/13GV4kwFzH4D9C/giphy.gif'
    },
    {
      nom: 'Élévation latérale',
      description: "Un exercice d'isolation pour travailler les deltoïdes latéraux et améliorer la largeur des épaules.",
      image: 'https://media.giphy.com/media/H3lf6hW8qVz1K/giphy.gif'
    },
    {
      nom: 'Fentes avant',
      description: "Un exercice pour renforcer les quadriceps, les ischio-jambiers et les fessiers, tout en améliorant l'équilibre et la stabilité.",
      image: 'https://media.giphy.com/media/lnKJuBPiPiwbu/giphy.gif'
    },
   
    {
        nom: 'Crunch',
        description: "Un exercice pour renforcer les muscles abdominaux, notamment le grand droit de l'abdomen.",
        image: 'https://media.giphy.com/media/lXuJ7Vx0D0trpKnZdI/giphy.gif'
      },
      {
        nom: 'Extension des mollets',
        description: "Un exercice d'isolation pour renforcer et tonifier les muscles du mollet, notamment le gastrocnémien et le soléaire.",
        image: 'https://media.giphy.com/media/xUOwG1mU5C6G5mXRwA/giphy.gif'
      },
      {
        nom: 'Développé épaules (militaire)',
        description: "Un exercice pour développer la force et la masse des épaules, en ciblant principalement les deltoïdes et les trapèzes.",
        image: 'https://media.giphy.com/media/9xNPUKjOWxFbJGkYnG/giphy.gif'
      },
      {
        nom: 'Pull-over avec haltère',
        description: "Un exercice pour étirer et renforcer les muscles du haut du corps, notamment les pectoraux, les grands dorsaux et les triceps.",
        image: 'https://media.giphy.com/media/MOcV5Bq3aKO7Z0b0Xu/giphy.gif'
      },
      {
        nom: 'Biceps curl à la barre',
        description: "Un exercice pour travailler les biceps et les avant-bras, en utilisant une barre droite ou une barre EZ pour varier la prise.",
        image: 'https://media.giphy.com/media/xT9IglNIKpMlZVwWnK/giphy.gif'
      },
      {
        nom: 'Skullcrushers (barre au front)',
        description: "Un exercice d'isolation pour les triceps, qui cible spécifiquement la longue portion du triceps.",
        image: 'https://media.giphy.com/media/l378eTlCmklFLmYc8/giphy.gif'
      },
      {
        nom: 'Pec deck (butterfly)',
        description: "Un exercice pour renforcer les pectoraux, en utilisant une machine spécifique pour effectuer des mouvements d'adduction des bras.",
        image: 'https://media.giphy.com/media/m4E4Pi45DrifK/giphy.gif'
      },
      {
        nom: 'Presse à cuisses',
        description: "Un exercice pour travailler les quadriceps, les fessiers, les ischio-jambiers et les mollets, en utilisant une machine à presse.",
        image: 'https://media.giphy.com/media/l4EpfxSeko5S1ShH6/giphy.gif'
      },
      {
        nom: 'Good mornings',
        description: "Un exercice pour renforcer les muscles du bas du dos, les ischio-jambiers et les fessiers, en réalisant une flexion du tronc vers l'avant.",
        image: 'https://media.giphy.com/media/ZF9dIgZ2ywWiDlMpPZ/giphy.gif'
      },
      {
        nom: 'Face pull',
        description: "Un exercice pour renforcer les muscles des épaules, notamment les deltoïdes postérieurs, les trapèzes et les rhomboïdes.",
        image: 'https://media.giphy.com/media/12oBhWpWYxkMUw/giphy.gif'
      },
      {
        nom: 'Cable crunch',
        description: "Un exercice pour renforcer les abdominaux, en utilisant un câble et une poulie pour effectuer des mouvements de crunch.",
        image: 'https://media.giphy.com/media/l2Sqf3qBvLjWkV8JG/giphy.gif'
      },
      {
        nom: 'Donkey calf raises',
        description: "Un exercice pour renforcer les muscles du mollet, en réalisant des extensions des mollets avec un partenaire ou une machine spécifique.",
        image: 'https://media.giphy.com/media/l1J9L9A9v6FSHLJW8/giphy.gif'
      }
    ];
    
      

  client.on('message', (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if (command === 'exercice') {
      const index = Math.floor(Math.random() * exercices.length);
      const exercice = exercices[index];
      message.channel.send(`**${exercice.nom}** - ${exercice.description}`);
    } else if (command === 'help') {
      message.channel.send(
        'Liste des commandes disponibles :\n\n' +
          '**!exercice** - Affiche un exercice aléatoire.\n' +
          '**!help** - Affiche cette liste de commandes.',
      );
    }
  });