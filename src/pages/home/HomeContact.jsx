import React from 'react'
import seller from "../../assets/seller2.avif"
import seller2 from "../../assets/sellerBackground.avif"
const HomeContact = () => {
    return (
        <>
            <div className='bg-black text-white py-20 mb-10'>

                <div className="">

                    <h1 className='text:2xl text-center lg:text-3xl uppercase font-bold mb-5'>Buyers & Sellers</h1>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-0'>
                        <div className='flex justify-start items-center  lg:pl-20 pr-8'>
                            <div className='px-4 lg:px-0'>
                                <h2 className='text-2xl font-semibold mb-4'>Thinking of Buying?</h2>
                                <p className='text-lg mb-4'>A new home is likely to be the most important purchase you ever make. Learn about the first steps you need to take on your buying journey.</p>
                                <p className='text-lg mb-4'>Read our Buyer’s Guide for help getting started, or use our mortgage calculator to find a mortgage that suits your needs.</p>

                                <div className='inline-flex flex-col space-y-2'>
                                    <button className='inline-block  hover:text-white bg-[#C5B351] uppercase   px-12 py-3.5'>Buyer's Guide</button>
                                    <button className=' hover:text-white  border  border-[#C5B351] uppercase  px-12 py-3.5'>Mortgage Calculator</button>

                                </div>
                            </div>
                        </div>
                        <div className=" bg-cover bg-center h-96" style={{ backgroundImage: `url(${seller})` }}>


                        </div>
                    </div>

                    <div className='grid grid-cols-1 lg:grid-cols-2 mt-4 lg:mt-0 gap-4 lg:gap-0'>
                        <div className='flex justify-start items-center  lg:pl-20 pr-8 order-1 lg:order-2'>
                            <div className='px-4 lg:px-0'>
                                <h2 className='text-2xl font-semibold mb-4'>Thinking of Selling?</h2>
                                <p className='text-lg mb-4'>A new home is likely to be the most important purchase you ever make. Learn about the first steps you need to take on your buying journey.</p>
                                <p className='text-lg mb-4'> Putting your home on the market takes careful planning, plus the help of a professional. Here’s how to get started. Check out our Seller’s Guide to learn about taking first steps to selling your home. Then, use our home evaluation tool to learn your property’s market value.</p>
                                <div className='inline-flex flex-col space-y-2'>
                                    <button className='inline-block  hover:text-white border border-[#C5B351] uppercase   px-12 py-3.5'>Seller's Guide</button>
                                    <button className=' hover:text-white  bg-[#C5B351] uppercase  px-12 py-3.5'>Home Evalution</button>

                                </div>
                            </div>
                        </div>
                        <div className=" bg-cover bg-center h-96 order-2 lg:order-1 " style={{ backgroundImage: `url(${seller2})` }}>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default HomeContact