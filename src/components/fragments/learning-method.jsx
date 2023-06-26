const LearningMethod = () => {
  return (
    <div className='flex gap-20 justify-between max-w-screen-xl mx-auto'>
      <div className='w-1/2 my-auto'>
        <div className='bg-primary w-12 h-12 bg-opacity-60 translate-y-9 -translate-x-4 rounded-full'></div>
        <h5 className='font-semibold text-2xl text-secondary z-20'>
          Everything you can do in a physical classroom,{' '}
          <span className='text-primary'>you can do with Skilline</span>
        </h5>
        <p className='text-base text-gray-600 my-8 tracking-wide '>
          Skilline’s school management software helps traditional and online
          schools manage scheduling, attendance, payments and virtual classrooms
          all in one secure cloud-based system.
        </p>
        <a
          href=''
          className='underline'>
          Learn more
        </a>
      </div>

      <div className='w-1/2'>
        <img
          src='/learningmethod.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default LearningMethod;
