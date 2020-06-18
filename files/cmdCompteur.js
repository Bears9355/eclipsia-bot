module.exports = (message, msgSplit, prefix, client, Discord) => {


    if (msgSplit[0].toLocaleLowerCase() != "e!compteur") return;

    message.delete()

    message.guild.channels.create("Joueurs en ligne : ", {
        type: "voice",
        nsfw: false
    }).then(channel => {

        setInterval(() => {

        require("minecraft-ping").ping_fe01fa({ host: "94.130.165.162", port: 25748 }, function (error, response) {

            if (error) {

                channels.get("723107743107514440").setName("Serveur hors-ligne")

            } else {

                channels.get("723107743107514440").setName('Joueurs en ligne : ' + response.playersOnline)


                } (1 * 60 * 1000);

            }
        );




    
},)
    })}
