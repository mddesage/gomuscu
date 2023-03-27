lient.once('ready', () => {

    client.guilds.cache.get('YOUR_GUILD_ID').commands.create({
        name: 'suppr',
        description: 'Supprime un certain nombre de messages',
        options: [
            {
                name: 'nombre',
                type: 'INTEGER',
                description: 'Le nombre de messages à supprimer',
                required: true,
            },
        ],
    });

    client.guilds.cache.get('YOUR_GUILD_ID').commands.create({
        name: 'supprid',
        description: 'Supprime les messages entre deux ID spécifiques',
        options: [
            {
                name: 'premier_message_id',
                type: 'STRING',
                description: 'ID du premier message',
                required: true,
            },
            {
                name: 'deuxieme_message_id',
                type: 'STRING',
                description: 'ID du second message',
                required: true,
            },
        ],
    });
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isCommand()) return;

    const { commandName } = interaction;

    const requiredRoleId = '987820202198712449';
    if (!interaction.member.roles.cache.has(requiredRoleId)) {
        return interaction.reply({ content: "Désolé, cette commande est réservée aux employés.", ephemeral: true });
    }

    if (commandName === 'suppr') {
        const deleteCount = interaction.options.getInteger('nombre');

        if (!deleteCount || deleteCount < 1 || deleteCount > 100) {
            return interaction.reply({ content: "Veuillez fournir un nombre entre 1 et 100 pour le nombre de messages à supprimer.", ephemeral: true });
        }

        interaction.channel.bulkDelete(deleteCount + 1)
            .then(() => {
                interaction.reply({ content: `J'ai supprimé ${deleteCount} message(s).`, ephemeral: true });
            })
            .catch(error => {
                console.error(`Impossible de supprimer les messages en raison de: ${error}`);
                interaction.reply({ content: "Une erreur s'est produite lors de la suppression des messages.", ephemeral: true });
            });
    } else if (commandName === 'supprid') {
        const firstMessageId = interaction.options.getString('premier_message_id');
        const secondMessageId = interaction.options.getString('deuxieme_message_id');

        if (!firstMessageId || !secondMessageId) {
            return interaction.reply({ content: "Veuillez fournir deux ID de messages valides.", ephemeral: true });
        }

        interaction.channel.messages.fetch({ after: firstMessageId, before: secondMessageId })
            .then(messages => {
                interaction.channel.bulkDelete(messages, true)
                    .then(deletedMessages => {
                        interaction.reply({ content: `J'ai supprimé ${deletedMessages.size} message(s).`, ephemeral: true });
                    })
                    .catch(error => {
                        console.error(`Impossible de supprimer les messages en raison de: ${error}`);
                        interaction.reply({ content: "Une erreur s'est produite lors de la suppression des messages.", ephemeral: true });
                    });
            })
            .catch(error => {
                           console.error(`Impossible de récupérer les messages en raison de: ${error}`);
            interaction.reply({ content: "Une erreur s'est produite lors de la récupération des messages.", ephemeral: true });
        });
}
});