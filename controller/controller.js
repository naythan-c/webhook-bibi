const Discord = require("discord.js");
const bot = new Discord.Client();
// var mongoUtil = require( '../mongoUtil.js' );
const config = require('../config.json');
const allcommands = require('./allcommands.json')
const TOKEN = process.env.token
bot.login(TOKEN);
bot.on('ready',(bot)=>{
    console.log('Webhook ready')
})
var controller={}

controller.main=async (req,res)=>{
    res.render('pages/index.ejs')
}

controller.commands=async(req,res)=>{
    res.render('pages/commands',{allcommands:allcommands})
}
controller.reward = async(req,res)=>{
      if(req.headers.authorization) {
        if(req.headers.authorization === config.webhook_secret) {
          // var db = mongoUtil.getDb();
          // const userProfileCollection = db.db(config.database).collection(config.collection.economy);
          await bot.guilds.cache.get('713260797891051540').channels.cache.get('740300509902143500').send(`<@${req.body.user}> voted`)
              // await userProfileCollection.updateOne(
              //     {'userId':req.body.user},
              //     {$inc:{'bibi_tokens':10}}
              // )
          res.send({status: 200});
        }
        else {
          res.send({status: 401, error: 'The auth received does not match the one in your config file.'})
        }
      }
      else {
        res.send({status: 403, error: 'There was no auth header in the webhook'})
      }
}

module.exports = controller
