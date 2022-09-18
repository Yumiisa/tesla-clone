import React from 'react'
import Section from './Section'
import styled from 'styled-components'

const Home = () => {
  return (
    <Container>
        <Section  
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="mode-s.jpeg.crdownload"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
        />
         <Section
         title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
          />
          <Section 
          title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
          />
           <Section 
           title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpeg"
        leftBtnText="custom order"
        rightBtnText="existing inventory"
           />
           <Section 
        title="lowest cost solar panels in america"
        description="money-back guarantee"
        backgroundImg="solar.jpeg"
        leftBtnText="order now"
        rightBtnText="learn more"
           />
           <Section
        title="lowest cost solar panels in america"
        description="money-back guarantee"
        backgroundImg="solar-r.webp"
        leftBtnText="order now"
        rightBtnText="learn more"
           />
           <Section 
           title="Accessories"
        description=""
        backgroundImg="accessories.avif"
        leftBtnText="shop now"
           />
    </Container>
  )
}

export default Home
const Container=styled.div`
height:100vh;
`