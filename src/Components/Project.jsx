function Project(props) {
  return (
    <div className="lg:p-24 md:p-6 p-3 min-h-screen">
        <h2 className="text-center text-2xl font-bold py-5">Project</h2>
        {props.projectData.map((item, index) => {
                        return(
                        <div className="grid md:grid-cols-12 lg:gap-10 md:gap-16 place-items-center md:place-items-stretch " key={index}>
                            <div className="lg:col-span-4 md:col-span-5 group relative lg:w-[350px] lg:h-[250px] w-[330px] h-[200px]">
                                <img className="object-cover shadow-lg w-full h-full border-solid border-black rounded " src={item.img} alt="" />
                                <div className="absolute opacity-0 group-hover:opacity-100 inset-x-0 bottom-0 flex items-center justify-center gap-3 pb-2">
                                    <a href="" className="border border-black px-2 py-1 rounded-sm text-xs">Github</a>
                                    <a href="" className="border border-black px-2 py-1 rounded-sm text-xs">Demo</a>
                                </div>
                            </div>
                            <div className="lg:col-span-8 md:col-span-7 flex justify-between flex-col md:gap-0 gap-3">
                            <div>
                            <h3 className="text-lg ">{item.title}</h3>
                            <p className="text-sm">{item.desc}</p>
                        </div>
                        <div className="flex gap-2">
                            {item.tech.map((tech,idx) => {
                                return(
                                    <img className="w-[28px]" src={tech.logo}  key={idx}/>                                
                                )
                        })}
                        </div>
                        </div>
                  
            </div>
              )
            })
        }
    </div>
  )
}

export default Project
