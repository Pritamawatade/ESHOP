
const Heading = ({text}) => {
    return (
        <div className="py-8">
            <div className="container">
                <h3 className="text-4xl flex items- justify-center font-bold">{text}</h3>
                <h3 className="text-sm text-gray-500 flex items- justify-center ">Explore our products</h3>
                
            </div>
        </div>
    )
}

export default Heading;