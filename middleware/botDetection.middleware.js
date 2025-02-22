import useragent from "express-useragent";

const botDetection = (req,res,next)=>{
    req.useragent = useragent.parse(req.headers["user-agent"]);
    if(req.useragent.isBot){
        return res.status(403).send("Bot Detected");
    }
    next();
}

export default botDetection;
