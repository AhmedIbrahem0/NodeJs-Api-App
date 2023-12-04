const getHomeUrl = (req, res)=>{
    res.json({
        message:"Welcome Home!"
    })
}
const getAboutUrl = (req, res)=>{
    res.send("Welcome About!")
}

module.exports={
    getHomeUrl,
    getAboutUrl
}