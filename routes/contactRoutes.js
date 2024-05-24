const express = require('express');
const router = express.Router();


router.route("/").get((req, res)=>{

    res.status(200).json( {message : "Get all detail"});
});

router.route("/post").post((req,res)=>{

    res.status(200).json( {message : "Created a new post"});
})

router.route("/:id").get((req,res)=>{

    res.status(200).json( {message : `Get contact for ${req.params.id}`});
})

router.route("/:id").put((req,res)=>{
    res.status(200).json( {message : `Updated contact for ${req.params.id}`});

})
router.route("/:id").delete((req,res)=>{
    res.status(200).json( {message : `Deleted contact for ${req.params.id}`});
})
module.exports = router;