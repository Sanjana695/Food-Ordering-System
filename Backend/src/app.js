const express = require("express");
const { NavItem } = require("react-bootstrap");
const Menus = require("./models/menus");
require("./db/conn");
// const User = require("")
const app = express();

const port = process.env.PORT || 3000

//it will recognize incoming request as a json object
app.use(express.json())

//post menus api 
 app.post("/menus",async(req,res)=>{
    const item=await Menus(req.body);
    //save new created menu in database
    item.save().then(()=>{
      //201-->the response has succeded and a new resource has been created
     res.status(201).send(item)
     
   }).catch((e)=>{
     res.status(400).send(e);
     console.log(item);
   })
   
 })


//get menus api
app.get("/menus", async (req, res) => {
  try {
    const menuItem = await Menus.find();
    res.send(menuItem);
  }
  catch (error) {
    res.send(error)
  }
})

//delete menus api
app.delete("/menus/:id", async (req, res) => {
  try {
    //const id=req.params.id;
    const deleteMenu = await Menus.findByIdAndDelete(req.params.id);
    if (!req.params.id) {
      return res.status(400).send();
    }
    res.send(deleteMenu);
  }
  catch (e) {
    //server error
    res.status(500).send(e);
  }
})

//update the student by its id
app.patch("/menus/:id",async (req,res)=>{
  try{
    const _id=req.params.id;
    const updateitem=await Menus.findByIdAndUpdate(_id,req.body,{
      //show updated data
      new:true
    });
    res.send(updateitem);
    
  }
  catch(e){
    res.status(400).send(e);

  }
})

app.listen(port, () => {
  console.log(`connection is setup at ${port}`);
})

