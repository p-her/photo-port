import React from 'react';

import About from './components/About';
import ContactForm from './components/Contact';
import Nav from './components/Nav'


function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
            <ContactForm></ContactForm>
            <About></About>
     
        </main>
      
    </div>
  );
}

export default App;
