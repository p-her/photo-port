import React, { useState } from "react";
// import photo from "../../assets/small/commercial/0.jpg";
import Modal from "../Modal";

function PhotoList({category}){
    const [photos] = useState([
        {
            name: 'Grocery aisle',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Grocery booth',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Building exterior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Restaurant table',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cafe interior',
            category: 'commercial',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Cat green eyes',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green parrot',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Yellow macaw',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Pug smile',
            category: 'portraits',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Pancakes',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burrito',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Scallop pasta',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Burger',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Fruit bowl',
            category: 'food',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Green river',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Docks',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Panoramic village by sea',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Domestic landscape',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
          {
            name: 'Park bench',
            category: 'landscape',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
          },
    ])


    /* As the preceding error message states, there is a TypeError this time. Can you guess what might have gone wrong?

    It seems that the Modal is invoked and tries to render as soon as PhotoList has rendered. Unfortunately, the currentPhoto 
    state isn't defined until the user clicks on an image.
     And we can't destructure an undefined value, so a TypeError is raised.

    We could set default values for the state so that the modal receives a defined value. But we only want the modal to open when a 
    user has clicked an image. So, in React terms, we want to conditionally render the modal based on whether an image has been clicked.
    Because we have no way to track that yet, let's create another Hook that manages whether the modal is open or not. Call this state isModalOpen, 
    and create the Hook near the top of the PhotoList function body. It should look as follows: 
    */

    const [isModalOpen, setIsModalOpen] = useState(false); // initial state to false, because we dont want the modal to open until a user has clicked on an image

    /* Consider the type of data in the PhotoList component that allows the modal to work properly. 
    The two critical data points needed for the modal to render are the image and the index, i. Let's 
    pass the image and index data as props—to allow the modal to render the image.

    We'll use the useState Hook in the PhotoList component to manage the current photo state and make 
    this data accessible to the Modal component through props, as shown in the following expression: */

    const [currentPhoto, setCurrentPhoto] = useState();
    const toggleModal = (image, i) => {
        // current photo
        /* Here we updated the current photo state using the setCurrentPhoto function with the data 
        retrieved through the click event. Notice how we used the spread operator here to add the index: i 
        key value pair to the current photo state.
        
        Because currentPhoto now contains the two critical data points needed for the modal, we can pass in 
        currentPhoto as a prop to the Modal, as shown in the following code

        <Modal currentPhoto={currentPhoto}>
        */
        setCurrentPhoto({...image, index: i});
        // when the user has clicked on an image, we'll update the click handler, toggleModal
        // so that it updates isModalOpen value to true
        setIsModalOpen(true);
    }

    const currentPhotos = photos.filter((photo) => photo.category === category);

    return (
        <div>
            {/* only render the modal if isModalOpen value is true */}
            {isModalOpen && <Modal currentPhoto={currentPhoto}/>}
            <div className="flex-row">
            {currentPhotos.map((image, i) => (
                <img 
                    src={require(`../../assets/small/${category}/${i}.jpg`)}
                    alt={image.name}
                    className="img-thumbnail mx-1"
                    // image object represents the element in the photos array, and the i
                    // will render the image
                    onClick={() => toggleModal(image, i)}
                    key={image.name}
                />
            ))}
        </div>
        </div>    
    );
};

export default PhotoList;