import React, { useState } from 'react';
import About from './components/About';

import ContactForm from './components/Contact';

import Gallery from './components/Gallery';

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
    /* In the preceding expression, we set the initial value of contactSelected to false. This is to prevent the 
    contact form from showing when a user initially navigates to the homepage. The Gallery will display instead, 
    which is the first thing Lyza's customers will want to see.*/
    const [contactSelected, setContactSelected] = useState(false);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
        <Nav 
            categories = { categories }
            setCurrentCategory = { setCurrentCategory }
            currentCategory = { currentCategory }
            contactSelected = {contactSelected}
            setContactSelected = {setContactSelected}
        />
        {!contactSelected ? (
            // <> and </> are React fragments: allow multiple elements to be grouped together
            // allows you to wrap elements without creating extra DOM nodes, like wrapping with a <div>
            <>
              <Gallery currentCategory={currentCategory}/>
              <About/>
            </>
        ):(
            <ContactForm></ContactForm>
        )}
      
      {/* the preceding code is equivalent to the following conditional statement:
        if(!contactSelected) {
        <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
        </> 
        } else {
            <ContactForm></ContactForm>
        }
      
      
      */}
      
    </div>
  );
}

export default App;
