import Button from "../Button/Button"

const Banner = ({data}) =>{
    return(
        <div className="py-8 flex items-center justify-center min-h-[500px]">
            <div className="container">
                <div style={{"backgroundColor": `${data.bgColor}`}} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">

                    <div className="p-6 sm:p-8">
                        <p data-aos="slide-right" className="text-sm mb-2" >{data.discount}</p>
                        <h1 data-aos="zoom-out" className="font-bold text-5xl lg:text-8xl uppercase">{data.title}</h1>
                        <p data-aos="fade-left" className="text-sm mb-2" >{data.date}</p>

                    </div>
                    
                    <div 
                    data-aos="zoom-in"
                    data-aos-offset="200"

                    className="h-full flex items-center justify-center">
                        <img src={data.Image} alt="headphone" className="mx-auto w-[250px] sm:w-[300px] lg:w-[340px] scale-125 object-cover drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)]  z-40" />
                    </div>

                    <div data-aos="fade-up" data-aos-offset="200" className="p-6 sm:p-8">
                        <h3 
                        className="text-white font-semibold text-xl sm:text-2xl mb-2">{data.title2}</h3>
                        <h1 
                        className="font-bold text-5xl lg:text-6xl uppercase">{data.title3}</h1>
                        <p 
                        className="mb-3 mt-2 text-lg">{data.title4}</p>
                        <Button     
                       
                        text="Shop Now"
                        textColor={"text-primary"}
                        bgColor={"bg-white"}
                        />
                    </div>


                    
                </div>
            </div>

        </div>
    )
}

export default Banner