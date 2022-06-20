import React, { Component } from 'react'
import Slider from 'react-slick'

export default function PopupProducts() {
	const settings = {
		dots: true,
		fade: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}
	return (
		<div>
			<h2>Fade</h2>
			<Slider {...settings}>
				
			</Slider>
		</div>
	)
}
