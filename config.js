const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="kiwandasadat@gmail.com"
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


global.devs = "256703372570" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256703372570";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_59_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDM4LFxuICAgICAgICAxNixcbiAgICAgICAgMTg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNixcbiAgICAgICAgMjUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIwLFxuICAgICAgICA5MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgxLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NyxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTExLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTg4LFxuICAgICAgICA3MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4LFxuICAgICAgICAxODgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1LFxuICAgICAgICAzNCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDMxLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjM0LFxuICAgICAgICA3MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDkyLFxuICAgICAgICAzMixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjAzLFxuICAgICAgICA2MixcbiAgICAgICAgMjAxLFxuICAgICAgICA1OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTksXG4gICAgICAgIDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNCxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTMsXG4gICAgICAgIDk3LFxuICAgICAgICA3MixcbiAgICAgICAgMTI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMixcbiAgICAgICAgNDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM1LFxuICAgICAgICA5NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNyxcbiAgICAgICAgODEsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDksXG4gICAgICAgIDk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNSxcbiAgICAgICAgNzMsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjYsXG4gICAgICAgIDUyLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQzNWVVlNUmU1dFhaRkZLaE9HNTJ0eHU1cWdjeVg4RXJyYUJXWXh0QWpkUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTY3MDMzNzI1NzBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU1NEIwQjlBNDFFNzFDODcxMkM0MEU0RjRBNDk1MzM0XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjQ0NTE0NlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ1U21vZHNTdVFLZVpYU25wUEdYeUZRXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyYWY3YTRkLWQ1ZWMtNDdkMi1iM2U4LTY0MWRiZTdhMjQyMlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3OSxcbiAgICAgIDE3MixcbiAgICAgIDU0LFxuICAgICAgMjQxLFxuICAgICAgMjQxLFxuICAgICAgMTc1LFxuICAgICAgMjM4LFxuICAgICAgMTUwLFxuICAgICAgMTE0LFxuICAgICAgMjA2LFxuICAgICAgMjM0LFxuICAgICAgMjMwLFxuICAgICAgMTQzLFxuICAgICAgOSxcbiAgICAgIDg2LFxuICAgICAgMTY5LFxuICAgICAgOTYsXG4gICAgICAxNTcsXG4gICAgICAyMjIsXG4gICAgICAxODlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOCxcbiAgICAgIDYyLFxuICAgICAgNTgsXG4gICAgICAxNTgsXG4gICAgICAzNSxcbiAgICAgIDE2NSxcbiAgICAgIDE1LFxuICAgICAgNTcsXG4gICAgICAxMzQsXG4gICAgICA5LFxuICAgICAgMTI0LFxuICAgICAgNDMsXG4gICAgICA5NyxcbiAgICAgIDExNSxcbiAgICAgIDMxLFxuICAgICAgMTE0LFxuICAgICAgMTE0LFxuICAgICAgMTA4LFxuICAgICAgMjMwLFxuICAgICAgMjE5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkc1UEQ0Ukw2XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3MDMzNzI1NzA6NTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI3Njc4MDk2MzM0ODU2Mjo1MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKaWI5c2tFRU0vYXFiVUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlM3ZDNublFzWVhTd3FpN2RvdEd2NEZMNzBNZStOYndJRm5ENGlqd1FLaUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiOVo1aHBUdzh4YVFUeTRwSnp0S3k1b3NTMFI5cnNUMDFETkN2TnF4M0o5a2VDVGM1eGthclpOM2pEeEhoTjdldWlUTE11RFB2SEx2NkplcnlHV1pCRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNjhwL05sdG9DalNMTE15aDZtVEozd3B4eUN3NzBmSkxVNnRGaUR5ZWR5cloxTTVKNjFpcXBxRVBwVTRBdnJvU1M4QTZ6SVBkU1lRVm1STmJSMzYwRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2NzAzMzcyNTcwOjUxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0NDUxNDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFNUGJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU1QYi5qc29uIjogIntcImtleURhdGFcIjpcImpOOCsraHk1ZDNDcExHNkdRR1NVZEdXZUhsWDkyVmJGQ2xPZnhqRWZic2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTIyODc3MDcwNSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzIwODk2MTg5MDkxXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Crazy killer",


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
