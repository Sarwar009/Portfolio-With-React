import './App.css';
import About from './Components/About/About';
import Nav from './Components/Nav/Nav';
import Contact from './Components/Contact/Contact';
import Header from './Components/Header/Header';
import Experience from './Components/Experience/Experience';
import Testimonial from './Components/Testimonial/Testimonial';
import Service from './Components/Services/Service';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Service />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
