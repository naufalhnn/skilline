import NewsCard from '../elements/news-card';

const News = () => {
  return (
    <div className='mb-36'>
      <div className='flex flex-col justify-center items-center gap-5 my-20'>
        <h3 className='text-3xl text-secondary font-semibold'>
          Lastest News and Resources
        </h3>
        <p className='text-gray-600 tracking-wider'>
          See the developments that have occurred to Skillines in the world
        </p>
      </div>
      <div className='flex max-w-screen-xl mx-auto gap-20'>
        <div>
          <NewsCard
            mainNews={true}
            image='mainnews.png'
            category='NEWS'
            title='Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution'
            description='Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...'
          />
        </div>
        <div className='flex flex-col gap-10'>
          <NewsCard
            mainNews={false}
            image='news1.png'
            category='PRESS RELEASE'
            title='Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand'
            description='Class Technologies Inc., the company that created Class,...'
          />
          <NewsCard
            mainNews={false}
            image='news2.png'
            category='NEWS'
            title='Zoom’s earliest investors are betting millions on a better Zoom for schools'
            description='Zoom was never created to be a consumer product. Nonetheless, the...'
          />
          <NewsCard
            mainNews={false}
            image='news3.png'
            category='NEWS'
            title='Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms'
            description='This year, investors have reaped big financial returns from betting on Zoom...'
          />
        </div>
      </div>
    </div>
  );
};

export default News;
