import Sasisopa from "../models/Sasisopa.js";
const registrar = async(req, res)=>{

    try{
        const sasisopa = new Sasisopa(req.body);
        const guardarSasisopa = await sasisopa.save();
        res.json({guardarSasisopa});
    }catch(error){
        console.log(error)
    }
}
export {registrar};