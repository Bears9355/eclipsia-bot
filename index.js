console.log('Démarrage du bot...')

const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "e!"

client.login(process.env.TOKEN)

const cmdInfo = require("./files/cmdInfo");


// Quand un message est envoyé
client.on("message", message => {


    if (message.author.bot || !message.guild) return;

            msgSplit = message.content.split(" ");


        cmdInfo(message, msgSplit, prefix, client, Discord);
        
    });


client.on("ready", () => {

    console.log("Bot connecté !");
    


});


// compteur

client.on('message', message => {
    if (msgSplit[0].toLocaleLowerCase() != "e!compteur") return;
    if (!message.member.hasPermission("MANAGE_SERVER")) return;

    message.delete()

    message.guild.channels.create("Joueurs en ligne : ", {
        type: "voice",
        nsfw: false
    }).then(channel => {

        setInterval(() => {

        require("minecraft-ping").ping_fe01fa({ host: "94.130.165.162", port: 25748 }, function (error, response) {

            if (error) {

                guilds.channels.cache.get("723178123004477513").setName("Serveur hors-ligne")

            } else {

                guilds.channels.cache.get("723178123004477513").setName('Joueurs en ligne : ' + response.playersOnline)


                } (1 * 60 * 1000);

            }
        );
})
    },)})
