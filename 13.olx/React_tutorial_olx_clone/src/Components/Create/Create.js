import React, { Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import { useState } from 'react';
import { firebaseApp, db } from '../../firebase/config';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; 
import { addDoc, collection } from 'firebase/firestore';
import { LoginContext } from '../../LoginProvider';
import { useHistory } from 'react-router-dom';


const Create = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const user = useContext(LoginContext);
  const history = useHistory();

  // Initialize Firebase Storage
  // const storage = firebase.storage();
  const storage = getStorage(firebaseApp);

  // Function to handle image upload
  const handleImageUpload = () => {
  
    // Create a reference to the image file in Firebase Storage
    const imageRef = ref(storage, `images/${image.name}`);
    

    // Upload image to Firebase Storage
    const uploadTask = uploadBytesResumable(imageRef, image);

    uploadTask.on('state_changed', (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          console.log('Upload is running default');
      }
    });
    
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {   

      try{
      
        const docRef = addDoc(collection(db, 'items'), {
          name,
          category,
          price,
          imageUrl: downloadURL,
          userId: user.user.uid,
          createdAt: new Date()
        }).then((docRef) => {
          console.log('Document written with ID: ', docRef.id);
          history.push('/');
        });

      } catch (e) {
        console.error('Error adding document: ', e);
      }

    });

  };


  return (
    <Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              defaultValue="John"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              defaultValue="John"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input  className="input" 
                    type="number" 
                    id="fname" 
                    name="Price" 
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
            <br />
          </form>
          <br />
          <img alt="Posts" 
            width="200px" 
            height="200px" 
            src={ image ? URL.createObjectURL(image) : null }></img>
          <form>
            <br />
            <input type="file"
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
            />
            <br />
            <button className="uploadBtn" onClick={
              (e) => {
                e.preventDefault();
                handleImageUpload();
              }
            } >upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;
