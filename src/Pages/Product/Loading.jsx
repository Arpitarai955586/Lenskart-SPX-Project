import { Grid, Skeleton, Box } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  const loader = [
  { 
  name: 'Lenskart Air',
  size: 'Medium · Air Fusion',
  rating: 4.8,
  reviews: 3404,
  price: 1500,
  originalPrice: 2000,
  discount: '25% OFF',
  colors: ['#2c3e50', '#7f8c8d', '#000000', '#2d3436'],
  image: 'https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/628x301/9df78eab33525d08d6e5fb8d27136e95//l/i/black-full-rim-square-lenskart-air-fusion-la-e13069-c1-eyeglasses_lenskart-air-la-e13033-c1-eyeglasses_eyeglasses_g_7875_1b_28july23.jpg',
},
    {
      name: 'Lenskart STUDIO',
      size: 'Medium · KJO',
      rating: 4.9,
      reviews: 608,
      price: 1500,
      originalPrice: 2000,
      discount: '25% OFF',
      colors: ['#2c3e50', '#000000'],
      image: 'https://static1.lenskart.com/media/catalog/product/j/f/jfjf7.jpg',
    },
    {
      name: 'Vincent Chase',
      size: 'Wide · Sleek Steel',
      rating: 4.8,
      reviews: 1566,
      price: 1500,
      originalPrice: 2000,
      discount: '25% OFF',
      colors: ['#bdc3c7', '#d35400'],
      image: 'https://static1.lenskart.com/media/catalog/product/s/v/sv001.jpg',
    },
  ];
  return (
    
    <Grid
      m="20px 10px"
      templateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)"
      }}
      height="50px"
      gap={6}
    >
      {loader.map((ele) => (
        <Skeleton width="100%" height="400px" key={ele} isLoaded={false} border="1px solid black">
          <Box>Hello World!</Box>
        </Skeleton>
      ))}
    </Grid>
  );
};

export default Loading;
