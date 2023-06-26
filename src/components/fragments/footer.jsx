import Button from '../elements/button';

const Footer = () => {
  return (
    <div className='bg-secondary w-full h-1/3 py-20'>
      <div className='flex justify-center items-center gap-10'>
        <img
          src='/logofooter.svg'
          alt='logo'
        />
        <div className='border-r h-12 border-white'></div>
        <p className='font-semibold text-lg text-white'>
          Virtual Class <br />
          for Zoom
        </p>
      </div>
      <div className='flex flex-col gap-3 mt-10 justify-center items-center'>
        <div>
          <p className='text-gray-400 text-lg'>
            Subscribe to get our Newsletter
          </p>
        </div>
        <div className='flex justify-center items-center gap-3'>
          <input
            type='email'
            className='bg-transparent w-100 h-10 pl-5 rounded-full border-2 border-gray-600'
            placeholder='Your Email'
          />
          <Button variant='subscribe'>Subscribe</Button>
        </div>
      </div>
      <div className='flex gap-8 justify-center text-gray-400 mt-16'>
        <a href=''>Careers</a>
        <div>
          <p>|</p>
        </div>
        <a href=''>Privacy Policy</a>
        <div>
          <p>|</p>
        </div>
        <a href=''>Terms & Conditions</a>
      </div>
      <div className='flex justify-center mt-5'>
        <p className='text-gray-400'>© 2021 Class Technologies Inc. </p>
      </div>
    </div>
  );
};

export default Footer;
