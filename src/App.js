import React from 'react';
import Navbar from './components/navbar.js';
import Projects from './components/projects';
import Resume from './components/resume.js';
import About from './components/about.js';
import Services from './components/services.js';
import Contact from './components/contact.js';
import Footer from './components/footer.js';

function App() {
  return (
    <div className="App">
        <Navbar/><br/>
        <Projects/><br/><br/>
        <Resume/><br/><br/>
        <About/><br/><br/>
        <Services/><br/><br/>
        <Contact/><br/><br/><br/>
        <Footer/><br/>

    </div>
  );
}

export default App;
