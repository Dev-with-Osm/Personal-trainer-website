import React from 'react'
import homeImg from '../../assets/images/home-pic-1.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Hdata from './Hdata';
import './Home.css'


// const NextArrow = (props) =>{
//     const {onClick} = props
//     return(
//         <div className='control-btn' onClick={onClick}>
//             <button className='next'>
//               <i class="ri-arrow-right-s-line"></i>
//             </button>
//         </div>
//     )
//   }
//   const PrevArrow = (props) =>{
//     const {onClick} = props
//     return(
//         <div className='control-btn' onClick={onClick}>
//             <button className='prev'>
//               <i class="ri-arrow-left-s-line"></i>   
//             </button>
//         </div>
//     )
//   }


const HomeImg = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    }
    return (
        <Slider {...settings}>
        <div className="home-img" >
            <img src={homeImg} alt="" />
        </div>
        </Slider>

    )}
    



       
    
//   return (

    
//     <>
//     <Slider {...settings}>
//     {
//         Hdata.map((value, index) => {
//             return (
//                 <div key={index}>
//                      <div className="home-img">
//                     <img src={value.cover} alt="" />
//                 </div>
//                 </div>
               
//             )
//         } )
//     }
//     </Slider>
//     </>
//  )}
  

export default HomeImg