import React, { useContext } from 'react';

import Heart from '../../assets/Heart';
import './Post.css';
import { db } from '../../firebase/config';
import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { PostContext } from '../../PostProvider';

function Posts() {  

  const [posts, setPosts] = useState([]);  
  
  const postContext = useContext(PostContext);

  useEffect(async () => {    

    const q = query(collection(db, 'items'));

    const querySnapshot = await getDocs(q);
    
    const items = [];

    querySnapshot.forEach((doc) => {
      items.push({ id: doc.id, ...doc.data() });
    });

    setPosts(items);


  }, []);

  

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        
        <div className="cards">

          {
            posts.map((obj) => {
              
              return (                
                
                <Link to="/view">

                <div
                  className="card"
                  key={obj.id}
                  onClick={() => {
                    console.log('Clicked :' ,  obj);
                    postContext.hi(obj);
                    // postContext.setPost(obj);
                  }}
                >
                  <div className="favorite">
                    <Heart></Heart>
                  </div>
                  <div className="image">
                    <img src={obj.imageUrl} alt="" />
                  </div>
                  <div className="content">
                    <p className="rate">&#x20B9; {obj.price}</p>
                    <span className="kilometer">{obj.category}</span>
                    <p className="name">{obj.name}</p>
                  </div>
                  <div className="date">
                    <span>{obj.createdAt.toDate().toDateString()}</span>
                  </div>
                </div>

                </Link>


              );
            }
            )
          }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>10/5/2021</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
