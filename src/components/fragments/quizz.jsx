const Quizz = () => {
  return (
    <div className='flex max-w-screen-xl mx-auto gap-40 my-20'>
      <div className='max-w-lg'>
        <img
          src='/quizz.png'
          alt=''
        />
      </div>
      <div className='max-w-lg my-auto'>
        <h3 className='text-3xl font-bold text-secondary leading-normal'>
          Assessments, <span className='text-primary'>Quizzes</span>, Tests
        </h3>
        <p className='text-base text-gray-600 mx-auto mt-5 leading-relaxed'>
          Easily launch live assignments, quizzes, and tests. Student results
          are automatically entered in the online gradebook.
        </p>
      </div>
    </div>
  );
};

export default Quizz;
