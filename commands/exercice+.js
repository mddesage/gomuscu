// Importer les modules nécessaires
const { MessageButton, MessageActionRow } = require('discord.js');

// Code à externaliser
module.exports = {
  name: 'exercice+',
  execute(client, message, args, prefix, exercices) {
    client.on('messageCreate', async message => {
      if (!message.content.startsWith(prefix) || message.author.bot) return;

      const args = message.content.slice(prefix.length).trim().split(/ +/);
      const command = args.shift().toLowerCase();

      if (command === 'exercice+') {
        // Créer les boutons
        const boutons = ['Épaules', 'Biceps', 'Triceps', 'Pectoraux', 'Abdominaux', 'Dos', 'Fessiers', 'Ischios Jambiers', 'Quadriceps', 'Mollets'].map((groupe, index) => {
          return new MessageButton()
            .setCustomId(`exercice_groupeMusculaire-${index}`)
            .setLabel(groupe)
            .setStyle('PRIMARY');
        });

        // Créer le bouton Aléatoire
        const boutonAleatoire = new MessageButton()
          .setCustomId('exercice_groupeMusculaire-aleatoire')
          .setLabel('Aléatoire')
          .setStyle('PRIMARY');

        // Diviser les boutons en deux lignes
        const row1 = new MessageActionRow().addComponents(boutons.slice(0, 5));
        const row2 = new MessageActionRow().addComponents(boutons.slice(5, 10));
        const row3 = new MessageActionRow().addComponents(boutonAleatoire);

        // Envoyer le message avec les boutons
        await message.reply({ content: 'Choisissez un groupe musculaire pour afficher un exercice au hasard parmi celui ci :', components: [row1, row2, row3] });
      }
    });

    client.on('interactionCreate', async interaction => {
      if (!interaction.isButton()) return;

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
  },
};
