import React from 'react'
import Header from "../../components/header/Header"
import Homebanner from '../../components/banner/Homebanner'
import Footer from '../../components/footer/Footer'
import Testimonial from '../../components/testimonial/Testimonial'
import HomeContact from './HomeContact'
import About from './About'
import CardList from './CardList'
import Homeinfo from './Homeinfo'

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
            <section className="">
                <div className="container px-5 py-6 lg:py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-5 lg:mb-20">
                        <h1 className=" text-3xl lg:text-5xl font-[400] mb-4 text-[#C5B351]  ">Passionate About Being Different</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Sam stands out to all – clients, developers, vendors, and industry professionals alike – for her exceptional talents, innovative spirit, and unwavering dedication in guiding buyers and sellers from San Jose.  Backed by her extensive network, she consistently exceeds expectations.</p>
                    </div>
                    <div className="flex flex-wrap lg:flex-nowrap gap-4 md:gap-0  ">
                        <div className=" sm:p-4">
                            <div className="flex relative w-full   md:h-96 rounded-lg ">
                                <img alt="gallery"  data-aos="flip-left" className="absolute  rounded-xl inset-0 w-full h-full object-cover object-center" src="https://sanjose.wpresidence.net/wp-content/uploads/2024/01/image-box-800.webp" />
                                <div className=" flex justify-center items-center  px-8 py-10 relative rounded-xl  z-10 w-full border-4 border-gray-200 bg-black text-white opacity-0 hover:opacity-100">
                                    <div>
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="sm:p-4">
                            <div className="flex relative w-full  md:h-96 rounded-lg ">
                                <img alt="gallery"  data-aos="flip-left" className="absolute  rounded-xl inset-0 w-full h-full object-cover object-center" src="https://sanjose.wpresidence.net/wp-content/uploads/2024/01/image-box-800.webp" />
                                <div className=" flex justify-center items-center px-8 py-10 relative rounded-xl  z-10 w-full border-4 border-gray-200 bg-black text-white opacity-0 hover:opacity-100">
                                    <div>
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sm:p-4">
                            <div className="flex relative w-full    md:h-96 rounded-lg ">
                                <img alt="gallery" data-aos="flip-left" className="absolute  rounded-xl inset-0 w-full h-full object-cover object-center" src="https://sanjose.wpresidence.net/wp-content/uploads/2024/01/image-box-800.webp" />
                                <div className=" flex justify-center items-center  px-8 py-10 relative rounded-xl  z-10 w-full border-4 border-gray-200 bg-black text-white opacity-0 hover:opacity-100">
                                    <div>
                                        <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                                        <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <div className='mt-16'>
                <About />
            </div>
            <div className='mt-3 lg:mt-16'>
                <CardList />
            </div>
            <div className='mt-3 '>
                <HomeContact />
            </div>


            <div className='mt-16'>
                <Testimonial />
            </div>
            <div className='mt-16'>
                <Homeinfo />
            </div>
            <Footer />
        </>
    )
}

export default Home