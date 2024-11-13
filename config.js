const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348076685322";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_49_11_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA5OSxcbiAgICAgICAgNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQwLFxuICAgICAgICA3MixcbiAgICAgICAgNTksXG4gICAgICAgIDEyMCxcbiAgICAgICAgODMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTczLFxuICAgICAgICAxMCxcbiAgICAgICAgMTc5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjksXG4gICAgICAgIDMyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDkwLFxuICAgICAgICA0NSxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDQyLFxuICAgICAgICA2LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjUsXG4gICAgICAgIDgyLFxuICAgICAgICA0MCxcbiAgICAgICAgMTA1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTU0LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTYyLFxuICAgICAgICA1NyxcbiAgICAgICAgMjA2LFxuICAgICAgICA4MyxcbiAgICAgICAgMjI3LFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAzNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDU3LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTM3LFxuICAgICAgICA1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDM4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTMsXG4gICAgICAgIDcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICA3OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjksXG4gICAgICAgIDg2LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjQ5LFxuICAgICAgICA5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxLFxuICAgICAgICA3MyxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzYsXG4gICAgICAgIDg1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA2OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJFQllFVmNMejdaYklnVEYreVJ3cDc1WEtJUHI4clpWdGh5OUxOQzBTcFgwPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6Z2hmUWR5a1JIVzVwWG41ZTBmdzNnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjBlZjRjNjI1LTgxN2ItNDRhZi1hYmQ5LTEwOWYwMGJiNDM0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzksXG4gICAgICAxNDcsXG4gICAgICAxNyxcbiAgICAgIDAsXG4gICAgICAyNixcbiAgICAgIDE5MyxcbiAgICAgIDU0LFxuICAgICAgMTY1LFxuICAgICAgNDAsXG4gICAgICAxMixcbiAgICAgIDI0NSxcbiAgICAgIDE4MixcbiAgICAgIDE0NyxcbiAgICAgIDg0LFxuICAgICAgMTIwLFxuICAgICAgMTEzLFxuICAgICAgMzIsXG4gICAgICAzLFxuICAgICAgOSxcbiAgICAgIDE0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAyMzMsXG4gICAgICAxMDgsXG4gICAgICA3MSxcbiAgICAgIDIxOCxcbiAgICAgIDExNCxcbiAgICAgIDIxNSxcbiAgICAgIDY3LFxuICAgICAgMjUwLFxuICAgICAgMTMxLFxuICAgICAgMTA1LFxuICAgICAgMTQwLFxuICAgICAgMTk5LFxuICAgICAgMTY2LFxuICAgICAgMTM5LFxuICAgICAgMTUzLFxuICAgICAgMjgsXG4gICAgICAyMTcsXG4gICAgICAzNixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhWVlE0NTQ5XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MDc2Njg1MzIyOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiU01BUlQgTUVESUFcIixcbiAgICBcImxpZFwiOiBcIjI3MzI1OTEyMzc0MDkxMjoxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNcmpzTFlCRUluczBia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlI3WlBCUVhpSjJmS3pESjBMZjRyZ0o1eEJyVDkzUmdiWGJpSEZmbGx0aDg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiejlGWEEzUEVyRnJtdU54U2l3QlQzNTFUQTRyNjRnNDdWK2FpSTZ3M1dnSDJ2VEU1UVJRMFlPN0pCUkpneWtYQlRvQnM5RmtRWFBIdXhUc05BdVlvRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiV0ZaMC9IczA1NXVnaFJ3b2g5TzdjK0hSWkI3cnZMVFZzSitVWjZndUNVUEE1N2xOSmJtR3J4UnVlNkR4dVVWQzViVlliMkpUakFrZHF6VjJMelBEakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA3NjY4NTMyMjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDMxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0OTEzNDRcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
