import React from 'react'
import Header from "../../components/header/Header"
import Homebanner from '../../components/banner/Homebanner'
import Footer from '../../components/footer/Footer'
import Testimonial from '../../components/testimonial/Testimonial'
import HomeContact from './HomeContact'
import About from './About'
import CardList from './CardList'

const Home = () => {
    return (
        <>

            <Header />
            <Homebanner />

            {/* <div className='effects-container'>
                <div className="container">
                    
                    <div className="outer-container effect-v4" style={{ "--custom-effects-color": "rgba(0,0,0,1)" }}>
                        <a href="ocean-park-crescent-beach.html" className="has-link"></a>
                        <img src="https://lenaxu.ca/_media/quick-uploads/ocean%20park.jpeg" alt="" srcSet="" sizes="(min-width: 500px) 50vw,(min-width: 800px) 25vw, 100vw" data-editable="box.boxImage" loading="lazy" />
                        <div className="content content-default-align">
                            <div>
                                <h3 className="title effects-title">Ocean Park/ Crescent Beach</h3>
                                <div className="effects-text">
                                    <p>Browse homes and properties in Ocean Park/ Crescent Beach</p>
                                    <div className="button-container small" style={{ "--fl-button-label-color": "rgba(255,255,255,1)" }}>
                                        <div className="button-list align-">
                                            <a href="ocean-park-crescent-beach.html" className="button">
                                                <svg className="fluid-button-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
                                                <label>VIEW LISTINGS</label>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    <div className="outer-container effect-v4" style={{ "--custom-effects-color": "rgba(0,0,0,1)" }}>
                        <a href="elgin-chantrell.html" className="has-link"></a>
                        <img src="https://lenaxu.ca/_media/quick-uploads/ocean%20park.jpeg" alt="" srcSet="" sizes="(min-width: 500px) 50vw,(min-width: 800px) 25vw, 100vw" data-editable="box.boxImage" loading="lazy" />
                        <div className="content content-default-align">
                            <div>
                                <h3 className="title effects-title">Elgin Chantrell</h3>
                                <div className="effects-text">
                                    <p>Browse homes &amp; properties in Elgin Chantrell</p>
                                    <div className="button-container small" style={{ "--fl-button-label-color": "rgba(255,255,255,1)" }}>
                                        <div className="button-list align-">
                                            <a href="elgin-chantrell.html" className="button">
                                                <svg className="fluid-button-image" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg>
                                                <label>VIEW LISTINGS</label>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
                </div>
            </div> */}

            <About />
            <HomeContact />
             
            <CardList/>
            <Testimonial />
          
            <Footer />
        </>
    )
}

export default Home