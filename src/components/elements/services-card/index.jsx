import React from 'react';

const ServicesCard = (props) => {
  const { variant } = props;

  let icon = {};
  let title;
  let description;
  switch (variant) {
    case 'invoice':
      icon = {
        src: '/invoice.svg',
        addClassName:
          'bg-purple-600 w-16 h-16 p-5 rounded-full flex justify-center items-center -translate-y-10',
      };
      title = 'Online Billing, Invoicing, & Contract';
      description =
        'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts';
      break;
    case 'calendar':
      icon = {
        src: '/calendar.svg',
        addClassName:
          'bg-primary w-16 h-16 p-5 rounded-full flex justify-center items-center -translate-y-10',
      };
      title = 'Easy Scheduling & Attendance Tracking';
      description =
        'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance';
      break;
    case 'costumer':
      icon = {
        src: '/costumer.svg',
        addClassName:
          'bg-sky-500 w-16 h-16 p-5 rounded-full flex justify-center items-center -translate-y-10',
      };
      title = 'Customer Tracking';
      description =
        'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization';
      break;
  }

  return (
    <div className='flex flex-col items-center w-3/12 h-72 bg-white rounded drop-shadow-lg my-20'>
      <div className={icon.addClassName}>
        <img
          src={icon.src}
          alt=''
        />
      </div>
      <div className='px-8 flex flex-col justify-between'>
        <h5 className='text-xl text-secondary h-16 flex items-center justify-center font-medium text-center leading-relaxed my-4'>
          {title}
        </h5>
        <p className='text-gray-600 text-center text-sm leading-relaxed'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServicesCard;
