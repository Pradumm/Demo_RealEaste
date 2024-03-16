import React from 'react'
import "./Homebanner.css"
const Homebanner = () => {
    return (
        <>
            <section className='w-full h-[350px] sm:h-screen relative'>
                <video autoPlay muted loop id="myVideo" className='w-full h-full object-cover'>
                    {/* <source src="https://download-video.akamaized.net/v3-1/playback/4cd93360-4fea-475d-8453-3aee7c998968/84ecdf82-de2d1533?__token__=st=1710611225~exp=1710625625~acl=%2Fv3-1%2Fplayback%2F4cd93360-4fea-475d-8453-3aee7c998968%2F84ecdf82-de2d1533%2A~hmac=70c9c02286b96a2f08bfe8e46d54516545db4dfa51e28ffa1a279085d59cffb7&r=dXM%3D" type="video/mp4" /> */}
                </video>
                <div className=' bg-black bg-opacity-30 z-50  text-center absolute inset-0 flex items-center justify-center'>
                    <div className=" max-w-4xl mx-auto px-4 lg:px-10">
                        <div>
                            <p className="text-white text-center text-3xl sm:text-6xl font-prata font-normal sm:leading-snug mb-4">FINDING YOU A PLACE TO FEEL CLOSER TO HOME.</p>
                            <p className='text-white text-center text-xl font-prata font-normal sm:text-2xl'>SERVING THE LOWER MAINLAND OVER 12 YEARS</p>
                        </div>
                    </div>
                </div>
            </section>





        </>
    )
}

export default Homebanner