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


global.SESSION_ID "SUHAIL_07_37_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTExLFxuICAgICAgICA0LFxuICAgICAgICAxMDksXG4gICAgICAgIDM5LFxuICAgICAgICAwLFxuICAgICAgICA2NixcbiAgICAgICAgMTg1LFxuICAgICAgICAxODAsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDU5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDksXG4gICAgICAgIDIyLFxuICAgICAgICAxLFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNixcbiAgICAgICAgNjIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0LFxuICAgICAgICAxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTYwLFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NixcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTc5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1MixcbiAgICAgICAgODgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzNixcbiAgICAgICAgMTY5LFxuICAgICAgICAyMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI4LFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQyLFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc0LFxuICAgICAgICA4NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDYxLFxuICAgICAgICAxNjksXG4gICAgICAgIDgwLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMyxcbiAgICAgICAgNDcsXG4gICAgICAgIDY3LFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAxOSxcbiAgICAgICAgODUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDMwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDc5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDIzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDMwLFxuICAgICAgICA0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDM3LFxuICAgICAgICA0NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM1LFxuICAgICAgICA3NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAzMixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDExNixcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgODMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTk5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkdoZTg1OGRzczA5K0gvYTFJS2pIZ05IYjVzalZNSlhmWWpQa0IrRElMMHM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk94SXdfM3lIUjdPcmRRVk9mem5SU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjVmNTVmYjMtNjUzYi00NGM1LTgxMmUtZTc2OTU4MDBkOWQ1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDQ0LFxuICAgICAgMTQ2LFxuICAgICAgMjMwLFxuICAgICAgMTQ4LFxuICAgICAgMTcsXG4gICAgICAxOTYsXG4gICAgICAzLFxuICAgICAgMTQxLFxuICAgICAgMTgzLFxuICAgICAgNSxcbiAgICAgIDIwOSxcbiAgICAgIDIxLFxuICAgICAgMTc5LFxuICAgICAgMjU0LFxuICAgICAgNzMsXG4gICAgICAxMDcsXG4gICAgICAyMyxcbiAgICAgIDQ1LFxuICAgICAgNzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDgsXG4gICAgICAyMTgsXG4gICAgICAyMzMsXG4gICAgICAxNTIsXG4gICAgICAxNDEsXG4gICAgICAxMjMsXG4gICAgICA5MSxcbiAgICAgIDEwNSxcbiAgICAgIDIwNixcbiAgICAgIDE5MyxcbiAgICAgIDExLFxuICAgICAgMTg3LFxuICAgICAgMjU0LFxuICAgICAgMjI5LFxuICAgICAgMjExLFxuICAgICAgMjgsXG4gICAgICA1NyxcbiAgICAgIDE2NixcbiAgICAgIDI3LFxuICAgICAgMTc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpNUERBNlBLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIxODA5ODAzNzM1MjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIvCdkIzwnZCrIPCdkJHwnZCe8J2QnfCdkIHwnZCo8J2QslwiLFxuICAgIFwibGlkXCI6IFwiMTgzMjQ1MTk5MTQzMDU1OjI1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0pDeTNGRVF3THkzdFFZWUJpQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiUElLSTNneVlWSFo5SFhoNXR2QjNuajZGbG1XbVh1MmMvOHhIM2Z5RGMwdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBTFFHSHAxcFd5RUNkOTY1OFE1Y24yUFpURFVPcmFIVVduN3o3RXNSMnNSSU83SWVaNlF3dTZPclBiR2gzKy9ZVGNGNlRkeER5cjdNZ0RoTEFRalVDdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJJUGlFelYrY25lNFNyLzV1OHppRjB2SmJtSTU2aDJoMHFnYjhpNjJUZHJQRGw1bUZWUWdQc0dBd0FvemFtMEZRRFphTWlxVWdFUUhzS0w0ZzdXYkpnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIxODA5ODAzNzM1MjoyNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDc2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI2NzA2NjBcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


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
