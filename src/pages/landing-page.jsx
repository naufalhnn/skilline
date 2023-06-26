import Navbar from '../components/fragments/navbar.jsx';
import Hero from '../components/fragments/hero.jsx';
import Companies from '../components/fragments/companies.jsx';
import Services from '../components/fragments/services.jsx';
import Intro from '../components/fragments/intro.jsx';
import LearningMethod from '../components/fragments/learning-method.jsx';
import Features from '../components/fragments/features.jsx';
import Tools from '../components/fragments/tools.jsx';
import Quizz from '../components/fragments/quizz.jsx';
import Classmgt from '../components/fragments/classmgt.jsx';
import Discussion from '../components/fragments/discussion.jsx';
import Integrations from '../components/fragments/integrations.jsx';
import Testimonials from '../components/fragments/testimonial.jsx';
import News from '../components/fragments/news.jsx';
import Footer from '../components/fragments/footer.jsx';

const LandingPage = () => {
  return (
    <div>
      <div className='bg-primary bg-opacity-10 min-h-screen'>
        <Navbar></Navbar>
        <Hero />
      </div>
      <Companies />
      <Services />
      <Intro />
      <LearningMethod />
      <Features />
      <Tools />
      <Quizz />
      <Classmgt />
      <Discussion />
      <Integrations />
      <Testimonials />
      <News />
      <Footer />
    </div>
  );
};

export default LandingPage;
