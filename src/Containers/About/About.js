import React from 'react'
import CustomButton from '../../Components/Commons/custom.button/custom.button';
import Main from '../../Components/Layout/main';
import './About.css';

export default function About() {
  return (
    <div>

        <Main>

        <h1 class="thin">About Us</h1>
        <br></br>

        <p class="center1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

    <br></br>

    <div class="container-features">
    <div class="row">
    <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team3.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Akbar Mirza</h2>  
        <p>CEO & Founder</p>

        <CustomButton></CustomButton>

        

        
        </div>
        

        <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team2.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Ali Ahmed</h2>  
        <p>COO</p>

        <CustomButton></CustomButton>

        

        
        </div>

        <div class="col-lg-4 col-md-4 col-sm-6">
        <img src="./Images/team4.jpg" className='img-fluid' alt="Teampics" width={400} />
        <h2>Shahid Khan</h2>  
        <p>Designer</p>

        <CustomButton></CustomButton>

        
        </div>


        






        


        </div>
        

    </div>
   

    <br></br>



        </Main>

        <br></br>

       







    </div>
  )
}
