import { Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import WorksItem from "./Works";
import { WORKS_LIST } from "./works-info";

export default function WorksList() {
   
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      centerMode:true,
      centerPadding:30,
      slidesToScroll: 1,
      
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            centerMode:false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode:false
          }
        }
      ]
    };
    return (
      <>
      
      <Box pb={{xs:3, md :7, lg:10}} bgcolor={"#BDB7B4"} px={{xs:3, md :10, lg:15}} width={"100%"}>
      <Typography  py={6} align="center" color={"white"} variant="h5" fontWeight={"bolder"}>
          CÁC CÔNG TRÌNH TIÊU BIỂU
        </Typography>
         
          <Slider slidesToShow={{sx:2}} {...settings}>
            
            {WORKS_LIST.map((item)=>(
             <Box key={item.id}>
               <WorksItem  dataWorks={item} ></WorksItem>

             </Box>
             
             ))}
        </Slider>
      
        
      </Box>
      </>
    );
  }
