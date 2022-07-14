const router = require("express").Router()

router.get("/", (req, res)=>{
    res.sendFile(process.cwd() + "/index.html")
})
router.get("/business", (req, res)=>{
    res.sendFile(process.cwd() + "/public/business.html")
})
router.get("/gallery", (req, res)=>{
    res.sendFile(process.cwd() + "/public/gallery.html")
})


module.exports = router;