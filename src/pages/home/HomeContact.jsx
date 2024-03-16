import React from 'react'
import seller from "../../assets/seller2.avif"
import seller2 from "../../assets/sellerBackground.avif"
const HomeContact = () => {
    return (
        <>
            <div className='bg-white  text-black py-6 lg:py-20 '>

                <div className="">

                    <h1 className='text-3xl lg:text-5xl font-[400]  text-[#C5B351] text-center mb-16'>Buyers & Sellers</h1>
                    <div className='container px-4  lg:px-10 mx-auto '>
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0'>
                            <div className='flex justify-start items-center  lg:pr-8'>
                                <div className='px-4 lg:px-0'>
                                    <h2 className='text-2xl font-semibold mb-4'>Thinking of Buying?</h2>
                                    <p className='text-lg mb-4'>A new home is likely to be the most important purchase you ever make. Learn about the first steps you need to take on your buying journey.</p>
                                    <p className='text-lg mb-4'>Read our Buyer’s Guide for help getting started, or use our mortgage calculator to find a mortgage that suits your needs.</p>

                                    <div className='inline-flex  flex-col sm:flex-row space-x-0 space-y-2 sm:space-y-0 sm:space-x-3'>
                                        <button className='inline-block  hover:text-white bg-[#C5B351] uppercase  hover:bg-black  px-4 py-2 lg:px-12 lg:py-3.5'>Buyer's Guide</button>
                                        <button className=' hover:text-white  border hover:bg-[#C5B351]  border-[#C5B351] uppercase  px-4 py-2  lg:px-12 lg:py-3.5'>Mortgage Calculator</button>

                                    </div>
                                </div>
                            </div>
                            <div className=" bg-cover bg-center h-96" style={{ backgroundImage: `url(${seller})` }}>


                            </div>
                        </div>

                        <div className=' grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-0 gap-4 lg:gap-0'>
                            <div className='flex justify-start items-center  lg:pl-20 order-1 lg:order-2'>
                                <div className='px-4 lg:px-0'>
                                    <h2 className='text-2xl font-semibold my-4'>Thinking of Selling?</h2>
                                    <p className='text-lg mb-4'>A new home is likely to be the most important purchase you ever make. Learn about the first steps you need to take on your buying journey.</p>
                                    <p className='text-lg mb-4'> Putting your home on the market takes careful planning, plus the help of a professional. Here’s how to get started. Check out our Seller’s Guide to learn about taking first steps to selling your home. Then, use our home evaluation tool to learn your property’s market value.</p>
                                    <div className='inline-flex flex-col sm:flex-row space-x-0 space-y-2 sm:space-y-0 sm:space-x-3'>
                                        <button className='inline-block  hover:text-white border hover:bg-[#C5B351]  border-[#C5B351] uppercase px-4 py-2 lg:px-12 lg:py-3.5'>Seller's Guide</button>
                                        <button className=' hover:text-white  bg-[#C5B351] hover:bg-black  uppercase px-4 py-2 lg:px-12 lg:py-3.5 '>Home Evalution</button>

                                    </div>
                                </div>
                            </div>
                            <div className=" bg-cover bg-center h-96 order-2 lg:order-1 " style={{ backgroundImage: `url(${seller2})` }}>


                            </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
            )
}

            export default HomeContact