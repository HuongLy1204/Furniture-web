import { Container, Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";

import React from "react";
import Slider from "react-slick";
import WorksItem from "./works/Works";
import { WORKS_LIST } from "./works/works-info";

export default function WorksList() {
   
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 5,
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
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <Box py={{xs:3, md :7, lg:10}} bgcolor={"darkseagreen"} px={{xs:3, md :7, lg:10}} width={"100%"}>
         
          <Slider slidesToShow={{sx:2}} {...settings}>
            
            {WORKS_LIST.map((item)=>(
              <Grid  item xs={2} sm={4} md={1} key={item.id}>
                 <WorksItem  dataWorks={item} ></WorksItem>
              </Grid>
             ))}
        </Slider>
      
        
      </Box>
    );
  }
