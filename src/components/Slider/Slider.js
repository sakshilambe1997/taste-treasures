import React from "react";
import "./Slider.css"
import "./../../views/Home/Home.css"
import Slider from "react-slick";

 function SimpleSlider() {
  
    const images=[
        {
            imgUrl:" https://mitracafe.co.in/wp-content/uploads/2021/12/slide2.jpg",
            alt:"Background-img-1"
           
        },

        {
            imgUrl:"https://img.freepik.com/free-photo/flat-lay-thanksgiving-food-border-assortment-with-copy-space_23-2149114449.jpg",
            alt:"Background-img-2"
        },
        {
            imgUrl:"https://img.freepik.com/free-photo/vegetables-set-left-black-slate_1220-685.jpg",
            alt:"Background-img-3"
        },

        {
            imgUrl:"https://img.freepik.com/premium-photo/spicy-indian-curry-black-bowl-with-steam-spices_1222783-6853.jpg",
            alt:"Background-img-4"
        },
        {
            imgUrl:"https://as1.ftcdn.net/v2/jpg/04/79/59/36/1000_F_479593650_zurGH3MZqSo9IoRvj0AXk58jU2dN8HoO.jpg",
            alt:"Background-img-5"
        },
    ]

    const  settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:2000,
      autoplay:true
    };
    return (
        <div className="slider-container">
      <Slider {...settings}>
        {
            images.map((img,i)=>{
                const{imgUrl,alt}=img
                return(
               <div key={i}>
               <img src={imgUrl} alt={alt}  className="background-img"/>
               </div>
                )
            })
        }
      </Slider>
      </div>
    );
  }
export default SimpleSlider