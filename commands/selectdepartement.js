const { MessageActionRow, MessageSelectMenu, MessageButton, Client } = require('discord.js');
const client = new Client();

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
    .setCustomId('remove_departements')
    .setLabel('Retirer tous les Départements')
    .setStyle('DANGER');

  const row = new MessageActionRow()
    .addComponents(button);

  return row;
};

const handleInteraction = async (interaction, customIdPrefix) => {
  if (interaction.isSelectMenu() && interaction.customId.startsWith(customIdPrefix)) {
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
  } else if (interaction.isButton() && interaction.customId === 'remove_departements') {
    const departementRoles = interaction.member.roles.cache.filter(role => role.name.startsWith('🧭┃Département'));
    const removedRoles = [];

    for (const role of departementRoles.values()) {
      try {
        await interaction.member.roles.remove(role);
        removedRoles.push(role.name);
      } catch (error) {
        console.error(`Impossible de retirer le rôle en raison de: ${error}`);
      }
    }

    await interaction.reply({ content: `Les rôles suivants vous ont été retirés : ${removedRoles.join(', ')}`, ephemeral: true });
  }
};

client.on("messageCreate", async message => {
  if (message.content === "ENVOIE_LES_MENUS_POUR_CHOISIR_SON_DÉPARTEMENT") {
    if (message.member.permissions.has("ADMINISTRATOR")) {
      const menu1 = createMenu('departement_menu1', 1, 25);
      const menu2 = createMenu('departement_menu2', 26, 50);
      const menu3 = createMenu('departement_menu3', 51, 75);
      const menu4 = createMenu('departement_menu4', 76, 95, [971, 972, 973, 974, 976].map(num => ({
        label:    `Département ${num}`,
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
}
);

client.on("interactionCreate", async interaction => {
handleInteraction(interaction, 'departement_menu');
});