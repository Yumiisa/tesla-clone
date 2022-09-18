import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const Header = () => {
  return (
    <Container>
      <a>
        <img src="/images/tesla.png" alt="tesla" className="tesla"/>
      </a>
      <Menu>
        <a href="#" className='menu'>Model S </a>
        <a href="#" className='menu'>Model 3</a>
        <a href="#" className='menu'>Model X</a>
        <a href="#" className='menu'>Model Y</a>

      </Menu>
      <RightMenu>
        <a href="#">shop</a>
        <a href="#">Tesla account</a>
        <CustomMenu />
      </RightMenu>
      <BurgerNav>
        <CloseWrapper>
          <CustomClose/>
        </CloseWrapper>
        <ul>
         <li><a href="#">used  inventory</a></li>
           <li><a href="#">trade-in</a></li>
         <li><a href="#">roadster</a></li>
           <li><a href="#">powerwall</a></li>
         <li> <a href="#">charging</a></li>
          <li><a href="#">support</a></li>
        </ul>
      </BurgerNav>
    </Container>
  )
}

export default Header
const Container=styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 20px
top:0;
left:0;
right:0;
z-index:1
`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
  flex-wrap: nowrap;
  color:#000;
  
} 
@media(max-width:767px) {
  display:none
}
`
const RightMenu = styled.div`
display:flex;
align-items: center;
a{
  font-weight:600;
  text-transform: uppercase;
  padding:0 10px;
 
  margin-right:10px;
  color:#000;
  
} 
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer;
`
const BurgerNav=styled.div`
position:fixed;
top:0;
bottom:0;
right:0;
background-color:white;
width:300px
z-index:16;
list-style:none;

padding:20px;
display:flex;
text-align:start;
flex-direction:column;
li{
  padding:15px 0;
  color:black;
  list-style:none;
  border-bottom:1px solid rgba(0,0,0,0.2);
}
a{
   color:black;
   font-weight:600;

}
`
const CustomClose=styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper=styled.div`
display:flex;
justify-content:flex-end
`