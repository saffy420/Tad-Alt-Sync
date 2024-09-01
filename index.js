const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config(); 

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.once('ready', () => {
    console.log("Bot is online");
//makes gathering field pine tree incase it wasnt
    const startupMessages = [
        "?set FieldName1 Pine Tree",
        "?set FieldPattern1 SuperCat",
        "?set FieldPatternReps1 3",
        "?set FieldDriftCheck1 1",
        "?set FieldRotateTimes1 1",
        "?set FieldUntilMins1 15",
        "?rejoin"
    ];
    const targetChannelId = 'YOUR_CHANNEL_ID'; // Replace with your tad alt channel ID
    const delay = 2500; 

    
    setTimeout(() => {
        startupMessages.forEach((message, index) => {
            setTimeout(() => {
                client.channels.fetch(targetChannelId)
                    .then(channel => channel.send(message))
                    .catch(console.error);
            }, index * delay);
        });
    }, 60000); 
});

client.on('messageCreate', (message) => {
    const keywords = ["Boosted: Blue Flower", "Boosted: Bamboo", "Boosted: Pine Tree"]; // Replace with other fields if you want
    const targetChannelId = 'YOUR_CHANNEL_ID'; // Replace with your tad alt channel ID

    message.embeds.forEach(embed => {
        const foundKeyword = keywords.find(keyword => 
            (embed.title && embed.title.includes(keyword)) ||
            (embed.fields && embed.fields.some(field => field.value.includes(keyword))) ||
            (embed.author && embed.author.name.includes(keyword)) ||
            (embed.description && embed.description.includes(keyword)) ||
            (embed.footer && embed.footer.text.includes(keyword)) ||
            (embed.thumbnail && embed.thumbnail.url.includes(keyword))
        );
//same with these
        if (foundKeyword) {
            let responseMessages = [];
            switch (foundKeyword) {
                case "Boosted: Blue Flower":
                    responseMessages = [
                        "?set FieldName1 Blue Flower",
                        "?set FieldPattern1 e_lol",
                        "?set FieldPatternReps1 2",
                        "?set FieldDriftCheck1 1",
                        "?set FieldUntilMins1 15",
                        "?rejoin"
                    ];
                    break;
                case "Boosted: Bamboo":
                    responseMessages = [
                        "?set FieldName1 Bamboo",
                        "?set FieldPattern1 e_lol",
                        "?set FieldPatternReps1 2",
                        "?set FieldDriftCheck1 1",
                        "?set FieldUntilMins1 15",
                        "?rejoin"
                    ];
                    break;
                case "Boosted: Pine Tree":
                    responseMessages = [
                        "?set FieldName1 Pine Tree",
                        "?set FieldPattern1 SuperCat",
                        "?set FieldPatternReps1 3",
                        "?set FieldDriftCheck1 1",
                        "?set FieldRotateTimes1 1",
                        "?set FieldUntilMins1 15",
                        "?rejoin"
                    ];
                    break;
                default:
                    responseMessages = [`Boosted field: ${foundKeyword}`];
            }

            const delay = 1000; 
            const secondResponseMessages = [
                "?set FieldName1 Pine Tree",
                "?set FieldPattern1 SuperCat",
                 "?set FieldPatternReps1 3",
                "?set FieldDriftCheck1 1",
                "?set FieldRotateTimes1 1",
                "?set FieldUntilMins1 15",
                "?rejoin"
            ];

            responseMessages.forEach((responseMessage, index) => {
                setTimeout(() => {
                    client.channels.fetch(targetChannelId)
                        .then(channel => channel.send(responseMessage))
                        .catch(console.error);
                }, index * delay);
            });

            // after boost it changes gathering field to pine tree
            setTimeout(() => {
                secondResponseMessages.forEach((responseMessage, index) => {
                    setTimeout(() => {
                        client.channels.fetch(targetChannelId)
                            .then(channel => channel.send(responseMessage))
                            .catch(console.error);
                    }, index * delay);
                });
            }, 900000); 
        }
    });
});

client.login(process.env.TOKEN);