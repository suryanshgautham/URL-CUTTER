const mongoose=require('mongoose');
// <--------------Linking MongoDB to server---------->
const db_link="mongodb+srv://admin:<ghJ8u9PPxH2K5s0a>@cluster0.jbvca.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(db_link)
.then(function(db){
    console.log("Plan db connected");
})
.catch(function(err){
    console.log(err);
})

// <-------------Schema Creation----------->
const urlSchema=new mongoose.Schema({
   longurl:{
    type:String,
    required:true
   },
   shortUrl:{
    type:String
   },
   timesClicked:{
    type:Number,
    default : 0  
   },
   browsers:{
   type:String    
   },
   user:{
    type:mongoose.Schema.ObjectId,
    ref:'userModel',
    required:[true,'Url must belong to user'],

}
    
});


urlModel=mongoose.model('urlModel',urlSchema);
module.exports=urlModel;

