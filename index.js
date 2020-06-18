console.log('Démarrage du bot...')

const Discord = require('discord.js');
const client = new Discord.Client();

let prefix = "e!"

client.login(process.env.TOKEN)

const cmdInfo = require("./files/cmdInfo");
const cmdCompteur = require("./files/cmdCompteur");

// Quand un message est envoyé
client.on("message", message => {


    if (message.author.bot || !message.guild) return;

            msgSplit = message.content.split(" ");


        cmdInfo(message, msgSplit, prefix, client, Discord);
        cmdCompteur(message, msgSplit, prefix, client, Discord);
        
    });


client.on("ready", () => {

    console.log("Bot connecté !");
    
    cmdCompteur(message, msgSplit, prefix, client, Discord);

});



