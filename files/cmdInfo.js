module.exports = (message, msgSplit, prefix, client, Discord) => {


    if (msgSplit[0].toLocaleLowerCase() != prefix + "info") return;

    message.channel.send("<:wireless:714537554501959690> **Récupération des informations...**").then(msg => {

        require("minecraft-ping").ping_fe01fa({ host: "94.130.165.162", port: 25748 }, function (error, response) {

            if (error) {

                let embed = new Discord.MessageEmbed()
                    .setDescription("**Le serveur est éteint !**")
                    .setColor("#FF0000");

                msg.edit("", embed);

            } else {

                let embed = new Discord.MessageEmbed()
                    .setDescription("Le serveur est en ligne !\n" + "Il y a actuellement `" + response.playersOnline + "` connectés !")
                    .setColor("#00FF00");

                msg.edit("", embed);
            }
        });
    });


}