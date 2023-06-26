const NewsCard = (props) => {
  const { mainNews = false, image, category, title, description } = props;
  if (mainNews) {
    return (
      <div className='flex flex-col gap-5'>
        <img
          src={image}
          alt='news image'
          className='rounded-xl'
        />
        <div className='flex flex-col gap-5'>
          <p className='self-start bg-primary bg-opacity-70 text-black text-base  px-4 py-1 text-center rounded-full'>
            {category}
          </p>
          <h5 className='text-lg text-black'>{title}</h5>
          <p className='text-gray-600'>{description}</p>
          <a
            href='#'
            className='underline text-gray-600'>
            Read more
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className='flex gap-5'>
          <div className='relative'>
            <img
              src={image}
              alt='news image'
              className='rounded-xl max-w-[200px] h-auto brightness-75'
            />
            <p className='absolute right-0 bottom-0 m-3 bg-primary bg-opacity-80 text-black text-base  px-4 py-1 text-center rounded-full'>
              {category}
            </p>
          </div>
          <div className='flex flex-col my-auto gap-5'>
            <h5 className='text-lg text-black'>{title}</h5>
            <p className='text-gray-600'>{description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default NewsCard;
