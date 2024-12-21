import laravel from "../assets/img/laravel.svg"
function Project() {
  return (
    <div className="lg:p-24 md:p-6 p-3 min-h-screen">
        <h2 className="text-center text-2xl font-bold py-5">Project</h2>
        <div className="grid md:grid-cols-12 lg:gap-10 md:gap-16 place-items-center md:place-items-stretch ">
            <div className="lg:col-span-4 md:col-span-5 group relative lg:w-[350px] lg:h-[250px] w-[300px] h-[200px]">
                <img className="border w-full h-full border-solid border-black rounded " src={laravel} alt="" />
                <div className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 flex items-center justify-center gap-3 pb-2">
                    <a href="" className="border border-black px-2 py-1 rounded-sm text-xs">Github</a>
                    <a href="" className="border border-black px-2 py-1 rounded-sm text-xs">Demo</a>
                </div>
            </div>
            <div className="lg:col-span-8 md:col-span-7 flex justify-between flex-col md:gap-0 gap-3">
                <div>
                    <h3 className="text-lg ">Nama Proyek</h3>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, ipsum obcaecati. Ipsa repudiandae nostrum minima!</p>
                </div>
                <div className="flex gap-2">
                    <img className="w-[28px]" src={laravel} alt="" />
                    <img className="w-[28px]" src={laravel} alt="" />
                    <img className="w-[28px]" src={laravel} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project
