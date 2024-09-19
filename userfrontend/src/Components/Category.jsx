import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './Category.css'
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};
// const sliderImageUrl = [
//   //First image url
//   {
//     url:
//       "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1"
//   },
//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
//   },
//   //Second image url
//   {
//     url:
//       "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*"
//   },
//   //Third image url
//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU"
//   },

//   //Fourth image url

//   {
//     url:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU"
//   }
// ];
function Category () {
const [category,setCategory]=useState([])

   async function getAllCategory()
    {
       const result=await fetch('http://localhost:5000/Api/Category');

       const jsonData=await result.json();
      //  console.log(jsonData);
       if(jsonData)
       {
          setCategory(jsonData.data)
       }
    }
    useEffect(()=>{
        getAllCategory()
    },[])
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {category.map((item, index) => {
          return (
            <div className="slider slider-details" key={index}>
              {/* <img src={imageUrl.url} alt="movie" /> */}
              <img  style={{height:'50vh',width:'20vw',marginTop:'5rem'}} src={`http://localhost:5000/${item.productImage}`}/>
              <h2 className="mx-5">{item.Name}</h2>
            </div>
          );
        })}
    
      </Carousel>
    </div>
  );
};
export default Category;