const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_03_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTU3LFxuICAgICAgICA2NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNixcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMyxcbiAgICAgICAgMzksXG4gICAgICAgIDE3NixcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjksXG4gICAgICAgIDgzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NixcbiAgICAgICAgMzUsXG4gICAgICAgIDM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMixcbiAgICAgICAgNTksXG4gICAgICAgIDExLFxuICAgICAgICA5NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OSxcbiAgICAgICAgNixcbiAgICAgICAgODIsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTgsXG4gICAgICAgIDgwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDc3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjA4LFxuICAgICAgICAzMixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjM2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyLFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDY5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMjEsXG4gICAgICAgIDc3LFxuICAgICAgICAyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY0LFxuICAgICAgICA0NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDUwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTk1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzQsXG4gICAgICAgIDY5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3MixcbiAgICAgICAgNDcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDY0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTMyLFxuICAgICAgICA2MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMixcbiAgICAgICAgNTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDg2LFxuICAgICAgICA1NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTUsXG4gICAgICAgIDIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICA4NCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNixcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDcyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA2NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiNUF3ZW1OMHhzaWlaTVg0Yi82dGVybG9CSFNEZmhKMFNpVG82dEZCdUpCOD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MjY1NTYyMjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjdFNzM3QTZBQTkzRUI0QTJDREUxQzlBMkQ3MTE5NzU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTM5NzgxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NjcyNjU1NjIyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMENBRUM0RUE5NDA4NUE1QjA5ODFGNUQwMUJGQTBFRjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIxMzk3ODEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpMMjFxT3pxUTVDMjRWWXNfRnVhV2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDIxMzVkMGItYWQ0My00ZWVlLTkyOGItYmI0ZWMzZjZlMWU2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5LFxuICAgICAgNDYsXG4gICAgICAxMCxcbiAgICAgIDIwNyxcbiAgICAgIDEzNSxcbiAgICAgIDkxLFxuICAgICAgNTAsXG4gICAgICAxNDQsXG4gICAgICAyNDYsXG4gICAgICAyMzMsXG4gICAgICAyMTIsXG4gICAgICAxOTIsXG4gICAgICAxODksXG4gICAgICAyMjUsXG4gICAgICA0NCxcbiAgICAgIDM4LFxuICAgICAgMzYsXG4gICAgICAxODEsXG4gICAgICAxMjIsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI5LFxuICAgICAgMjIsXG4gICAgICAyMDEsXG4gICAgICAxMTMsXG4gICAgICAyNDAsXG4gICAgICAxNTgsXG4gICAgICAyMjIsXG4gICAgICAyNCxcbiAgICAgIDI0NCxcbiAgICAgIDEwMixcbiAgICAgIDEzMixcbiAgICAgIDEzNyxcbiAgICAgIDc4LFxuICAgICAgMTIsXG4gICAgICAxNTYsXG4gICAgICAxOTAsXG4gICAgICAxMzksXG4gICAgICAyMjAsXG4gICAgICAxNjAsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMRzIvS2dGRUtyazZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkdaL25meHRLdGk3aEE2MUg5UFRvakYzMW14RlJaNDdHZDdUYW1UN2w5QTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwicGFhQ3dDbzVCQmFoVzZMbDNXZ1BkUElFcEM5KzlhbzVIZGQ3UXhPNCtKV3lPNlNFNTlQdzFPVDZaRXV4aHFHcnF4bFNhNmtCdU5SM01BNmsvNStIRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiekZCeVpaN1J0dGhNdWpCMlFFTjcyeFU4RFJQbnpKRjBqTVNxdkFHOGJZY2hGNVl6aFVUWXVRenArVEUxRzR4VkZmNmZ0TFMxeFlJdzM1N1FJc0xrQmc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MjY1NTYyMjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIi4uLlwiLFxuICAgIFwibGlkXCI6IFwiMTkzMzEyNTY4OTA1OTA3OjFAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTY3MjY1NTYyMjQ6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTM5NzgwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUtYalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBS1hqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkFjMXllK0xMM0pkNEF6VnE1UHpTbWc2ekNiMnM2YzVpcWkvcGNuSFNWMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDI4MTAxOTM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEzOTc4MTI3NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
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
