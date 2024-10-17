/* eslint-disable @typescript-eslint/no-unused-vars */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';


export default function Hero() {
    return (
        <div className='w-full sm:h-full md:h-full lg:h-[320px]  flex justify-center mt-8'>
            <div className=' bg-black h-full sm:w-full md:w-full lg:w-[80%] flex justify-between'>
                {/*Left Side*/}
                <div className='ml-8 sm:mt-4  md:mt-16 text-white'>
                    <div className='flex justify-center items-center'>
                        <span> <FontAwesomeIcon icon={faApple} className='w-[30px]' /></span>
                        <span className='ml-4'>iPhone 16 Series</span>
                    </div>

                    <div className='w-[200px]'>
                        <h1 className='text-3xl font-sans font-bold ml-5 mt-4'>Up to 10% off Voucher</h1>
                        <button className='font-bold underline underline-offset-8 ml-5 mt-5'>Shop Now</button>
                    </div>
                </div>

                {/*Right Side*/}
                <div>
                    <Image src={"/images/hero.jpg"} width={500} height={450} alt='Heroimage' className='mr-5 mt-7'>
                    </Image>
                </div>
            </div>
        </div>
    )
}