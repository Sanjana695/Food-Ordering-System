const mongoose=require("mongoose");

const MenuSchema=new mongoose.Schema({
    image:{
        type:String
    },
    name:{
        type:String,
    },  
    desc:{
    type:String
    },
    price:{type:Number},
})
// //collection creation
 const Menus=new mongoose.model("Menus",MenuSchema);
//name of collection is Menu
 module.exports=Menus;