/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU246qSBT9l3qVPnIXTToZUFBEEUFRnEwmJRQ3uQkFiB3/fULbndMPc8708FQpqtZetdba+w1keVQhDXVg8gaKMmogRv0SdwUCEyDVvo9KQAAPYggmgFccozVQNea5FsWKICxwde+Mq2ffPXMl7pkDNdspMWWl7St4EKCoz0nk/gbQCZ2FeEo2C4XWrJC1pWpBbSrbo2ldIBcLe2jHmT7Fd7jdvoJHjwijMsoCuQhRikqYaKgzYFR+j/5aLrQRFcgFROsDS0pO6lTlVlVVQ5F2oTMMAqgGQ13xlOp79INLbLGKUjS7wUJIoCPrY11yG18c785+VYwlcw7VmD7PLuqTfhUFGfJUD2U4wt23dYdquXYyP77RUWxOS7xeQ+ZWSFFMlxdJOo55Vc8bN1z6ivg94jA5HKMBk3GL6crLDdq+JM5YohZ8yCjXsSMdjZGqI1NWOvIrcaP8zMrl/+g+1cx7kts8tARehK29Mvk89tq2PA606yzb+3aXkDETNek3dd/EK21pz/UovuZ3D85bmd9XJWsIhjY9zYRNHKHsVG/uZ/ELfYjr8ncstyU5b865Pr8jODPUc77PWDex14XdzvddO2LlWy1F1kzwzU03vFpD63DROfsuwI4+D4T0OLBy+Tbwb3qiXS+uNPI2WRC8vr/ogjrVAxPqQYASBVGFS4ijPOv3aIYmAPQaC7klwu/ygqadm/zdjNTDWT8eRVkWRgbH0h5eH3HYHaghmXLHoROeTvkrIEBR5i6qKuQtogrnZbdGVQUDVIHJn38RIEM3/DSuL8dQBPCjssL7rC6SHHqfrn7+hK6b1xm2usyd9gtUggn5cxthHGVB1etYZ7B0w6hB0xDiCkx8mFToQQAPNZGLejxQvKQL5e8rMjNLmNpTUsV3XIk95TDPnkdYlvU50kUvPC94LywimZcxRaEX5HFQGFE+NeI8QIDoo2f6O7+0UGnlkZPvIJY0odS8RLiZWk2erOUyf7fhqT0qkQcmuKwRAc7QvdTFLr+g7De4+wU8ZF5ul6WC2EN0HSxdhV3VKRbkL7hPT8Hk7eecmuZejzemGOOwPVqAAOl7BKP+5TTHjmiSoXmG4if0+I/qR9sLCYviR4YwIEAG+9OgybO+yIcD/XUPYRglVd9aK98KLGHL6h3XtI4jWqKoiWKfik/HPqP/jFaazQ75cLnS3AEd47l08sZDR9uHqRlMqXpbsrM5XGyba8vI/wYCJmBWHzahLXKLmqp8kq3GO6Z2r/dCPSyboxbz3LQbuPp6dwt9M9irF88dUrQB5WWkLRN51qYlS2dpNrXzLd7eL3xhzviZ+NpXeybnazFLjNv9cov50Xat3HIeY5IzPCY8ySF55TrGP3tnzhpox4FMNwO93m/CrjuVN9O7DSA7Ox3v41NoSUNhXt2xYSzseT4MxGdTvg+F5GMYR+/t8vaRMz9C77Ptw4H/dOpn5MkH8QXjY1r+IlbSqWipq9FZXWbgfGQGh6Pv09NEPV0cEZ8v2kC8pSG54iv9Bh6PvwhQJBD7eZmCCajSMwQESGCFxZ8tu4tSVGGYFmBCjViGH41JgSNA2olFYWGIPzsdiP2nxTV4/APrcYQ0BQgAAA==';

const prefix = process.env.PREFIX || '¶';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'VON';
const packname = process.env.PACKNAME || 'von';
const dev = process.env.OWNER_NUMBER || '254720326316';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'VON-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'typing';
const herokuapikey = process.env.HEROKU_API_KEY || 'HRKU-860fec5d-3789-43a8-80e4-98b7374bf5d9';
const herokuAppname = process.env.HEROKU_APP_NAME || 'von';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '💚';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'false';
const antidelete = process.env.ANTIDELETE || 'false';
const antibot = process.env.ANTIBOT || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'true';
const greet = process.env.GREET || 'false';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'false';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'viewed';
const greetmsg = process.env.GREET_MSG || 'text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'false';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'false';
const voicechatbot2 = process.env.VOICECHATBOT2 || 'false';
const anticallmsg = process.env.ANTICALL_MSG || 'rada g call later';
const autobio = process.env.AUTOBIO || 'true';

const { Sequelize } = require('sequelize'); // Ensure Sequelize is imported

const DATABASE_URL = process.env.DATABASE_URL || './database.db'; // Define DATABASE_URL properly

const database =
  DATABASE_URL === './database.db'
    ? new Sequelize({
        dialect: 'sqlite',
        storage: DATABASE_URL,
        logging: false,
      })
    : new Sequelize(DATABASE_URL, {
        dialect: 'postgres',
        ssl: true,
        protocol: 'postgres',
        dialectOptions: {
          ssl: { require: true, rejectUnauthorized: false },
        },
        logging: false,
      });

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  database,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
