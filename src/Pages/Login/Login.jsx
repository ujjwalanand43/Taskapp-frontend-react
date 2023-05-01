import React from 'react'
import Dropzone from 'react-dropzone'
import styles from './Login.module.css';
import {FcGoogle} from 'react-icons/fc';
import Button from '../../Components/UI/Button/Button';
import icon from '../../data/icon.png';


const Login = () => {
  return (
    <>
        <div className={styles.icon}>
        <a href="">
        <img src={icon} alt="" className={styles.iconImage}/>
        </a>
     
    </div>
    <div className={`container  ${styles.formDesign}`} >
    <p className={styles.welcomeText}>Welcome to Solidify </p>
    <button className={`mt-2 ${styles.signInWithGoogle}`}>
    <span><FcGoogle/></span>
      Continue with Google

    </button>

    <span>
    <hr />
    <h1>OR</h1>
    <hr />
    </span>

<form class="row g-3 mt-2">

  <div class="col-md-12">
    <label for="inputEmail4" class="form-label">Email</label>
    <input type="email" class="form-control" id="inputEmail4"/>
  </div>
  <div class="col-md-12">
    <label for="inputPassword4" class="form-label">Password</label>
    <input type="password" class="form-control" id="inputPassword4"/>
  </div>




  <div class="col-12 d-grid gap-2">
  <Button type="submit" className={` btn btn-primary ${ styles.btn}`} >
          Login
    </Button>
  </div>
</form>
<div className={`mt-2 ${styles.already}`}>
  <p>Don't have an account? <a href="">Sign up</a></p>
</div>
</div>
    </>
  )
}

export default Login