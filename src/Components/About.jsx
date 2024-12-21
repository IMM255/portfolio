import profile from "../assets/img/profile.jpg"
import html from "../assets/img/html5.svg"
import css from  "../assets/img/css3.svg"
import javascript from "../assets/img/javascript.svg"
import figma from "../assets/img/figma.svg"
import bootstrap from "../assets/img/bootstrap.svg"
import tailwind from "../assets/img/tailwind.svg"
import php from "../assets/img/php.svg"
import laravel from "../assets/img/laravel.svg"
import react from "../assets/img/react.svg"

function About() {
  return (
    <div className="bg-primary grid md:grid-cols-12 lg:gap-5 gap-5 grid-cols-1 min-h-screen p-3 md:p-5 lg:p-24">
        <img className="md:col-span-5 lg:col-span-4 md:min-w-[280px] rounded-md shadow-[16px_-16px_2px_0px_rgba(245,_245,_245,_1)]  w-[300px] flex items-center m-auto " src={profile} alt="" />
        <div className="md:col-span-7 lg:col-span-8 flex flex-col justify-between md:h-[500px] lg:h-[420px]">
            <div className="">
            <h2 className="lg:text-2xl text-xl text-center md:mt-32 lg:mt-6 pb-2
            ">About Me</h2>
            <p className="lg:text-lg text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quia quis obcaecati expedita voluptas, aspernatur quasi consequuntur cupiditate fuga in temporibus consequatur aliquam et possimus voluptate reiciendis sunt corrupti molestias aut officiis repellat, vitae, ratione totam. Sed ipsa fuga neque?
            </p>
            </div>
            <div className="">
                <h2 className="text-sm font-bold">Teknologi</h2>
                <div className="flex gap-2 pt-2">
                    <img className="w-[28px]" src={html} alt="" />
                    <img className="w-[28px]" src={css} alt="" />
                    <img className="w-[28px]" src={javascript} alt="" />
                    <img className="w-[28px]" src={figma} alt="" />
                    <img className="w-[28px]" src={bootstrap} alt="" />
                    <img className="w-[28px]" src={tailwind} alt="" />
                    <img className="w-[28px]" src={php} alt="" />
                    <img className="w-[28px]" src={laravel} alt="" />
                    <img className="w-[28px]" src={react} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
