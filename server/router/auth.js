const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');
const bcrypt = require('bcryptjs');
router.get('/',(req,res)=>{
    res.send(`Hello from MERN project Backend`);
})

router.post('/register',async (req,res)=>{
    const {name,email,phone,work,password,cpassword} = req.body;
    if(!name || !email || !phone || !work || !password || !cpassword)
    {
        return res.status(422).json({message:"Plz filled the fields properly"});
    }

    try{

       const userExist = await User.findOne({email:email});
       if(userExist)
       {
            return res.status(400).json({message:"Email already exist"});
       }else if(password != cpassword)
       {
            return res.status(402).json({message:"Password and confirmed password is not matching"});
       }else{
       const user =  new User({name,email,phone,work,password,cpassword})
       await user.save();
       res.json({message:"User registered successfully"});}

    }catch(err)
    {
        console.log(err);
    }

})


router.post('/login', async (req,res)=>{
    try{

        const {email,password} = req.body;

        if(!email || !password)
        {
            return res.send(422).json({message:"Plz filled the fields properly"});
        }

       const userExist = await User.findOne({email:email});
       // userExist contains the entire information of that email
       if(userExist)
       {
            const isMatch = await bcrypt.compare(password,userExist.password);
            if(isMatch)
            {
                res.json({message:"User login successfully"});
            }  else{
                res.json({message:"Password is incorrect"});
            }

            

       }
       else{
           return  res.json({error:"User does not exist u need to register first"});

       }

    }catch(err)
    {
        console.log(err);
    }
})


module.exports  = router;