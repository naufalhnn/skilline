import IntroCard from '../elements/intro-card/index.jsx';

const Intro = () => {
  return (
    <div className='flex gap-14 justify-center max-w-screen-xl mx-auto my-20'>
      <IntroCard
        variant='instructors'
        image='instructors'
        title='instructors'
        buttonTitle='instructors'
      />
      <IntroCard
        variant='students'
        image='students'
        title='students'
        buttonTitle='students'
      />
    </div>
  );
};

export default Intro;
