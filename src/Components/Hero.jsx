import '../styles/main.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


function Hero() {
  return (
    <div className='bg-secondary grid grid-cols-1 md:grid-cols-12 place-items-center overflow-hidden min-h-screen'>
            <div className='md:col-span-7 md:ps-10 md:py-0 md:pt-10 '>
                    <h3 className='sm:text-lg md:text-xl'>hi, saya</h3>
                    <h1 className='text-xl sm:text-2xl md:text-4xl '>Muhammad Imam Arif Darmawan</h1>
                    <h2 className='sm:text-xl md:text-2xl'>Junior Web Developer | </h2>
                <div className='md:pt-12'>
                    <a className='text-xs border rounded-md px-2 py-1 mt-5 md:text-sm' href='https://drive.google.com/file/d/1x-L9SErHy7s5FXZfKNrIli1GWW4U9vbp/view?usp=sharing'  target='_blank'>Unduh CV</a>
                </div>
            </div>
        <div className='md:col-span-5 overflow-hidden -mt-36 md:-mt-0'>
            <DotLottieReact
            src="https://lottie.host/8af1d608-3a03-4e1d-9850-3ea7c23d0b0a/iNBL0q6y7u.lottie"
            loop
            autoplay
            className='w-[500px] md:w-[800px]'
            />
        </div>
    </div>
  )
}

export default Hero


