import Company from '../elements/company-logo';

const Companies = () => {
  return (
    <div className='flex flex-col gap-10 mt-24 items-center justify-center'>
      <div>
        <h5 className='text-gray-600 text-lg'>
          Trusted by 5,000+ Companies Worldwide
        </h5>
      </div>
      <div className='flex gap-16 items-center justify-center'>
        <Company image='/google.svg' />
        <Company image='/netflix.svg' />
        <Company image='/airbnb.svg' />
        <Company image='/amazon.svg' />
        <Company image='/facebook.svg' />
        <Company image='/grab.svg' />
      </div>
    </div>
  );
};

export default Companies;
