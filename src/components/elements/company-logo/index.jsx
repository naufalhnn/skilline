const Company = (props) => {
  const { image } = props;
  return (
    <div className='w-32'>
      <img
        src={image}
        alt=''
      />
    </div>
  );
};

export default Company;
