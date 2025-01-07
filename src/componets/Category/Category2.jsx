import Button from "../Button/Button"
import Image1 from "../../assets/images/Category2/gaming--Uk6eZy1.png"
import Image2 from "../../assets/images/Category2/vr-4ibBMPK9.png"
import Image3 from "../../assets/images/Category2/speaker-X9yW-39F.png"




const Category2 = () => {
    return (
        <div className="py-8">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    
            <div className="h-[320px] bg-gradient-to-br from-gray-600 to-gray-100 col-span-2 relative text-white py-10 pl-5 rounded-3xl flex items-end">
                        <div>
                            <div className="mb-4">
                                <p className="mb-[2px]  text-gray-400">Enjoy</p>
                                <p className="text-white mb-[2px] text-2xl font-semibold">With</p>
                                <p className="text-white text-4xl mb-2 font-semibold opacity-20  xl:text-5xl">Console</p>
                                <Button
                                    text="Shop Now"
                                    textColor={"text-white"}
                                    bgColor={"bg-primary"}
                                />
                            </div>
                        </div>


                        <img src={Image1} alt="headphone" className="absolute bottom-0  right-2 w-[320px]" />
                    </div>

                    <div className="h-[320px] bg-gradient-to-r from-brandGreen to-brandGreen relative text-white py-10 pl-5 rounded-3xl flex items-start">

                        <div>
                            <div className="mb-16">
                                <p className="mb-[2px]  text-gray-400">Enjoy</p>
                                <p className="text-white mb-[2px] text-2xl font-semibold">With</p>
                                <p className="text-white text-4xl mb-2 font-semibold opacity-20  xl:text-5xl">Headset</p>
                                <Button
                                    text="Shop Now"
                                    textColor={"text-brandGreen"}
                                    bgColor={"bg-white"}
                                />
                            </div>
                        </div>


                        <img src={Image2} alt="headphone" className="absolute bottom-0 w-[320px]" />
                    </div>

                    <div className="h-[320px] bg-gradient-to-r from-brandBlue to-brandBlue relative text-white py-10 pl-5 rounded-3xl flex items-start">

                        <div>
                            <div className="mb-16">
                                <p className="mb-[2px]  text-white">Enjoy</p>
                                <p className="text-white mb-[2px] text-2xl font-semibold">With</p>
                                <p className="text-white text-4xl mb-2 font-bold opacity-30  xl:text-5xl">Gadget</p>
                                <Button
                                    text="Shop Now"
                                    textColor={"text-brandBlue"}
                                    bgColor={"bg-white"}
                                />
                            </div>
                        </div>


                        <img src={Image3} alt="headphone" className="absolute bottom-0 right-0 w-[190px]" />
                    </div>


                </div>
            </div>
        </div>

    )

}

export default Category2;