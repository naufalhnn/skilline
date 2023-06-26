import Button from '../elements/button';

const Testimonials = () => {
  return (
    <div className='my-20'>
      <div className='flex max-w-screen-xl mx-auto gap-40'>
        <div className='gap-x-20 mx-auto w-1/3'>
          <p className='text-secondary font-light uppercase tracking-widest mb-8'>
            Testimonials
          </p>
          <h3 className='text-3xl font-bold text-secondary leading-normal'>
            What They Say?
          </h3>
          <p className='text-base text-gray-600 mx-auto my-8 leading-relaxed'>
            Skilline has got more than 100k positive ratings from our users
            around the world.
          </p>
          <p className='text-base text-gray-600 mx-auto my-8 leading-relaxed'>
            Some of the students and teachers were greatly helped by the
            Skilline.
          </p>
          <p className='text-base text-gray-600 mx-auto my-8 leading-relaxed'>
            Are you too? Please give your assessment
          </p>
          <Button variant='outlineYellow'>Write your assessment</Button>
        </div>
        <div className='w-2/5 my-auto'>
          <img
            src='/testimonialprofile.png'
            alt=''
            className='w-96'
          />
          <img
            src='/testimonial.png'
            alt=''
            className='translate-x-3 -translate-y-44'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
