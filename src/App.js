import './App.css';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
