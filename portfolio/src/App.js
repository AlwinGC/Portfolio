import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
