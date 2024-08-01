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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_55_08_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIwMixcbiAgICAgICAgOTAsXG4gICAgICAgIDgxLFxuICAgICAgICA5NyxcbiAgICAgICAgOTksXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNCxcbiAgICAgICAgMTgzLFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDYxLFxuICAgICAgICA5NixcbiAgICAgICAgOTksXG4gICAgICAgIDAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA4OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDY0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTE2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA5NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDcyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcxLFxuICAgICAgICAyOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDksXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzUsXG4gICAgICAgIDgwLFxuICAgICAgICAxODQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzMsXG4gICAgICAgIDcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDM1LFxuICAgICAgICAzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxMjNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICA2MixcbiAgICAgICAgMTc5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTY2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNjgsXG4gICAgICAgIDAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxLFxuICAgICAgICAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1SG82Ni9uMVpqM1VyTmdCeHJWVndUUy9OeFBSMFJ2azdmc2NpazFlM2FrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJCMC1jSnloZFFkcXZvRmZYa21TLUtBXCIsXG4gIFwicGhvbmVJZFwiOiBcImRjZDY2ODQ0LTUxM2QtNDgzNC1hN2M0LWQ1NmQyZDU2NzczZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTQsXG4gICAgICA3NSxcbiAgICAgIDExOCxcbiAgICAgIDExLFxuICAgICAgMTU1LFxuICAgICAgMTcwLFxuICAgICAgMjAyLFxuICAgICAgNTksXG4gICAgICAyMyxcbiAgICAgIDE5MSxcbiAgICAgIDI0NSxcbiAgICAgIDEwMixcbiAgICAgIDkxLFxuICAgICAgODMsXG4gICAgICAxMjMsXG4gICAgICAyMCxcbiAgICAgIDYsXG4gICAgICAyMzUsXG4gICAgICAyMDAsXG4gICAgICA4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDgsXG4gICAgICAxODAsXG4gICAgICAxMDEsXG4gICAgICA0NSxcbiAgICAgIDE3NSxcbiAgICAgIDQ0LFxuICAgICAgNDcsXG4gICAgICA3NSxcbiAgICAgIDE0LFxuICAgICAgOTEsXG4gICAgICA1NyxcbiAgICAgIDI3LFxuICAgICAgMjA0LFxuICAgICAgMzEsXG4gICAgICAyMzIsXG4gICAgICA3OCxcbiAgICAgIDEyOCxcbiAgICAgIDk5LFxuICAgICAgMTg4LFxuICAgICAgMjA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVSOFlRVk5CXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODA5ODAzNzM1MjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDeTNGRVFsbzZzdFFZWUJTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJOS2w5L20xckxQSjdUN0pEMEU3TnNGMDJKcm1YRXNKUm45OVhXYllDRnJreTlVTUZrcFF3N3BZL3g1TVdXblVYQWRaRUtwaStvVW5kVkppM3U2WldBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJueFIrUGFET05LTmZsMThKbitGbE9lbDJ3NmtOT2s5cUp2SnNSVmtZRXl3UnlTTXZMZm1MQ1FPckxFK1p1bXpKb1lDV3VBeHQybXRnK1lUNzlvMGhBdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI0ODQ1MDUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBVmhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFWaC5qc29uIjogIntcImtleURhdGFcIjpcImVGeVljKzdVeXRNa0pNajZSSW5SNkpCSUNSemRpdUhZWFFXWnRGM2c4c2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTcxMzgzMDUzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
