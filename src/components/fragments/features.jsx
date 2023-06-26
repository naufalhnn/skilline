import Feature from '../elements/features/feature';
import FeaturesImage from '../elements/features/features-image';

const Features = () => {
  return (
    <div className='max-w-screen-xl mx-auto mt-40'>
      <h3 className='text-3xl font-bold text-center text-secondary'>
        Our <span className='text-primary'>Features</span>
      </h3>
      <p className='text-base text-gray-600 text-center'>
        This very extraordinary feature, can make learning activities more
        efficient
      </p>
      <div className='flex justify-between mx-auto my-28'>
        <div className='w-3/5'>
          <FeaturesImage />
        </div>
        <div className='w-2/6 my-auto'>
          <h5 className='text-2xl font-semibold text-secondary'>
            A <span className='text-primary'>user interface</span> designed for
            the classroom
          </h5>
          <Feature icon='/featureicon1.svg'>
            Teachers don’t get lost in the grid view and have a dedicated Podium
            space.
          </Feature>
          <Feature icon='/featureicon2.svg'>
            TA’s and presenters can be moved to the front of the class.
          </Feature>
          <Feature icon='/featureicon3.svg'>
            Teachers can easily see all students and class data at one time.
          </Feature>
        </div>
      </div>
    </div>
  );
};

export default Features;
