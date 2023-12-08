import { authService } from '../../core/services/auth.service.ts';

export const Header = () => {
  function logout() {
    authService.logout();
  }

  return (
    <>
      <div className='navbar p-3 rounded-lg'>
        <div className='flex-1'>
          <a className='text-xl font-semibold'>Atelier
            des goûts</a>
        </div>
        <div className='flex-none gap-2'>
          <div className='dropdown dropdown-end'>
            <div className='avatar '>

            </div>
            <div tabIndex={0} role='button' className='btn btn-ghost btn-circle avatar placeholder'>
              <div className='bg-primary text-primary-content rounded-full w-10'>
                <span className='text-sm'>UI</span>
              </div>
            </div>
            <ul tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'>
              <li>
                <a className='justify-between'>Profil</a>
              </li>
              <li><a>Settings</a></li>
              <li><a className='text-red-600' onClick={logout}>Se déconnecter</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};