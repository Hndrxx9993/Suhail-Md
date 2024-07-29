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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_00_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDM4LFxuICAgICAgICA3NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODgsXG4gICAgICAgIDMsXG4gICAgICAgIDMsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDU0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAzOSxcbiAgICAgICAgNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDQzLFxuICAgICAgICA3MixcbiAgICAgICAgMTczLFxuICAgICAgICAxMTIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNjAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3MyxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAwLFxuICAgICAgICA1OCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTYwLFxuICAgICAgICA5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDkwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjksXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTkzLFxuICAgICAgICAzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODQsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDg2LFxuICAgICAgICA5NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDExLFxuICAgICAgICAyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICAxOTksXG4gICAgICAgIDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNjksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMyxcbiAgICAgICAgODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAzNSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxLFxuICAgICAgICA5MCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAzOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTYxLFxuICAgICAgICA4MixcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDgwLFxuICAgICAgICA5MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiY3IwTDdmanZiUDRCc3hYdTY2MzZtYkNtNGxFYk5ybTdrcW9vZXYrVXpvND1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUmI1aVhuUXRUcnFzN0V1eXpQV0lld1wiLFxuICBcInBob25lSWRcIjogXCI4NjMzYjVkYy03OGJlLTQ3MzEtYWVjNS04N2U3NGM0YTQ4YjJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTkwLFxuICAgICAgMjA4LFxuICAgICAgMzIsXG4gICAgICAxODEsXG4gICAgICA5NyxcbiAgICAgIDE3NSxcbiAgICAgIDE5MCxcbiAgICAgIDExMixcbiAgICAgIDEyNixcbiAgICAgIDEzNCxcbiAgICAgIDE0MixcbiAgICAgIDI0NSxcbiAgICAgIDU3LFxuICAgICAgMTYyLFxuICAgICAgMjA0LFxuICAgICAgNTEsXG4gICAgICAzOSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NSxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDcsXG4gICAgICAxMDcsXG4gICAgICAyMDIsXG4gICAgICAyMzksXG4gICAgICAyMSxcbiAgICAgIDE0MCxcbiAgICAgIDg5LFxuICAgICAgNDEsXG4gICAgICAyMjMsXG4gICAgICAyMCxcbiAgICAgIDI0MyxcbiAgICAgIDExNSxcbiAgICAgIDE4MyxcbiAgICAgIDE3MyxcbiAgICAgIDEzMSxcbiAgICAgIDIwOCxcbiAgICAgIDI1NSxcbiAgICAgIDE0OSxcbiAgICAgIDIsXG4gICAgICAyNTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWEZXRjhFTjNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMzkzNDMzMDE6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg0ODM4NTM5MzYyNDg1OjMyQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0k2RnE4Y0ZFS2JObjdVR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYjRRRUFZWC8rRTBudUMyZFZ4U05taFRkamhsc3A4SXFxR0RUT0g0Qzd3ND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIyYzFQbUp0VlVmRUtPWlp2QkdaSTd0ajUvbHh1R2UzNkU2aTRzWG5tNDRMakFTRWxKdHVTcThRc0lHSXZ0NHRJNENid2E1STU0cHluSXBnQStrR3VBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJqWFgrZkV2S0Q4QU1ZU1cvRzVVZDVBc3VVRDkrcGUvU1Z1ZlluZjE0Rm9HWnZoVmJnM05LR1Y3eFdjNmVqNXVRUzR2V1dPcnBMVVMzMmlRQlN1MDhpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTM5MzQzMzAxOjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI3OTU5MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVBxU1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUHFTLmpzb24iOiAie1wia2V5RGF0YVwiOlwiNHdHcXJGbkVZT1IzK3FRcWlVaDlDeHp0czZNcGswYm9tRFBQVi9Wenc3OD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDkxNzgwMjM3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
