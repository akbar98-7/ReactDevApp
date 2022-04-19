import React from 'react'
import './Homepage.css';
import Main from '../Components/Layout/main';
import CustomButton from '../Components/Commons/custom.button/custom.button';
import Banner from '../Components/Layout/Banner/Banner';
import Contact from '../Components/Layout/Contact/Contact';

export const Homepage = () => {
  return (
    <div>
       
       <Main>
         <br></br>

       <h1 class="thin">Introduction</h1>

       <br></br>

       <Banner />

       <br></br>

       <h1 class="thin">Contact us</h1>
       <br></br>

       <Contact />

       <CustomButton>

        

       </CustomButton>

       <br></br>

      






         </Main>

        




  
        </div>
  )
};

