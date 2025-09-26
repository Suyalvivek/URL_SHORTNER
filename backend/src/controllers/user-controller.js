import { registerUser } from "../services/user-service.js";

export const home = (req,res)=>{
    res.send('Home route');
}
export const login = (req,res)=>{
    res.send('Login route');
}
export const register = async (req,res)=>{
    const userInfo = req.body;
    try {
        const doc = await registerUser(userInfo);
        console.log(doc);
        res.json({message:'User registered successfully',id :doc._id});
    } catch (error) {
        res.json({message:'Error while registering user',error: error.message});
    }


}