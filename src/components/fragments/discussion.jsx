import Button from '../elements/button';

const Discussion = () => {
  return (
    <div className='my-20'>
      <div className='flex max-w-screen-xl mx-auto gap-40'>
        <div className='max-w-lg'>
          <img
            src='/disscussion.png'
            alt=''
          />
        </div>
        <div className='max-w-lg my-auto'>
          <h3 className='text-3xl font-bold text-secondary leading-normal'>
            <span className='text-primary'>One-on-One</span>
            <br /> Disscussion
          </h3>
          <p className='text-base text-gray-600 mx-auto mt-5 leading-relaxed'>
            Easily launch live assignments, quizzes, and tests. Student results
            are automatically entered in the online gradebook.
          </p>
        </div>
      </div>
      <div className='flex justify-center'>
        <Button variant='outlineYellow'>See more feature</Button>
      </div>
    </div>
  );
};

export default Discussion;
