import React from 'react'

const About = () => {
    return (
        <>
            <div className=''>
                <div className="">

                    <div className='flex flex-wrap'>
                        <div className='w-full lg:w-1/2 lg:pr-20'>
                            <img
                                className='w-full h-full lg:h-[700px] object-fill object-center'
                                src="./asset/about-resizeimage.jpg" alt="" />
                        </div>

                        <div className='w-full lg:w-1/2 py-5 px-4'>
                            <p className='text-xl italic mb-4'>About</p>
                            <h1 className='text-3xl lg:text-5xl font-[400] text-[#C5B351]  mb-5'>RAV SANDHU, YOUR LOCAL REALTOR</h1>

                            <div className='lg:pr-6'>
                                <p className='text-lg mb-4'>Born and raised in Mission, BC, Rav brings local passion and intimate Fraser Valley knowledge to her role as a real estate professional. Focused on the Fraser Valley, she's dedicated to serving her community, building relationships, and providing top-notch service to her clients. </p>

                                <p className='text-lg mb-4'>Born and raised in Mission, BC, Rav brings local passion and intimate Fraser Valley knowledge to her role as a real estate professional. Focused on the Fraser Valley, she's dedicated to serving her community, building relationships, and providing top-notch service to her clients. </p>

                                <p className='text-lg mb-4'>Born and raised in Mission, BC, Rav brings local passion and intimate Fraser Valley knowledge to her role as a real estate professional. Focused on the Fraser Valley, she's dedicated to serving her community, building relationships, and providing top-notch service to her clients. </p>

                                <div className=' flex gap-3 mt-2 '>
                                    <button className='inline-block  hover:text-[#C5B351] border border-[#C5B351] uppercase  px-4 py-1.5 sm:px-8 sm:py-3'>About me</button>
                                    <button className='hover:text-white transition duration-150 ease-out hover:ease-in  bg-[#C5B351] hover:bg-black uppercase px-4 py-1.5 sm:px-8 sm:py-3'>Let's Chat</button>

                                </div>



                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}

export default About