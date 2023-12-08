import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className='w-full p-5 flex flex-col gap-3 max-w-md'>
        <img src='https://placehold.co/100' className='rounded-lg w-32 self-center' alt='Logo atelier des  goûts'></img>
        <h1 className='text-3xl font-semibold mt-10 mb-5 self-center'>S'inscrire</h1>
        <div className='flex gap-2'>
          <div>
            <label className='pl-3'>Prénom</label>
            <input type='text' placeholder='Ex: John' className='input input-bordered w-full' />
          </div>

          <div>
            <label className='pl-3'>Nom</label>
            <input type='text' placeholder='Ex: Doe' className='input input-bordered w-full' />
          </div>
        </div>
        <div>
          <label className='pl-3'>Adresse mail</label>
          <input type='text' placeholder='Ex: john@doe.fr' className='input input-bordered w-full' />
        </div>

        <div>
          <label className='pl-3'>Mot de passe</label>
          <input type='text' placeholder='Password' className='input input-bordered w-full' />
        </div>
        <a className='self-center'>Mot de passe oublié</a>
        <button className='btn btn-block bg-accent'>Se connecter</button>
        <Link to='/login' className='self-center'>J'ai déjà un compte</Link>
      </div>
    </>
  );
};

export default Login;