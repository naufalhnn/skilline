import ServicesCard from '../elements/services-card/index.jsx';

function Services() {
  return (
    <div className='max-w-screen-xl mx-auto flex flex-col mt-40 gap-20'>
      <div>
        <h3 className='text-3xl font-bold text-center text-secondary'>
          All-In-One <span className='text-primary'>Cloud Software.</span>
        </h3>
        <p className='text-base text-center text-gray-600 w-5/12 mx-auto mt-5'>
          Skilline is one powerful online software suite that combines all the
          tools needed to run a successful school or office.
        </p>
      </div>
      <div className='flex gap-14 justify-center'>
        <ServicesCard variant='invoice' />
        <ServicesCard variant='calendar' />
        <ServicesCard variant='costumer' />
      </div>
    </div>
  );
}

export default Services;
