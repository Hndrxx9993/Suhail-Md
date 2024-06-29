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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "-";
global.gurl  =process.env.GURL  || "-";
global.website=process.env.GURL || "-" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "Gift🖤" 


global.devs = "2348104531844" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348104531844";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_00_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDY5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAyOSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDkwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2LFxuICAgICAgICAzMixcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgODEsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM0LFxuICAgICAgICA4OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA1OCxcbiAgICAgICAgMjEyLFxuICAgICAgICA4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDk4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNixcbiAgICAgICAgMjI0LFxuICAgICAgICA5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTcwLFxuICAgICAgICA0MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ4LFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTE0LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTk0LFxuICAgICAgICA3NSxcbiAgICAgICAgNTksXG4gICAgICAgIDksXG4gICAgICAgIDkzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODUsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjI1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjksXG4gICAgICAgIDU0LFxuICAgICAgICAwLFxuICAgICAgICAxMTQsXG4gICAgICAgIDY0LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNixcbiAgICAgICAgNTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjEwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzksXG4gICAgICAgIDM0LFxuICAgICAgICAyMixcbiAgICAgICAgODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDExMixcbiAgICAgICAgODIsXG4gICAgICAgIDExOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxODksXG4gICAgICAgIDMzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICA2NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDEzMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibmxHc2pNVXVXRDV4czhJamxmV1VMYnZSZUh4SDdyR09oS09vUDhIdlZPdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTE4MTM5MDQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGQjE2MUNBNzczODYzRUNGQTdERTE4RkRENEI0NTg4OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MDIwMjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MTE4MTM5MDQyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3QTBGNjlEMzY2RkMzQTRGRjEzRDhBNzE0NkZBOTg3OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTk3MDIwMjlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiT0U0ZGJXeFpRbFd1SHM2WURyYnF4Z1wiLFxuICBcInBob25lSWRcIjogXCIwMDJkNDkwMy1lMzc4LTQ2MDgtOTA4YS0zMDlhZGI5NWQ4NTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTIzLFxuICAgICAgMTY2LFxuICAgICAgMTkyLFxuICAgICAgMjI2LFxuICAgICAgMTg1LFxuICAgICAgOTgsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDEyMyxcbiAgICAgIDI0MCxcbiAgICAgIDE5NyxcbiAgICAgIDE0NCxcbiAgICAgIDM3LFxuICAgICAgMTQsXG4gICAgICAyNTUsXG4gICAgICAxNjAsXG4gICAgICA2MSxcbiAgICAgIDQ1LFxuICAgICAgMjcsXG4gICAgICAxMjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzMSxcbiAgICAgIDExMixcbiAgICAgIDE2NyxcbiAgICAgIDk5LFxuICAgICAgMTQsXG4gICAgICAxNzksXG4gICAgICA5NyxcbiAgICAgIDQ0LFxuICAgICAgNzIsXG4gICAgICAxNTksXG4gICAgICAyOCxcbiAgICAgIDE3NyxcbiAgICAgIDE3MSxcbiAgICAgIDMsXG4gICAgICAxMTUsXG4gICAgICAxMzIsXG4gICAgICA0MSxcbiAgICAgIDE3NSxcbiAgICAgIDE5MSxcbiAgICAgIDEyNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05xVXArNENFSWVrZ3JRR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiRHlnUkR6ZW1vdFFYMzMraStJY2hEekNZK1FDU2hycW5NTy9sQ21UZkRrOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJvcXhHN0ZpeWdudERrUFZlUmVXSnExb0NYdlhxN1dZeGRhOGRPMWVYWUN5OXVycEl3aEJieVlQSmk3U1pTL3dUclN1aWZCeHRWemxCSTh4M2U1RklEQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoMUgyRTFna0crQjV0N2dRZWlQcW5IaVN3ZmtPTWdoTVNrUk5MVjB4b1YvU1o0eGc4RDZoMHIydlc4MytCUkZ5T3o0cnRRMUZHVmxZNFlzYUNISjVqdz09XCJcbiAgfSxcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTgxMzkwNDI6MjZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZOX8J2Tt/Cdk63wnZO78J2UgfCdlIHigKBcIixcbiAgICBcImxpZFwiOiBcIjM4OTM0MjY0NDU5MzQ5OjI2QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExODEzOTA0MjoyNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNzlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxOTcwMjAyNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUxwY1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBTHBjLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWTZXRXpBVlVrMU9yaWlJWXZ2cFp6TTFUeHYvVnBjUmJIN09IeElLNURkQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo3NjgxOTkyNTgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTE3MDI1NjI2M1wifSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxwZC5qc29uIjogIntcImtleURhdGFcIjpcIjEva2MrU2xFbWs1aGhOVjZRZ1RGK2dBNjRvcnozR1c5eitKdXJaci9FOUU9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzY4MTk5MjU4LFwiY3VycmVudEluZGV4XCI6MixcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTkzMTA1Mjg4NjVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "Gift🖤" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Gift🖤",
  packname: process.env.PACK_NAME || "†",
  botname : process.env.BOT_NAME  || "𝔾𝕚𝕗𝕥†𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "Gift🖤",


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
