const MongoClient = require('mongodb').MongoClient;
var _db;
module.exports = {
  connectToServer:function(callback){
    const uri = process.env.mongo_uri
    // const uri = "mongodb+srv://Parzival:bibi123@cluster0-9ekw7.mongodb.net/bibi-testing?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true"
    MongoClient.connect(uri,{useUnifiedTopology:true}, function(err, mongoClient) {
       if(err) {
            console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
       }
       console.log('Connected...');
       _db = mongoClient
       return callback(err);
     });
  },

  getDb:function(){
    return _db;
  }
}
