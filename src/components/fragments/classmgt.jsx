const Classmgt = () => {
  return (
    <div className='flex max-w-screen-xl mx-auto gap-40 my-20'>
      <div className='w-2/5 my-auto'>
        <h1 className='text-secondary text-3xl font-bold leading-normal'>
          <span className='text-primary'>Class Management </span>
          <br />
          Tools for Educators
        </h1>
        <p className='leading-relaxed mt-5'>
          Class provides tools to help run and manage the class such as Class
          Roster, Attendance, and more. With the Gradebook, teachers can review
          and grade tests and quizzes in real-time.
        </p>
      </div>
      <div className='w-3/5'>
        <img
          src='/classmgt.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Classmgt;
