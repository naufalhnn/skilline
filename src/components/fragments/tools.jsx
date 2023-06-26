const Tools = () => {
  return (
    <div className='flex max-w-screen-xl justify-between mx-auto my-20'>
      <div className='flex flex-col gap-8 max-w-lg my-auto'>
        <h3 className='text-3xl font-bold text-secondary leading-normal'>
          <span className='text-primary'>Tools</span> For Teachers <br /> and
          Learners
        </h3>
        <p className='text-base text-gray-600 leading-relaxed'>
          Class has a dynamic set of teaching tools built to be deployed and
          used during class. Teachers can handout assignments in real-time for
          students to complete and submit.
        </p>
      </div>
      <div className='max-w-lg'>
        <img
          src='/tools.png'
          alt=''
        />
      </div>
    </div>
  );
};

export default Tools;
