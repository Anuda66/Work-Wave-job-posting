import React from 'react'

function Footer() {
  return (
    <div className='mx-8 md:mx-10'>
        <hr  className='mt-40'/>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            <div>
                {/*lefy section------------*/}
                
                <h2 className='pb-5 text-2xl font-semibold text-purple-800'>Work Wave</h2>
                <p className='w-full leading-6 text-gray-600 md:w-2/3'>
                At Work-Wave, our mission is to bridge the gap between job seekers and employers by offering an intuitive and efficient platform for job searching and recruitment. Whether you're a fresh graduate seeking your first role or a company looking to hire top talent quickly.
                </p>
            </div>

            <div>
                {/*midle section------------*/}
                <h2 className='mb-5 text-xl font-medium'>COMPANY</h2>
                <ul className='flex flex-col gap-2 text-gray-600 '>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>

            <div>
                {/*right section------------*/}
                <h2 className='mb-5 text-xl font-medium'>GET IN TOUCH</h2>
                <ul  className='flex flex-col gap-2 text-gray-600 '>
                    <li>+94712861997</li>
                    <li>anudaransara@gmail.com</li>
                </ul>
            </div>
        </div>
        <div>
            <p className='py-5 text-sm text-center '>Copyright 2025 @ anudaransara - All Right Reserved.</p>
        </div>
    </div>
    
  )
}

export default Footer