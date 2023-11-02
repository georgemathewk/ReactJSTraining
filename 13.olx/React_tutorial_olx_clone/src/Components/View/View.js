import React, { useContext, useEffect, useState } from 'react';
import { PostContext } from '../../PostProvider'
import './View.css';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from '../../firebase/config'


function View() {

  const postContext = useContext(PostContext);
  const [seller, setSeller] = useState(null);
  
  useEffect(
    async () => {
      console.log('User ID : ', postContext.post.userId);

      const q = query(collection(db, 'users'), where('uid', '==', postContext.post.userId) )
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach( (doc) => {
          setSeller(doc.data());
      });


    }, []
  );
  
  

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postContext.post.imageUrl}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postContext.post.price} </p>
          {/* <span>{postContext.post.name}</span> */}
          <p>{postContext.post.name}</p>
          <span>{postContext.post.createdAt.toDate().toDateString()}</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{seller?.name}</p>
          <p>{seller?.phone}</p>
          <p>{seller?.email}</p>
        </div>
      </div>
    </div>
  );
}
export default View;
