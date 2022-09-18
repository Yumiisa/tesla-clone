import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const Section = ({title,description,backgroundImg,leftBtnText,rightBtnText}) => {
  return (
    <Wrap bgImage={backgroundImg}>
         <Fade bottom> 
          <ItemText>
         
            <h1>{title}</h1>
            <p>{description}</p>
            </ItemText>
            </Fade>
            <Buttons>
              <Fade bottom> 
              <ButtonGroup>
                  <LeftButton>
                  {leftBtnText}
                  </LeftButton>
                  { rightBtnText && 
                  <RightButton>
                      {rightBtnText}
                  </RightButton>}
              </ButtonGroup>
               </Fade>
            <DownArrow src="images/downarrow.svg" />
            </Buttons>
    </Wrap>
  )
}

export default Section
const Wrap=styled.div
`
z-index:10;
width:100vw;
height:150vh;
 background: ${props=>`url('/images/${props.bgImage}')`} center / cover no-repeat;
 display:flex;
 flex-direction:column;
 justify-content:space-between;
 align-items:center

 `
 const ItemText=styled.div`
 padding-top:15vh;
 text-align:center;
 text-transform:capitalize;
 z-index:-1;
 `
 const ButtonGroup=styled.div`
 display:flex;
 margin-bottom:30px;
 @media (max-width:768px) {
  flex-direction:column;
 }
 `
 const LeftButton=styled.div`
 background-color:rgba(23,26,32,0.8);
 height:40px;
 width:256px;
 color:white;
 cursor:pointer
 display:flex;
 justify-content:center;
 align-items:center;
 text-transform:uppercase;
 border-radius:100px;
 opacity:0.85;
 font-size:12px;
 margin:8px;
 text-align:center;
 `
 const RightButton=styled(LeftButton)`
 background:white;
 opacity:0.65;
 color:black;
 `
 const DownArrow=styled.img`

 height:40px;
 animation:animateDown infinite 1.5s;
 overflow-x:hidden
`
const Buttons=styled.div``