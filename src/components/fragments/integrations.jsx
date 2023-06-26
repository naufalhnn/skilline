import Button from '../elements/button';

const Integrations = () => {
  return (
    <div className='my-40'>
      <div className='flex max-w-screen-xl mx-auto gap-40'>
        <div className='flex gap-x-20 justify-center flex-wrap w-2/5'>
          <img
            src='/onedrive.svg'
            alt=''
            className='w-32'
          />
          <img
            src='/dropbox.svg'
            alt=''
            className='w-32'
          />
          <img
            src='/gdrive.svg'
            alt=''
            className='w-32'
          />
          <img
            src='/teams.svg'
            alt=''
            className='w-32'
          />
        </div>
        <div className='w-2/5 my-auto'>
          <p className='text-secondary font-light uppercase tracking-widest mb-8'>
            Integrations
          </p>
          <h3 className='text-3xl font-bold text-secondary leading-normal'>
            200+ educational tools and platform{' '}
            <span className='text-primary'>integrations</span>
          </h3>
          <p className='text-base text-gray-600 mx-auto my-8 leading-relaxed'>
            Schoology has every tool your classroom needs and comes
            pre-integrated with more than 200+ tools, student information
            systems (SIS), and education platforms.
          </p>
          <Button variant='outlineYellow'>See all integrations</Button>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
