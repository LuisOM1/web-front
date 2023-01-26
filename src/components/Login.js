import '../css/login.css';
import  logo from  '../img/logo.png';
import Wsp from './Wsp';

function Login() {
  return (
    <div>
        < Wsp/>
        <div className='login'>
            <div className='login_container_left'>
                <div className='login_sup'>
                    <img src={logo} alt="GpsSkies"></img>
                </div>
                <div className='login_center'>
                    <div className='login_text'>
                        <h5>¿No tienes una cuenta?</h5>
                        <a>
                            <span>Crea una cuenta ahora</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className='login_container_right'>
                <form className='login_form'>
                    <h5>Iniciar Sesión</h5>
                    <div className='div_input'>
                        <input aria-invalid="false" placeholder="Email" required="" type="email"></input>
                    </div>
                    <div className='div_input'>
                        <input aria-invalid="false" placeholder="Contraseña" type="password"></input>
                    </div>
                    <div>
                        <button type="submit">
                            <span>Ingresa</span>
                        </button>
                    </div>
                    <div className='login_help'>
                        <a>¿Olvidaste tu contraseña?</a>
                    </div> 
                </form>
            </div>
        </div>
    </div>
  );
}

export default Login;