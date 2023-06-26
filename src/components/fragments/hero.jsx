import Button from '../elements/button';

const Hero = () => {
  return (
    <div className='flex gap-32 max-w-screen-xl mx-auto justify-between items-center'>
      <div className='flex flex-col gap-8'>
        <h1 className='text-secondary text-4xl font-bold leading-normal'>
          <span className='text-primary'>Studying</span> Online is now much
          easier
        </h1>
        <p className='text-lg text-gray-600'>
          Skilline is an interesting platform that will teach you in more an
          interactive way
        </p>
        <div className='flex items-center'>
          <Button variant='heroButton'>Join for free</Button>
        </div>
      </div>
      <div>
        <img
          src='/heroimage.png'
          alt=''
          className='w-full'
        />
      </div>
    </div>
  );
};

export default Hero;
