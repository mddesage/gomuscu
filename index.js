const Discord = require('discord.js');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.DIRECT_MESSAGES,
    ]
});



client.login(process.env.TOKEN);

const prefix = (process.env.PREFIX);

client.on("ready", () => {
    console.log(`✅ Le Bot est opérationnel ! ✅`)
});

client.on("interactionCreate", interaction => {
    // Gérer les interactions ici
});

client.on('message', message => {
    // Vérifie que le message n'a pas été envoyé par le bot lui-même
    if (message.author.bot) return;
    
    // Liste de mots à détecter
    const greetings = ['salut', 'slt', 'bonjour', 'bjr', 'bonsoir', 'bsr', 'wesh', 'hey'];
  
    // Vérifie si le message contient l'un des mots de la liste
    if (greetings.some(word => message.content.toLowerCase().includes(word))) {
      // Réagit avec "👋"
      message.react('👋');
    }
  });


client.on("messageCreate", async message => {
    if (message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith(prefix)) {
        switch (command) {
            case '':
                message.reply("Oui ?");
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
                        .setFooter("Au nom de l'équipe de GOMUSCU")
                        .setImage("https://images-ext-2.discordapp.net/external/gXakbSDik9kWaj6hawV9rAI9bXb0G0IpVspJhvL96xw/https/www.zupimages.net/up/22/27/smao.png?width=1440&height=399")
                        .setThumbnail("https://images-ext-2.discordapp.net/external/npfN0HwsFYgFsIAxK2tygqq29ykQmDTlvAqUjksas8E/https/media3.giphy.com/media/LnKEhZb9MAjPZnq3AC/giphy.gif")
                        .setDescription("Le prefix de <@994859660727291985> est sa mention\n\n<@994859660727291985> discord \n<@994859660727291985> roles\n<@994859660727291985> departements\n<@994859660727291985> discussion\n<@994859660727291985> performances\n<@994859660727291985> evolutions\n<@994859660727291985> programmes\n<@994859660727291985> playlist\n<@994859660727291985> reseauxsociaux\n<@994859660727291985> gymbro")
                        .setTitle("Liste des commandes");
    
                    message.channel.send({ embeds: [embed] });
                   
            }


            
        }
    // ...
switch (command) {
    // ...
    case 'suppr':
        if (!message.member.permissions.has(Discord.Permissions.FLAGS.MANAGE_MESSAGES)) {
            return message.reply("Vous n'avez pas la permission de supprimer des messages.");
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







// les menus : yhuywghyy






// MENU1
const { MessageActionRow, MessageSelectMenu } = Discord;

client.on("messageCreate", async message => {
    // ...
    if (message.content === "yhuywghyy") {
        const menu = new MessageSelectMenu()
            .setCustomId('departement_menu')
            .setPlaceholder('Choisissez votre département du 01 au 25')
            .addOptions(
                Array.from({ length: 25 }, (_, i) => {
                    const num = (i + 1).toString().padStart(2, '0');
                    return {
                        label: `Département ${num}`,
                        value: `departement_${num}`,
                    };
                })
            );

        const row = new MessageActionRow()
            .addComponents(menu);

        await message.channel.send({
            content: '**Sélectionnez votre département** :',
            components: [row],
        });
    }
    // ...
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'departement_menu') {
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
    }
});
// ...





//MENU2
client.on("messageCreate", async message => {
    // ...
    if (message.content === 'yhuywghyy') {
        const menu2 = new MessageSelectMenu()
            .setCustomId('departement_menu2')
            .setPlaceholder('Choisissez votre département du 26 au 50')
            .addOptions(
                Array.from({ length: 25 }, (_, i) => {
                    const num = (i + 26).toString().padStart(2, '0');
                    return {
                        label: `Département ${num}`,
                        value: `departement_${num}`,
                    };
                })
            );

        const row2 = new MessageActionRow()
            .addComponents(menu2);

        await message.channel.send({
            content: '',
            components: [row2],
        });
    }
    // ...
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'departement_menu2') {
        const choice = interaction.values[0];
        const departementNumber = choice.split('_')[1];
        const roleName = `Département ${departementNumber}`;
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
    }
});
// ...





//MENU3
client.on("messageCreate", async message => {
    // ...
    if (message.content === 'yhuywghyy') {
        const menu = new MessageSelectMenu()
            .setCustomId('departement_menu3')
            .setPlaceholder('Choisissez votre département du 51 au 75')
            .addOptions(
                Array.from({ length: 25 }, (_, i) => {
                    const num = (i + 51).toString().padStart(2, '0');
                    return {
                        label: `Département ${num}`,
                        value: `departement_${num}`,
                    };
                })
            );

        const row = new MessageActionRow()
            .addComponents(menu);

        await message.channel.send({
            content: '',
            components: [row],
        });
    }
    // ...
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'departement_menu3') {
        const choice = interaction.values[0];
        const departementNumber = choice.split('_')[1];
        const roleName = `Département ${departementNumber}`;
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
    }
});
// ...



//MENU4

client.on("messageCreate", async message => {
    // ...
    if (message.content === 'yhuywghyy') {
        const menu = new MessageSelectMenu()
            .setCustomId('departement_menu4')
            .setPlaceholder('Choisissez votre département du 76 au 95 (971, 972, 973, 974, 976)')
            .addOptions(
                Array.from({ length: 20 }, (_, i) => {
                    const num = (i + 76).toString().padStart(2, '0');
                    return {
                        label: `Département ${num}`,
                        value: `departement_${num}`,
                    };
                }).concat(
                    [971, 972, 973, 974, 976].map(num => ({
                        label: `Département ${num}`,
                        value: `departement_${num}`,
                    }))
                )
            );

        const row = new MessageActionRow()
            .addComponents(menu);

        await message.channel.send({
            content: '',
            components: [row],
        });
    }
    // ...
});

client.on("interactionCreate", async interaction => {
    if (!interaction.isSelectMenu()) return;

    if (interaction.customId === 'departement_menu4') {
        const choice = interaction.values[0];
        const departementNumber = choice.split('_')[1];
        const roleName = `Département ${departementNumber}`;
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
    }
});
// ...

