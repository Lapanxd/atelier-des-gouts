import { Link } from 'react-router-dom';
import { authService } from '../../core/services/auth.service';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth/AuthContext.tsx';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const navigate = useNavigate();
  const { setToken } = useAuth();


  async function login() {
    const user = await authService.login(email, password);
    if (user) {
      setToken(user.token);
      navigate('/');
    }
  }

  return (
    <div className='flex justify-center'>
      <div className='w-auto'>
        <div className='w-full p-5 flex flex-col gap-3 max-w-md'>
          <img
            src='https://placehold.co/100'
            className='rounded-lg w-32 self-center'
            alt='Logo atelier des  goûts'
          ></img>
          <h1 className='text-3xl self-center font-semibold mt-10 mb-5'>Se connecter</h1>

          <input
            type='text'
            placeholder='Ex: john@doe.fr'
            className='input input-bordered w-full'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            className='input input-bordered w-full'
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className='self-center'>Mot de passe oublié</a>
          <button className='btn btn-block bg-accent' onClick={login}>
            Se connecter
          </button>
          {/*<Link to='/register' className='self-center'>*/}
          {/*  Pas encore de compte ?*/}
          {/*</Link>*/}
        </div>
      </div>
    </div>
  );
};

export default Login;
