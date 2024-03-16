import React from 'react'
import '../Css/Landing.css'
import { Link } from 'react-router-dom'
import LoginIcon from '@mui/icons-material/Login';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';

const Landing = () => {
  return (
    <>
        <div className='main'>
            <div className='page-1'>
                <img src='https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png' className='landing-img'/>
               <div className='nav'>
                    <Link to="/AddRestro"className='nav-link'>Add restaurant</Link>
                    <Link to="/login" className='nav-link'>Login </Link>
                    <LoginIcon className='login-icon'/> 
                    <Link to="/sign_up" className='nav-link'>Sign up</Link>
               </div>
               <div className='contents-wrapper'>
                <img src='https://b.zmtcdn.com/web_assets/8313a97515fcb0447d2d77c276532a511583262271.png' alt='logo' className='logo-img'/>
                <div className='description'>
                <h2 className='des'>Discover the best food & drinks in Bhopal</h2>
                </div>
               </div>
               <div className='input-selector'>
               <LocationOnIcon className='location-icon'/>
                <select className='input-options' >
                
                  <option>Bhopal</option>
                  <option>Agra</option>
                  <option>Indore</option>
                  <option>delhi</option>
                </select>
                <SearchIcon className='search-icon'/>
                <input  type='text' placeholder='Search for restorent, cuisine or a dish' className='input-city'/>
               </div>

            </div>


              <div className='page-2'>
                  <div className='wrapper-all-collections'>
                    <div className='available-order-option'>

                        <div className='option-1'>
                          <img alt='img' className='order-online-img' src='https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*'/>
                          <div className='option-1-content'>
                            <p className='option-1-orderType'>Order Online</p>
                            <p className='option-1-description'>Stay home and order to your doorstep</p>
                          </div>
                        </div>

                        <div className='option-2'>
                          <img alt='img' className='order-dining-img' src='https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*'/>
                          <div className='option-2-content'>
                            <p className='option-2-orderType'>Dining</p>
                            <p className='option-2-description'>View the city's favourite dining venues</p>
                          </div>
                        </div>

                        <div className='option-3'>
                          <img alt='img' className='order-club-img' src="https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&amp;fit=around|402:360&amp;crop=402:360;*,*"/>
                          <div className='option-3-content'>
                            <p className='option-3-orderType'>Nightlife and Clubs</p>
                            <p className='option-3-description'>Explore the city's top nightlife outlets</p>
                          </div>
                        </div>

                    </div>

                    <div className='available-collections'>
                          <div className='Collection-content'>
                            <h1 id='collection'>Collections</h1>
                            <h4 id='collection-description'>Explore curated lists of top restaurants, cafes, pubs, and bars in Agra, based on trends</h4>
                          </div>
                          <div className='show-collections'>

                              <div className='collection-1'>
                                  <img alt='img' className='collection-1-img' src='https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp'/>
                                
                                  <p className='collection-1-orderType'>6 Taj View Restaurants</p>
                                  <p className='collection-1-description'>5 places</p>
                                  
                              </div>

                              <div className='collection-1'>
                                  <img alt='img' className='collection-1-img' src='https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png?output-format=webp'/>
                                
                                  <p className='collection-1-orderType'>14 Local Favourite Places</p>
                                  <p className='collection-1-description'>14 places</p>
                                  
                              </div>

                              <div className='collection-1'>
                                  <img alt='img' className='collection-1-img' src='https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg?output-format=webp'/>
                                
                                  <p className='collection-1-orderType'>18 Best Luxury Dining Places</p>
                                  <p className='collection-1-description'>18 places</p>
                                  
                              </div>

                              <div className='collection-1'>
                                  <img alt='img' className='collection-1-img' src="https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png?output-format=webp" />
                                
                                  <p className='collection-1-orderType'>6 Best Mughlai Places</p>
                                  <p className='collection-1-description'>6 places</p>
                                  
                              </div>

                          </div>
                        </div>


                        <div className='page-3-wrapper'>  
                        <div className='page-3'>

                            <div className='papular-location-in-city'>
                                <h5 id='heading-of-location'>Popular localities in and around Bhopal</h5>
                            </div>

                            <div className='popular-locations'>
                                <div className=''></div>
                            </div>

                        </div>
                        </div> 

                  </div>
              </div>


        </div>
    </>
  )
}

export default Landing



// <img alt="6 Taj View Restaurants" src="https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png?output-format=webp" loading="lazy" class="sc-s1isp7-5 fyZwWD">


// <img alt="14 Local Favourite Places" src="https://b.zmtcdn.com/data/collections/c3e8fb46e352ebb9d72c4f0cb5d27f39_1686042567.png?output-format=webp" loading="lazy" class="sc-s1isp7-5 fyZwWD">

// <img alt="18 Best Luxury Dining Places" src="https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg?output-format=webp" loading="lazy" class="sc-s1isp7-5 fyZwWD">

// <img alt="6 Best Mughlai Places" src="https://b.zmtcdn.com/data/collections/a33a75bb9ce00650cde613173fe9d2ee_1684740006.png?output-format=webp" loading="lazy" class="sc-s1isp7-5 fyZwWD">