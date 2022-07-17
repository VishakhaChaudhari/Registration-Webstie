import { useState } from "react"
import React  from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"" ,email:"",phone:"",work:"",password:"",cpassword:""
  });

  let name,value;
  const handleInput =(e)=>{
   
    name = e.target.name;
    value = e.target.value;
   
    setUser({...user,[name]:value});
  }

  const postData =async (e)=>{
      e.preventDefault();
      
      const {name,email,phone,work,password,cpassword} = user;

      const res = await fetch('http://localhost:5000/register',{
        method: "POST",
        headers :{
          "Content-Type" : "application/json"
        },
        body : JSON.stringify({
          name,email,phone,work,password,cpassword
        })
      });

      const data = await res.json();
      if(data.status === 422 || !data)
      {
        window.alert("Invalid Registration");
        console.log("Invalid Registration");
      }else{
        window.alert("Successful Registration");
        console.log("Successful Registration");
        navigate('/login');
      }
  }

  return (
    <>
     <div className="container" id="register">
    <form method='POST'>
   
    <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" name="name" value={user.name} onChange={handleInput}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
    </div>

    <div className="mb-3">
    <label className="form-label">Email address</label>
    <input type="email" name="email" value={user.email} onChange={handleInput}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
    </div>

    <div className="mb-3">
    <label  className="form-label">Phone Number</label>
    <input type="text" name="phone" value={user.phone} onChange={handleInput}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
    </div>

    <div className="mb-3">
    <label  className="form-label">Work</label>
    <input type="text" name="work" value={user.work} onChange={handleInput}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>   
    </div>

    <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" name="password" value={user.password} onChange={handleInput} className="form-control" id="exampleInputPassword1"/>
   </div>

    <div className="mb-3">
    <label  className="form-label">Confirmed Password</label>
    <input type="password" name="cpassword" value={user.cpassword} onChange={handleInput} className="form-control" id="exampleInputPassword1"/>
    </div>
 
    <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
</form>
</div>
    </>
  )
}

export default Register