const express = require("express");
const router = express.Router()

const Item = require("../modal/item");
const item = require("../modal/item");
const { remove } = require("../modal/item");

router.get("/get",(req,res)=>{
    Item.find()
    .then((data)=>{
        res.send(data)
    }).catch((err)=>{
        res.send(err)
    })
})

router.post("/post",(req,res)=>{
    const newItem=new Item({
        name:req.body.name
    })
    newItem.save().then((item)=>{res.json(item)})
})


router.delete("/delete/:id",(req,res)=>{
    Item.findById(req.params.id)
   .then((data)=>{
      data.remove()
      .then(()=>{
          res.json({success:true})
      }).catch(()=>{
          res.status(404).json({success:false})
      })
   })
})
module.exports =router