const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
        Discord.Intents.FLAGS.MESSAGE_CONTENT,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_PRESENCES,

    ]
});

client.login(process.env.TOKEN);
const prefix = (process.env.PREFIX);

client.on("ready", () => {
    console.log(`✅ Le Bot ${client.user.tag} est opérationnel ! ✅`)

    client.user.setPresence({
        status: 'online', //'online', 'idle', 'dnd' ou 'invisible'
        activities: [
          {
            name: '𝐺𝑂𝑀𝑈𝑆𝐶𝑈',
            type: 'STREAMING', //'PLAYING', 'STREAMING', 'LISTENING', 'WATCHING' ou 'COMPETING'
            url: 'https://discord.gg/T9fUEbsJrt', // URL facultative pour le type 'STREAMING'
          },
        ],
      });
    });



//          .oooooo.         .oooooo.   ooooo   ooooo       .o.       ooooo      ooo ooooo      ooo oooooooooooo ooooo        
//         d'     `b        d8P'  `Y8b  `888'   `888'      .888.      `888b.     `8' `888b.     `8' `888'     `8 `888'        
//        d' .d"bd  8      888           888     888      .8"888.      8 `88b.    8   8 `88b.    8   888          888         
//        8  8. 8  .d      888           888ooooo888     .8' `888.     8   `88b.  8   8   `88b.  8   888oooo8     888         
//        Y.  YoP"b'       888           888     888    .88ooo8888.    8     `88b.8   8     `88b.8   888    "     888         
//         8.      .8      `88b    ooo   888     888   .8'     `888.   8       `888   8       `888   888       o  888       o 
//          YooooooP        `Y8bood8P'  o888o   o888o o88o     o8888o o8o        `8  o8o        `8  o888ooooood8 o888ooooood8 
                                                                                                                    
                                                                                                                    
                                                                                                                    
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


                
//        ooooo   ooooo oooooooooooo ooooo        ooooooooo.     .o            o.   
//        `888'   `888' `888'     `8 `888'        `888   `Y88.  .8'            `8.  
//         888     888   888          888          888   .d88' .8'      88      `8. 
//         888ooooo888   888oooo8     888          888ooo88P'  88       88       88 
//         888     888   888    "     888          888         88   8888888888   88 
//         888     888   888       o  888       o  888         `8.      88      .8' 
//        o888o   o888o o888ooooood8 o888ooooood8 o888o         `8.     88     .8'   



            case 'aide':
            case 'help':
                    const embed = new Discord.MessageEmbed()
                        .setColor("BLUE")
                        .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
                        .setDescription("\nLe prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> *[le salon que vous cherchez]*\n\n<@994859660727291985> **exerciceaide**\n<@994859660727291985> **exercice**\n<@994859660727291985> **exercice+**\n\n<@994859660727291985> **chatgpt**\n\n<@994859660727291985> **musique** *[lien YouTube]*")
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
                        .setDescription("\nLe prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> **code**\n\n<@994859660727291985> **suppr** *[nombre de messages]*\n\n<@994859660727291985> **repete** *[message]*\n<@994859660727291985> **repete&suppr** *[message]*\n\n<@994859660727291985> **invite** *[user_id]*\n<@994859660727291985> **reinvite** *[user_id]*\n\n<@994859660727291985> **mute** *[user_id] ou [user_mention] (facultatif : [temps en min/h])*\n<@994859660727291985> **demute** *[user_id] ou [user_mention]*\n\n<@994859660727291985> **embed**")
                        .setTitle("Liste des commandes EMPLOYÉS");
                    message.reply({ embeds: [embed] });
                    } else {
                    message.reply("Désolé, cette commande est réservée aux employés.");
                    } break;
                    
                };
        }
        


//        .oooooo..o ooooo     ooo ooooooooo.   ooooooooo.   ooooooooo.   
//        d8P'    `Y8 `888'     `8' `888   `Y88. `888   `Y88. `888   `Y88. 
//        Y88bo.       888       8   888   .d88'  888   .d88'  888   .d88' 
//         `"Y8888o.   888       8   888ooo88P'   888ooo88P'   888ooo88P'  
//             `"Y88b  888       8   888          888          888`88b.    
//        oo     .d8P  `88.    .8'   888          888          888  `88b.  
//        8""88888P'     `YbodP'    o888o        o888o        o888o  o888o 
                                                                         
                                                                         
                                                                         
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
}
});



//        oooooooooo.   oooooooooooo ooooooooo.         .o.       ooooooooo.   ooooooooooooo oooooooooooo ooo        ooooo oooooooooooo ooooo      ooo ooooooooooooo 
//        `888'   `Y8b  `888'     `8 `888   `Y88.      .888.      `888   `Y88. 8'   888   `8 `888'     `8 `88.       .888' `888'     `8 `888b.     `8' 8'   888   `8 
//         888      888  888          888   .d88'     .8"888.      888   .d88'      888       888          888b     d'888   888          8 `88b.    8       888      
//         888      888  888oooo8     888ooo88P'     .8' `888.     888ooo88P'       888       888oooo8     8 Y88. .P  888   888oooo8     8   `88b.  8       888      
//         888      888  888    "     888           .88ooo8888.    888`88b.         888       888    "     8  `888'   888   888    "     8     `88b.8       888      
//         888     d88'  888       o  888          .8'     `888.   888  `88b.       888       888       o  8    Y     888   888       o  8       `888       888      
//        o888bood8P'   o888ooooood8 o888o        o88o     o8888o o888o  o888o     o888o     o888ooooood8 o8o        o888o o888ooooood8 o8o        `8      o888o  



const { MessageActionRow, MessageSelectMenu, MessageButton } = require('discord.js');
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

const createRemoveButton = () => {
    const button = new MessageButton()
        .setCustomId('departement_remove_departements')
        .setLabel('Retirer tous les Départements')
        .setStyle('DANGER');

    const row = new MessageActionRow()
        .addComponents(button);

    return row;
};

const handleInteraction = async (interaction) => {
    if (interaction.isSelectMenu() && interaction.customId.startsWith('departement_menu')) {
        const choice = interaction.values[0];
        const departementNumber = choice.split('_')[1];
        const roleName = `🧭┃Département ${departementNumber}`;
        const role = interaction.guild.roles.cache.find(r => r.name === roleName);

        if (!role) {
            await interaction.reply({ content: `Le rôle **${roleName}** n'a pas été trouvé.`, ephemeral: true });
            return;
        }

        try {
            await interaction.member.roles.add(role);
            await interaction.reply({ content: `Le rôle **${roleName}** vous a été attribué.`, ephemeral: true });
        } catch (error) {
            console.error(`Impossible d'attribuer le rôle en raison de: **${error}**`);
            await interaction.reply({ content: "Une erreur s'est produite lors de l'attribution du rôle.", ephemeral: true });
        }
    } else if (interaction.isButton() && interaction.customId === 'departement_remove_departements') {
        const departementRoles = interaction.member.roles.cache.filter(role => role.name.startsWith('🧭┃Département'));
        const removedRoles = [];

        for (const role of departementRoles.values()) {
            try {
                await interaction.member.roles.remove(role);
                removedRoles.push(role.name);
            } catch (error) {
                console.error(`Impossible de retirer le rôle en raison de: **${error}**`);
            }
        }

            await interaction.reply({ content: `Le(s) rôle(s) suivant(s) vous ont été retiré(s) : **${removedRoles.join('**, **')}**`, ephemeral: true });
    }
};

client.on("messageCreate", async message => {
    if (message.content === "ENVOIE_LES_MENUS_POUR_CHOISIR_SON_DÉPARTEMENT") {
        if (message.member.permissions.has("ADMINISTRATOR")) {
            const menu1 = createMenu('departement_menu1', 1, 25);
            const menu2 = createMenu('departement_menu2', 26, 50);
            const menu3 = createMenu('departement_menu3', 51, 75);
            const menu4 = createMenu('departement_menu4', 76, 95, [971, 972, 973, 974, 976].map(num => ({
              label: `Département ${num}`,
              value: `departement_${num}`,
          })));

          const removeButtonRow = createRemoveButton();

          await message.channel.send({ content: '**Sélectionnez votre département** :', components: [menu1, menu2, menu3, menu4] });
          await message.channel.send({ content: '*(+971, 972, 973, 974, 976)*', components: [] });
          await message.channel.send({ content: ' ', components: [removeButtonRow] });

      } else {
          message.reply("Désolé, cette commande est réservée aux employés.");
      }
  }
});

client.on("interactionCreate", async interaction => {
  try {
      await handleInteraction(interaction);
  } catch (error) {
      console.error(error);
      await interaction.reply({ content: "Une erreur s'est produite lors du traitement de votre interaction.", ephemeral: true });
  }
});

             

//          .oooooo.     .oooooo.   oooooooooo.   oooooooooooo 
//         d8P'  `Y8b   d8P'  `Y8b  `888'   `Y8b  `888'     `8 
//        888          888      888  888      888  888         
//        888          888      888  888      888  888oooo8    
//        888          888      888  888      888  888    "    
//        `88b    ooo  `88b    d88'  888     d88'  888       o 
//         `Y8bood8P'   `Y8bood8P'  o888bood8P'   o888ooooood8 
                                                                                                                           
                                                                                                                           
                                                                                                                           
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
 


//        ooooooooo.   oooooooooooo ooooooooo.   oooooooooooo ooooooooooooo oooooooooooo 
//        `888   `Y88. `888'     `8 `888   `Y88. `888'     `8 8'   888   `8 `888'     `8 
//        888   .d88'  888          888   .d88'  888              888       888         
//        888ooo88P'   888oooo8     888ooo88P'   888oooo8         888       888oooo8    
//        888`88b.     888    "     888          888    "         888       888    "    
//        888  `88b.   888       o  888          888       o      888       888       o 
//        o888o  o888o o888ooooood8 o888o        o888ooooood8     o888o     o888ooooood8 
                                                                              
                                                                              
                                                                              
client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'repete') {
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        return message.reply("Désolé, cette commande est réservée aux employés.");
      }
  
      const messageToRepeat = args.join(' ');
  
      if (!messageToRepeat) {
        return message.reply('Veuillez fournir un message à répéter ( ex : **<@994859660727291985> repete [le message à répeter]** )');
      }
  
      message.channel.send(messageToRepeat);
    }
  });



//        ooooooooo.   oooooooooooo ooooooooo.   oooooooooooo ooooooooooooo oooooooooooo        .oo.           .oooooo..o ooooo     ooo ooooooooo.   ooooooooo.   ooooooooo.   
//        `888   `Y88. `888'     `8 `888   `Y88. `888'     `8 8'   888   `8 `888'     `8      .88' `8.        d8P'    `Y8 `888'     `8' `888   `Y88. `888   `Y88. `888   `Y88. 
//         888   .d88'  888          888   .d88'  888              888       888              88.  .8'        Y88bo.       888       8   888   .d88'  888   .d88'  888   .d88' 
//         888ooo88P'   888oooo8     888ooo88P'   888oooo8         888       888oooo8         `88.8P           `"Y8888o.   888       8   888ooo88P'   888ooo88P'   888ooo88P'  
//         888`88b.     888    "     888          888    "         888       888    "          d888[.8'            `"Y88b  888       8   888          888          888`88b.    
//         888  `88b.   888       o  888          888       o      888       888       o      88' `88.        oo     .d8P  `88.    .8'   888          888          888  `88b.  
//        o888o  o888o o888ooooood8 o888o        o888ooooood8     o888o     o888ooooood8      `bodP'`88.      8""88888P'     `YbodP'    o888o        o888o        o888o  o888o 



client.on('messageCreate', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
    if (command === 'repete' || command === 'repete&suppr') {
      if (!message.member.permissions.has('ADMINISTRATOR')) {
        return message.reply("Désolé, cette commande est réservée aux employés.");
      }
  
      const messageToRepeat = args.join(' ');
  
      if (!messageToRepeat) {
        return message.reply('Veuillez fournir un message à répéterex : (ex : **<@994859660727291985> repete&suppr [le message à répeter]**).');
      }
  
      message.channel.send(messageToRepeat);
  
      if (command === 'repete&suppr') {
        message.delete();
      }
    }
  });



//        ooooooooo.   oooooooooooo       .o.         .oooooo.   ooooooooooooo ooooo   .oooooo.   ooooo      ooo 
//        `888   `Y88. `888'     `8      .888.       d8P'  `Y8b  8'   888   `8 `888'  d8P'  `Y8b  `888b.     `8' 
//         888   .d88'  888             .8"888.     888               888       888  888      888  8 `88b.    8  
//         888ooo88P'   888oooo8       .8' `888.    888               888       888  888      888  8   `88b.  8  
//         888`88b.     888    "      .88ooo8888.   888               888       888  888      888  8     `88b.8  
//         888  `88b.   888       o  .8'     `888.  `88b    ooo       888       888  `88b    d88'  8       `888  
//        o888o  o888o o888ooooood8 o88o     o8888o  `Y8bood8P'      o888o     o888o  `Y8bood8P'  o8o        `8  



client.on('messageReactionAdd', async (reaction, user) => {
  if (user.bot) return;

  const message = reaction.message;
  if (message.author.bot) return; 
  await message.react(reaction.emoji);
});
  

//          .oooooo.   ooooo   ooooo       .o.       ooooooooooooo   .oooooo.    ooooooooo.   ooooooooooooo 
//         d8P'  `Y8b  `888'   `888'      .888.      8'   888   `8  d8P'  `Y8b   `888   `Y88. 8'   888   `8 
//        888           888     888      .8"888.          888      888            888   .d88'      888      
//        888           888ooooo888     .8' `888.         888      888            888ooo88P'       888      
//        888           888     888    .88ooo8888.        888      888     ooooo  888              888      
//        `88b    ooo   888     888   .8'     `888.       888      `88.    .88'   888              888      
//         `Y8bood8P'  o888o   o888o o88o     o8888o     o888o      `Y8bood8P'   o888o            o888o      




const CHATGPT_COMMAND = 'chatgpt';
const CHATGPT_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const CHATGPT_API_KEY = (process.env.GPT_KEY);
const axios = require('axios');

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



//        oooooooooooo ooooooo  ooooo oooooooooooo ooooooooo.     .oooooo.   ooooo   .oooooo.   oooooooooooo 
//        `888'     `8  `8888    d8'  `888'     `8 `888   `Y88.  d8P'  `Y8b  `888'  d8P'  `Y8b  `888'     `8 
//         888            Y888..8P     888          888   .d88' 888           888  888           888         
//         888oooo8        `8888'      888oooo8     888ooo88P'  888           888  888           888oooo8    
//         888    "       .8PY888.     888    "     888`88b.    888           888  888           888    "    
//         888       o   d8'  `888b    888       o  888  `88b.  `88b    ooo   888  `88b    ooo   888       o 
//        o888ooooood8 o888o  o88888o o888ooooood8 o888o  o888o  `Y8bood8P'  o888o  `Y8bood8P'  o888ooooood8



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
  
  

//        oooooooooooo ooooooo  ooooo oooooooooooo ooooooooo.     .oooooo.   ooooo   .oooooo.   oooooooooooo            
//        `888'     `8  `8888    d8'  `888'     `8 `888   `Y88.  d8P'  `Y8b  `888'  d8P'  `Y8b  `888'     `8            
//         888            Y888..8P     888          888   .d88' 888           888  888           888             88     
//         888oooo8        `8888'      888oooo8     888ooo88P'  888           888  888           888oooo8        88     
//         888    "       .8PY888.     888    "     888`88b.    888           888  888           888    "    8888888888 
//         888       o   d8'  `888b    888       o  888  `88b.  `88b    ooo   888  `88b    ooo   888       o     88     
//        o888ooooood8 o888o  o88888o o888ooooood8 o888o  o888o  `Y8bood8P'  o888o  `Y8bood8P'  o888ooooood8     88     
                                                                                                              
                                                                                                              

client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'exercice+') {
    const boutons = ['Épaules', 'Biceps', 'Triceps', 'Pectoraux', 'Abdominaux', 'Dos', 'Fessiers', 'Ischios Jambiers', 'Quadriceps', 'Mollets'].map((groupe, index) => {
      return new MessageButton()
        .setCustomId(`exercice_groupeMusculaire-${index}`)
        .setLabel(groupe)
        .setStyle('PRIMARY');
    });

    const boutonAleatoire = new MessageButton()
      .setCustomId('exercice_groupeMusculaire-aleatoire')
      .setLabel('Aléatoire')
      .setStyle('PRIMARY');

    const row1 = new MessageActionRow().addComponents(boutons.slice(0, 5));
    const row2 = new MessageActionRow().addComponents(boutons.slice(5, 10));
    const row3 = new MessageActionRow().addComponents(boutonAleatoire);

    await message.reply({ content: 'Choisissez un groupe musculaire pour afficher un exercice au hasard parmi celui ci :', components: [row1, row2, row3] });
  }
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isButton() || !interaction.customId.startsWith('exercice_groupeMusculaire')) return;


  const buttonId = interaction.customId;
  const index = buttonId.split('-')[1];

  const groupesMusculaires = ['épaules', 'biceps', 'triceps', 'pectoraux', 'abdominaux', 'dos', 'fessiers', 'ischios jambiers', 'quadriceps', 'mollets'];
  let groupeMusculaire = '';
  let boutton_name = '';

  if (index === 'aleatoire') {
    const randomIndex = Math.floor(Math.random() * groupesMusculaires.length);
    groupeMusculaire = groupesMusculaires[randomIndex];
    boutton_name = 'Aléatoire';
  } else {
    groupeMusculaire = groupesMusculaires[parseInt(index)];
    if (groupeMusculaire) {
        boutton_name = groupeMusculaire.charAt(0).toUpperCase() + groupeMusculaire.slice(1);
    } else {
        console.error('groupeMusculaire est undefined');
        await interaction.reply(`Une erreur s'est produite. Groupe musculaire inconnu.`, { ephemeral: true });
        return;
    }
  }

  let exercicesFiltres = exercices.filter(e => e.groupeMusculaire === groupeMusculaire);

  if (exercicesFiltres.length === 0) {
      await interaction.reply(`Aucun exercice trouvé pour le groupe musculaire "${groupeMusculaire}". Vérifiez que le groupe musculaire est correct.`);
      return;
  }

  const exerciceIndex = Math.floor(Math.random() * exercicesFiltres.length);
  const exercice = exercicesFiltres[exerciceIndex];
  const userId = interaction.user.id;

  await interaction.reply(`**${exercice.nom}** - ${exercice.description}\n*(Groupe musculaire : **${exercice.groupeMusculaire}**)\n**${boutton_name}** demandé par <@${interaction.user.id}>*`, { ephemeral: true });
});



//        ooooo ooooo      ooo oooooo     oooo ooooo ooooooooooooo oooooooooooo 
//        `888' `888b.     `8'  `888.     .8'  `888' 8'   888   `8 `888'     `8 
//         888   8 `88b.    8    `888.   .8'    888       888       888         
//         888   8   `88b.  8     `888. .8'     888       888       888oooo8    
//         888   8     `88b.8      `888.8'      888       888       888    "    
//         888   8       `888       `888'       888       888       888       o 
//        o888o o8o        `8        `8'       o888o     o888o     o888ooooood8 
                                                                      
                                                                      

client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (['invit', 'invite', 'invitation'].includes(command)) {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }

    let userID = args[0];

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
      const user = await client.users.fetch(userID);

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



//        ooooooooo.   oooooooooooo ooooo ooooo      ooo oooooo     oooo ooooo ooooooooooooo oooooooooooo 
//        `888   `Y88. `888'     `8 `888' `888b.     `8'  `888.     .8'  `888' 8'   888   `8 `888'     `8 
//         888   .d88'  888          888   8 `88b.    8    `888.   .8'    888       888       888         
//         888ooo88P'   888oooo8     888   8   `88b.  8     `888. .8'     888       888       888oooo8    
//         888`88b.     888    "     888   8     `88b.8      `888.8'      888       888       888    "    
//         888  `88b.   888       o  888   8       `888       `888'       888       888       888       o 
//        o888o  o888o o888ooooood8 o888o o8o        `8        `8'       o888o     o888o     o888ooooood8 



client.on('messageCreate', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (['reinvit', 'reinvite', 'réinvite'].includes(command)) {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply("Désolé, cette commande est réservée aux employés.");
    }

    let userID = args[0];

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
      const user = await client.users.fetch(userID);

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



//        ooo        ooooo ooooo     ooo ooooooooooooo oooooooooooo 
//        `88.       .888' `888'     `8' 8'   888   `8 `888'     `8 
//         888b     d'888   888       8       888       888         
//         8 Y88. .P  888   888       8       888       888oooo8    
//         8  `888'   888   888       8       888       888    "    
//         8    Y     888   `88.    .8'       888       888       o 
//        o8o        o888o    `YbodP'        o888o     o888ooooood8 


                                                          
client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(`<@994859660727291985>`) || message.author.bot) return;

  const args = message.content
    .replace(`<@994859660727291985>`, '')
    .trim()
    .split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'mute') {
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



//        oooooooooooo ooo        ooooo oooooooooo.  oooooooooooo oooooooooo.   
//        `888'     `8 `88.       .888' `888'   `Y8b `888'     `8 `888'   `Y8b  
//         888          888b     d'888   888     888  888          888      888 
//         888oooo8     8 Y88. .P  888   888oooo888'  888oooo8     888      888 
//         888    "     8  `888'   888   888    `88b  888    "     888      888 
//         888       o  8    Y     888   888    .88P  888       o  888     d88' 
//        o888ooooood8 o8o        o888o o888bood8P'  o888ooooood8 o888bood8P'   



const { Client, Intents, MessageEmbed } = require('discord.js');
const LESDIXMINDELEMBED = 10 * 60 * 1000;
client.on('messageCreate', async (message) => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (command === 'embed') {
    if (!message.member.permissions.has('ADMINISTRATOR')) {
      return message.reply('Désolé, cette commande est réservée aux employés.');
    }

    const askForInput = async (question) => {
      const sentMessage = await message.reply(question);
      const filter = (m) => m.author.id === message.author.id && m.reference && m.reference.messageId === sentMessage.id;
      const collected = await message.channel.awaitMessages({ filter, max: 1, time: LESDIXMINDELEMBED });
      return collected.first().content;
    };

    const targetChannelId = await askForInput('Veuillez entrer l\'**ID** du salon où envoyer l\'embed, ou répondez par "**ici**" ou "**here**" pour envoyer dans le salon actuel :\n*Faites **Répondre** à ce message.*');
    const embedTitle = await askForInput('Veuillez entrer le **titre** de l\'embed :\n*Faites **Répondre** à ce message.*');
    const embedDescription = await askForInput('Veuillez entrer la **description** de l\'embed :\n*Faites **Répondre** à ce message.*');
    const embedColor = await askForInput('Veuillez entrer la **couleur** de l\'embed (en hexadécimal) :');
    const imageURL = await askForInput('Veuillez fournir l\'**URL** de l\'**image** (facultatif, répondez par "**skip**" pour ignorer) :\n*Faites **Répondre** à ce message.*');

    const embed = new MessageEmbed()
      .setTitle(embedTitle)
      .setDescription(embedDescription)
      .setColor(embedColor);

    if (imageURL.toLowerCase() !== 'skip') {
      embed.setImage(imageURL);
    }

    const targetChannel = targetChannelId.toLowerCase() === 'ici' || targetChannelId.toLowerCase() === 'here'
      ? message.channel
      : await message.guild.channels.fetch(targetChannelId);

    targetChannel.send({ embeds: [embed] });
  }
});



//        ooooo          .oooooo.     .oooooo.     .oooooo..o 
//        `888'         d8P'  `Y8b   d8P'  `Y8b   d8P'    `Y8 
//         888         888      888 888           Y88bo.      
//         888         888      888 888            `"Y8888o.  
//         888         888      888 888     ooooo      `"Y88b 
//         888       o `88b    d88' `88.    .88'  oo     .d8P 
//        o888ooooood8  `Y8bood8P'   `Y8bood8P'   8""88888P'  



const fetch = require('node-fetch');
const herokuAppName = 'gomuscu';
const herokuApiKey = (process.env.HEROKU_KEY);
const channelId = '987820203016618014';

client.on('ready', () => {
  const channel = client.channels.cache.get(channelId);
  if (!channel) {
    console.error(`Impossible de trouver le salon avec l'ID ${channelId}`);
    return;
  }

  const herokuUrl = `https://api.heroku.com/apps/${herokuAppName}/log-sessions`;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/vnd.heroku+json; version=3',
      'Authorization': `Bearer ${herokuApiKey}`
    },
    body: JSON.stringify({ 'tail': true })
  };

  fetch(herokuUrl, requestOptions)
    .then(response => response.json())
    .then(json => {
      const logStreamUrl = json.logplex_url;

      if (!logStreamUrl) {
        console.error('Impossible de récupérer l\'URL du flux de logs Heroku');
        return;
      }

      fetch(logStreamUrl)
        .then(response => {
          response.body
            .on('data', chunk => {
              const message = chunk.toString().trim();
              if (message) {
                channel.send(`\`\`\`${message}\`\`\``);
              }
            })
            .on('error', err => {
              console.error('Erreur lors de la lecture du flux de logs Heroku:', err);
            });
        })
        .catch(err => {
          console.error('Erreur lors de la récupération du flux de logs Heroku:', err);
        });
    })
    .catch(err => {
      console.error('Erreur lors de la création de la session de logs Heroku:', err);
    });
});



//        ooooooooooooo ooooo   .oooooo.   oooo    oooo oooooooooooo ooooooooooooo      ooooooooooooo   .oooooo.     .oooooo.   ooooo        
//        8'   888   `8 `888'  d8P'  `Y8b  `888   .8P'  `888'     `8 8'   888   `8      8'   888   `8  d8P'  `Y8b   d8P'  `Y8b  `888'        
//             888       888  888           888  d8'     888              888                888      888      888 888      888  888         
//             888       888  888           88888[       888oooo8         888                888      888      888 888      888  888         
//             888       888  888           888`88b.     888    "         888                888      888      888 888      888  888         
//             888       888  `88b    ooo   888  `88b.   888       o      888                888      `88b    d88' `88b    d88'  888       o 
//            o888o     o888o  `Y8bood8P'  o888o  o888o o888ooooood8     o888o              o888o      `Y8bood8P'   `Y8bood8P'  o888ooooood8



client.on('messageCreate', async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (command === 'tickettool') {
        const embed = new MessageEmbed()
            .setColor('GREEN')
            .setTitle('Pour créer un ticket, réagissez avec 📩')
            .setDescription('Mise en relation avec un <@&987820202198712449>.\n ')
            .setFooter('Au nom de l\'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈.', 'https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png');

        const button = new MessageButton()
            .setCustomId('create_ticket')
            .setLabel('📩 Créer un ticket')
            .setStyle('SECONDARY');

        const row = new MessageActionRow()
            .addComponents(button);

        await message.channel.send({ embeds: [embed], components: [row] });
    }
});

client.on('interactionCreate', async (interaction) => {
    if (!interaction.isButton()) return;

    const user = interaction.user;
    const guild = interaction.guild;

    if (interaction.customId === 'create_ticket') {
        const ticketName = `『✉』𝑇𝑖𝑐𝑘𝑒𝑡-${user.username}`;

        const overwrites = [
            {
                id: guild.id,
                deny: ['VIEW_CHANNEL'],
            },
            {
                id: user.id,
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            },
            {
                id: '987820202198712449', // Ajout du rôle avec accès au salon
                allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY'],
            },
            // Ajoutez les permissions pour les administrateurs ou d'autres rôles ici
        ];

        guild.channels.create(ticketName, {
            type: 'GUILD_TEXT',
            permissionOverwrites: overwrites,
        }).then(async (channel) => {
            const ticketEmbed = new MessageEmbed()
                .setColor('GREEN')
                .setTitle('Pour fermer le ticket, réagissez avec l\'émote 🔒')
                .setDescription('Le support technique vous contactera sous peu.\n ')
                .setFooter('Au nom de l\'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈.', 'https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png');

            const closeButton = new MessageButton()
                .setCustomId('close_ticket')
                .setLabel('🔒 Fermer')
                .setStyle('SECONDARY');

            const ticketRow = new MessageActionRow()
                .addComponents(closeButton);

                await channel.send({ content: `<@${user.id}> Que pouvons-nous faire pour vous ?`, embeds: [ticketEmbed], components: [ticketRow] });
              });
          }
      
          if (interaction.customId === 'close_ticket') {
              const continueButton = new MessageButton()
                  .setCustomId('continue_ticket')
                  .setLabel('Continuer')
                  .setStyle('SUCCESS');
      
              const cancelButton = new MessageButton()
                  .setCustomId('cancel_ticket')
                  .setLabel('Annuler')
                  .setStyle('DANGER');
      
              const decisionRow = new MessageActionRow()
                  .addComponents(continueButton, cancelButton);
      
              await interaction.reply({ content: 'Êtes-vous sûr de vouloir fermer ce ticket ?', components: [decisionRow] });
          }
      
          if (interaction.customId === 'continue_ticket') {
              const channel = interaction.channel;
              await interaction.reply({ content: 'Le ticket sera fermé.', ephemeral: true });
              setTimeout(() => {
                  channel.delete();
              }, 2000);
          }
      
          if (interaction.customId === 'cancel_ticket') {
              await interaction.reply({ content: 'Annulation de la fermeture du ticket.', ephemeral: true });
              setTimeout(async () => {
                  const fetchedMessage = await interaction.channel.messages.fetch(interaction.message.id);
                  const updatedRow = new MessageActionRow()
                      .addComponents(
                          new MessageButton()
                              .setCustomId('close_ticket')
                              .setLabel('🔒 Fermer')
                              .setStyle('SECONDARY')
                      );
      
                  await fetchedMessage.edit({ components: [updatedRow] });
              }, 2000);
          }
      });



//        ooo        ooooo ooooo     ooo  .oooooo..o ooooo   .oooooo.      ooooo     ooo oooooooooooo 
//        `88.       .888' `888'     `8' d8P'    `Y8 `888'  d8P'  `Y8b     `888'     `8' `888'     `8 
//         888b     d'888   888       8  Y88bo.       888  888      888     888       8   888         
//         8 Y88. .P  888   888       8   `"Y8888o.   888  888      888     888       8   888oooo8    
//         8  `888'   888   888       8       `"Y88b  888  888      888     888       8   888    "    
//         8    Y     888   `88.    .8'  oo     .d8P  888  `88b    d88b     `88.    .8'   888       o 
//        o8o        o888o    `YbodP'    8""88888P'  o888o  `Y8bood8P'Ybd'    `YbodP'    o888ooooood8 



const {
  joinVoiceChannel,
  createAudioResource,
  StreamType,
  AudioPlayerStatus,
  createAudioPlayer,
  getVoiceConnection,
} = require('@discordjs/voice');
const ytdl = require('ytdl-core');

const queue = new Map();

client.on('messageCreate', async (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (
    command === 'musique' ||
    command === 'musiquesuivante' ||
    command === 'musiquesuppr' ||
    command === 'musiquemaintenant'
  ) {
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
      if (serverQueue.connection) {
        const newPlayer = createAudioPlayer();
        const audioPlayer = serverQueue.connection.subscribe(newPlayer);
        if (audioPlayer) {
          newPlayer.stop();
        }
      }
    } else if (command === 'musiquesuppr') {
      if (!serverQueue || serverQueue.songs.length === 0) {
        return message.channel.send('Il n\'y a pas de musique dans la file d\'attente.');
      }
      const index = parseInt(args[0]) - 1;
      if (isNaN(index) || index < 0 || index >= serverQueue.songs.length) {
        return message.channel.send('Veuillez fournir un numéro de musique valide dans la file d\'attente.');
      }
      serverQueue.songs.splice(index, 1);
      return message.channel.send(`Musique #${index + 1} supprimée de la file d'attente.`);
    } else if (command === 'musiquemaintenant') {
      if (!serverQueue) {
        return message.channel.send('Il n\'y a pas de musique en cours de lecture.');
      }
      const youtubeLink = args[0];
      let index;
      if (ytdl.validateURL(youtubeLink)) {
        const songInfo = await ytdl.getInfo(youtubeLink);
        const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
        };
        serverQueue.songs.splice(1, 0, song);
        index = 1;
      } else {
        index = parseInt(args[0]) - 1;
        if (isNaN(index) || index < 0 || index >= serverQueue.songs.length) {
          return message.channel.send('Veuillez fournir un numéro de musique valide dans la file d\'attente.');
        }
      }
      if (serverQueue.connection) {
        const newPlayer = createAudioPlayer();
        const audioPlayer = serverQueue.connection.subscribe(newPlayer);
        if (audioPlayer) {
          newPlayer.stop();
        }
      }
      const songToMove = serverQueue.songs[index];
      serverQueue.songs.splice(index, 1);
      serverQueue.songs.splice(1, 0, songToMove);
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
});

function play(guild, song) {
  const serverQueue = queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }

  const stream = ytdl(song.url, { filter: 'audioonly' });
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

client.on("messageCreate", async message => {
  if (message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  if (message.content.startsWith(prefix)) {
    switch (command) {
      case 'musiqueaide':
        const embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setFooter({ text: "Au nom de l'équipe 𝐺𝑂𝑀𝑈𝑆𝐶𝑈." })
        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
        .setThumbnail("https://cdn.discordapp.com/attachments/987820203016618015/1088231600854143077/gars_et_fille_body.png")
        .setDescription("\nLe prefix de <@994859660727291985> est **sa mention**.\n\n<@994859660727291985> *[le salon que vous cherchez]*\n\n<@994859660727291985> **exerciceaide**\n<@994859660727291985> **exercice**\n<@994859660727291985> **exercice+**\n\n<@994859660727291985> **chatgpt**\n\n<@994859660727291985> **musique** *[lien YouTube]*")
        .setTitle("Liste des commandes GLOBALES");
          message.reply({ embeds: [embed] });
        break;
    }
  }
}); 