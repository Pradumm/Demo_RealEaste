import React from 'react'
import { IoBedOutline } from "react-icons/io5";
import { IoCarSportOutline } from "react-icons/io5";
import { LuTriangleRight } from "react-icons/lu";
const CardList = () => {
    return (
        <div className='py-20 bg-slate-200 lg:px-20 '>
            <div className='container lg:px-10 px-2 items-center'>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div class="w-80 shadow bg-white">
                        <a href="#">
                            <img src="https://demo06.houzez.co/wp-content/uploads/2016/03/015-592x444.jpg" alt="" />

                        </a>
                        <div class="p-6">
                            <a href="#">
                                <h5 class="mb-2 text-xl text-center font-medium tracking-tight">Renovated apartment</h5>
                            </a>
                            <div className='my-2'>
                                <p class=" text-center font-normal text-lg  text-black">$540,000</p>
                                <p class="mb-4 text-center text-sm font-normal uppercase text-gray-400">APARTMENT0</p>
                            </div>
                            <div>
                                <div className='flex justify-center items-center gap-3'>
                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <IoCarSportOutline className='w-5 h-5' /> 2</span>

                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <LuTriangleRight className='w-5 h-5' /> 2005 SqFt</span>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-80 shadow bg-white">
                        <a href="#">
                            <img src="https://demo06.houzez.co/wp-content/uploads/2016/03/023-592x444.jpg" alt="" />

                        </a>
                        <div class="p-6">
                            <a href="#">
                                <h5 class="mb-2 text-xl text-center font-medium tracking-tight">Ample apartment at last floor</h5>
                            </a>
                            <div className='my-2'>
                                <p class=" text-center font-normal text-lg  text-black">$540,000</p>
                                <p class="mb-4 text-center text-sm font-normal uppercase text-gray-400">APARTMENT0</p>
                            </div>
                            <div>
                                <div className='flex justify-center items-center gap-3'>
                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <IoCarSportOutline className='w-5 h-5' /> 2</span>

                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <LuTriangleRight className='w-5 h-5' /> 2005 SqFt</span>


                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="w-80 shadow bg-white">
                        <a href="#">
                            <img src="https://demo06.houzez.co/wp-content/uploads/2016/03/015-592x444.jpg" alt="" />

                        </a>
                        <div class="p-6">
                            <a href="#">
                                <h5 class="mb-2 text-xl text-center font-medium tracking-tight">Renovated apartment</h5>
                            </a>
                            <div className='my-2'>
                                <p class=" text-center font-normal text-lg  text-black">$540,000</p>
                                <p class="mb-4 text-center text-sm font-normal uppercase text-gray-400">APARTMENT0</p>
                            </div>
                            <div>
                                <div className='flex justify-center items-center gap-3'>
                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <IoCarSportOutline className='w-5 h-5' /> 2</span>

                                    <span className='flex items-center gap-2'> <IoBedOutline className='w-5 h-5' /> 2</span>
                                    <span className='flex items-center gap-2'> <LuTriangleRight className='w-5 h-5' /> 2005 SqFt</span>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default CardList