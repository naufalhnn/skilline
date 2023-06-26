import Button from '../button/index.jsx';

const IntroCard = (props) => {
  const { image, title, buttonTitle, variant } = props;

  const images = {
    instructors: 'bg-intro-instructors',
    students: 'bg-intro-students',
  };

  const titles = {
    instructors: 'FOR INSTRUCTORS',
    students: 'FOR STUDENTS',
  };

  const buttonTitles = {
    instructors: 'Start a class today',
    students: 'Enter access code',
  };

  const chosenImage = images[image];
  const chosenTitle = titles[title];
  const chosenButtonTitle = buttonTitles[buttonTitle];

  return (
    <div
      className={`flex justify-center items-center ${chosenImage} w-2/5 h-80 rounded-2xl`}>
      <div className='flex flex-col gap-5 items-center justify-center'>
        <h5 className='font-semibold text-white text-2xl'>{chosenTitle}</h5>
        <Button variant={variant}>{chosenButtonTitle}</Button>
      </div>
    </div>
  );
};

export default IntroCard;
