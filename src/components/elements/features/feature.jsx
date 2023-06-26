const Feature = (props) => {
  const { icon, children } = props;

  return (
    <div className='flex gap-8 justify-center items-center my-10'>
      <div className='flex justify-center items-center bg-white w-14 h-auto p-3 rounded-full drop-shadow-xl'>
        <img
          src={icon}
          alt=''
        />
      </div>
      <div>
        <p className='text-base text-gray-600'>{children}</p>
      </div>
    </div>
  );
};

export default Feature;
