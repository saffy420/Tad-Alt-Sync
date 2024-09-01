# Tad-Alt-Sync
Syncs your Fuzzy Tad Alt to your main account whenever your Main account uses a Field Booster. 

  **THIS IS ONLY FOR ENDGAME BLUE HIVES WITH FUZZY TAD ALT.**


## Installation
  Before we start anything, please have remote control on your Tad Alt's Natro Macro and create a webhook for your Main's Natro Macro. If you need to set it up refer to [this guide.](https://www.youtube.com/watch?v=dCsofwbpXu0&t=83s) 
  I also recommend you to have 2 tad alts, one dedicated to staying in Pine Tree and using PineSkirt, and one dedicated to Tad Alt Sync(preferrably also doesnt use haste to reduce field drift). This ensures that Pine Tree stays boosted because the tad alt sync will make the alt rejoin every 15 min and wont be staying in the field. Either way it wont make a big difference to your honey making if you only have one tad alt. 

- **1. You need [Node.js](https://nodejs.org/en/download/prebuilt-installer)**.
  -  I recommend using the LTS version.

- **2. You need [VS Code](https://code.visualstudio.com/download)**.
  - This is so you can add your Discord Bot token and channel ID.

- **3. You need Discord.js**.
  -   To do this you need to
    -   1. Open Powershell
        2. Type:
            `npm i discord.js`

- **4. Create a discord bot**.
  -  Make a Discord bot the same way you made a discord bot for your Tad Alt, except this time you have to add it to 2 servers, your Main accounts server and your alt's server(this is so it can read what field got boosted on your main, and tell your alt to go to said boosted field) 

- **5. Download the Tad Alt Sync.rar folder and extract it.**.

- **6. Open VS Code and drag the folder into VS Code**. 

- **7. Click on the .env file**. Replace `YOUR_DISCORD_TOKEN` with the token of the bot you just created and then press `CTRL-S` to save.
  - You will find it here: ![image](https://github.com/user-attachments/assets/0821f9c1-5bc1-40a3-909c-db428bc650f3)
    
- **8. Click the index.js file**. Replace the `YOUR_CHANNEL_ID` with the channel ID of your alt. You will find those on line 24 and 41. Press `CTRL-S` to save. You will find your channel ID here:

  ![image](https://github.com/user-attachments/assets/d29917da-f95d-42e4-ac8e-9cedc6843128)

 
- **9. Run the code**. You can do this by either creating a new terminal via VS Code and typing `node index.js` or opening cmd and typing `cd (path to folder)`, press enter, then `node index.js` and then if all goes well, after press enter you should get `Bot is online` and in 60 seconds, it will tell your alt to go to Pine Tree with the pattern Supercat.
  
- **(for one tad alt users)**, you can set the Pine Tree pattern to PineSkirt by press CTRL+H then doing this and pressing the button that's circled

  ![image](https://github.com/user-attachments/assets/cae953b4-a449-429e-ae63-cdbd192bf037)

  # This is a work in progress, so please help me make this better, all help will be appreciated, if you need help or want to suggest something, my discord is leon123gamer
