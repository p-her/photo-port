import React, { useState } from 'react';
import About from './components/About';
<<<<<<< HEAD
import ContactForm from './components/Contact';
=======
import Gallery from './components/Gallery';
>>>>>>> feature/gallery
import Nav from './components/Nav'


function App() {
    const [categories] = useState([
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
        },
        { name: 'portraits', description: 'Portraits of people in my life' },
        { name: 'food', description: 'Delicious delicacies' },
        { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },

    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
        <Nav 
            categories = { categories }
            setCurrentCategory = { setCurrentCategory }
            currentCategory = { currentCategory }
        />
        <main>
<<<<<<< HEAD
            <ContactForm></ContactForm>
            <About></About>
=======
            <Gallery currentCategory={currentCategory}/>
            <About/>
>>>>>>> feature/gallery
     
        </main>
      
    </div>
  );
}

export default App;
