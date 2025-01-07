
import { FaCarSide, FaWallet } from 'react-icons/fa'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { MdHeadsetMic } from 'react-icons/md'

const Service = () => {


    const services = [
        {
            id: 1,
            icon: <FaCarSide className='text-4xl text-primary md:text-5xl' />,
            title: "Free Shipping",
            desc: "From all orders over $30",
        },
        {
            id: 2,
            icon: <BsFillCheckCircleFill className='text-4xl text-primary md:text-5xl' />,
            title: "Safe Money",
            desc: "#100% secure payment",
        },
        {
            id: 3,
            icon: <FaWallet className='text-4xl text-primary md:text-5xl' />,
            title: "Money Back",
            desc: "30 days money back guarantee",
        },
        {
            id: 4,
            icon: <MdHeadsetMic className='text-4xl text-primary md:text-5xl' />,
            title: "Customer Support",
            desc: "24/7 customer support",
        },
    ]
    return (
        <div>

            <div className="py-8">
                <div className="container">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {services.map(service => (
                            <div key={service.id} className="flex items-center gap-4">
                                <div className="bg-gray-50 dark:bg-gray-800 dark:text-white p-4 rounded-full">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold">{service.title}</h3>
                                    <p className="text-gray-500 dark:text-gray-400">{service.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Service;