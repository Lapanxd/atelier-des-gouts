const Authentication = () => {
  return (
    <>
      <div className='w-full p-5 flex flex-col	gap-3'>
        <input type='text' placeholder='Ex: john@doe.fr' className='input input-bordered w-full' />
        <input type='text' placeholder='Password' className='input input-bordered w-full' />
        <button className='btn btn-block bg-accent'>Se connecter</button>

      </div>
    </>
  );
};

export default Authentication;