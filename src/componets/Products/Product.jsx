import Button from "../Button/Button"

const Product = () => {
    return (
        <div>
            <div className="wrapper flex flex-col   items-center justify-center">
                <div className="img-fluid group relative">
                    <img src="https://eshop-tcj.netlify.app/assets/p-1-orOZMLhL.jpg" alt="" className="rounded-md img-fluid w-[250px] h-[250px] object-cover" />
                    <div className="absolute top-0 start-0 group-hover:backdrop-blur-sm w-full h-full  opacity-0 group-hover:opacity-100 transition-all    flex items-center justify-center duration-300">
                        <Button 
                        text={"Add to Cart"}
                        textColor={"text-white"}
                        bgColor={"bg-primary"}
                        />
                    </div>
                </div>
                <div className="text-center">
                    <h1 className="text-2xl font-bold">Product 1</h1>
                    <h1 className="text-2xl font-bold text-orange-500">$100</h1>
                </div>
            </div>
        </div>
    )
}
export default Product