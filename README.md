# Tad Alt Sync

A Discord bot for Bee Swarm Simulator that syncs your Fuzzy Tad Alt's gathering field to your main account whenever a Field Booster is detected. It listens to your main account's Natro Macro webhook in Discord, detects boosted field notifications, and automatically sends the corresponding field commands to your alt's Natro Macro.

**This is only for endgame Blue Hives with a Fuzzy Tad Alt.**

## Why I Built This

This was my first ever repo. I was playing Bee Swarm Simulator and wanted a way to have my alt account automatically switch to whatever field my main account's macro detected as boosted, without me having to manually do it. The Natro Macro already had remote control via Discord, so I figured I could write a bot to sit between the two accounts and relay the right commands.

I did not know Node.js or the Discord API at all before this. I picked it up because someone in the BSS community said Discord.js was the easiest way to make a bot quickly. I also had not used GitHub before, so this project was the first time I actually pushed code anywhere.

## What I Learned

- **Using an API for the first time**: The Discord API and Discord.js were the first API I ever worked with. I had to learn what intents were, how to listen for messages, and how to filter by embed content. It was confusing at first but once I understood the event-driven structure it clicked.
- **Working with async code in Node.js**: JavaScript's async nature surprised me. I had to use `setTimeout` chains to stagger the macro commands so the Natro Macro had time to process each one before the next arrived. Getting the delays right took a lot of trial and error in-game.
- **Environment variables**: I learned not to put secrets like bot tokens in code after reading about it. Using `dotenv` for the Discord token was the first time I managed secrets properly.
- **Git and GitHub**: This was my first time using version control. I did not fully understand branches yet, but just getting comfortable with commit and push was a start.

## What It Does

1. On startup, sends the alt to Pine Tree with the SuperCat pattern to start gathering
2. Listens to the main account's Natro Macro webhook channel for "Boosted: [Field Name]" embed notifications
3. When a boost is detected, sends the matching `?set FieldName1` and `?rejoin` commands to the alt's macro channel to redirect it to the boosted field
4. After 15 minutes (when the boost expires), sends the alt back to Pine Tree

Supported boosted fields: Blue Flower, Bamboo, Pine Tree.

## Requirements

- Node.js (LTS version recommended)
- A Discord bot added to both your main account's server and your alt's server
- Remote control enabled on both Natro Macros
- A webhook configured on your main account's Natro Macro

## Installation

**Before starting**, enable remote control on your Tad Alt's Natro Macro and create a webhook for your Main's Natro Macro. Setup guide: https://www.youtube.com/watch?v=dCsofwbpXu0&t=83s

I also recommend having 2 Tad Alts if possible: one dedicated to staying in Pine Tree using PineSkirt, and one dedicated to Tad Alt Sync (ideally without haste to reduce field drift). This keeps Pine Tree boosted since the sync alt will rejoin every 15 minutes and not stay in the field. If you only have one Tad Alt it still works fine.

**Step 1: Install Node.js**

Download and install from https://nodejs.org/en/download/prebuilt-installer (LTS version)

**Step 2: Install Discord.js**

Open PowerShell and run:
```
npm i discord.js
```

**Step 3: Download and extract the project**

Download the zip from this repo and extract it.

**Step 4: Create a Discord bot**

Create a Discord bot the same way you made a bot for your Tad Alt, but this time add it to two servers: your main account's server (so it can read boost notifications) and your alt's server (so it can send macro commands).

**Step 5: Add your bot token**

Open the `.env` file and replace `YOUR_DISCORD_TOKEN` with the token of the bot you just created. Save the file.

Your `.env` should look like:
```
TOKEN=your_bot_token_here
```

**Step 6: Add your channel IDs**

Open `index.js`. Replace `YOUR_CHANNEL_ID` on lines 24 and 41 with the channel ID of your Tad Alt's Natro Macro remote control channel.

**Step 7: Run the bot**

Open a terminal, navigate to the project folder, and run:
```
node index.js
```

If everything is set up correctly you will see `Bot is online`. After 60 seconds it will send your alt to Pine Tree to start gathering.

## Note for single Tad Alt users

If you only have one Tad Alt and want it to use PineSkirt instead of SuperCat for Pine Tree, open `index.js` and replace `SuperCat` with `PineSkirt` in the startup messages and the Pine Tree case.

## File Structure

- `index.js` - Main bot logic (listens for boost events and sends macro commands)
- `.env` - Discord bot token (not committed to git)
- `package.json` - Node.js dependencies
