import '../css/login.css';
import  logo from  '../img/logo.png';

function Login() {
  return (

    <div className='login'>
        <div className='login_sup'>
            <img src={logo} alt="GpsSkies"></img>
        </div>
            <div className='login_container_left'>
                <div className='login_center'>
                    <h5>¿No tienes una cuenta?</h5>
                    <button>
                        <span>Crea una cuenta ahora</span>
                    </button>
                </div>
            </div>

            <div className='login_container_right'>
                <div className='login_form'>
                    <form>
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