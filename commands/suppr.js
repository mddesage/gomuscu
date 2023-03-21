const { Permissions } = require('discord.js');

module.exports = {
  name: 'suppr',
  description: 'Supprime les x derniers messages',
  args: true,
  usage: '<nombre de messages à supprimer>',
  permissions: [Permissions.FLAGS.ADMINISTRATOR],

  async execute(message, args) {
    // Vérifie si l'utilisateur a la permission de supprimer les messages
    if (!message.member.permissions.has(Permissions.FLAGS.MANAGE_MESSAGES)) {
      return message.reply('Vous n\'avez pas la permission de supprimer des messages.');
    }

    // Vérifie si l'argument est un nombre
    const amount = parseInt(args[0]);

    if (isNaN(amount)) {
      return message.reply('L\'argument doit être un nombre.');
    }

    // Supprime les x derniers messages
    if (amount <= 0 || amount > 100) {
      return message.reply('Le nombre de messages doit être compris entre 1 et 100.');
    }

    await message.channel.bulkDelete(amount, true)
      .then(messages => message.channel.send(`\`${messages.size}\` messages ont été supprimés.`))
      .catch(error => {
        console.error(error);
        message.channel.send('Une erreur est survenue lors de la suppression des messages.');
      });
  },
};