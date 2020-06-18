console.log('Démarrage du bot...')

const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "e!"

client.login("NzIxNjczNjU2NjAxOTM1OTI1.Xusw7w.jtybF8lyNg-cJWMBbIie4AyhXb4")

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

                channel.setName("Serveur hors-ligne")

            } else {

                channel.setName('Joueurs en ligne : ' + response.playersOnline)


                } (1 * 60 * 1000);

            }
        );
})
    },)})
