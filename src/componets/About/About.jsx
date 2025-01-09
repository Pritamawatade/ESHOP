import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <div className="relative bg-gray-900 p-4">
     <div className="relative bg-gray-900">
          <Spline scene="https://prod.spline.design/IIrdMFBATCBzkb4G/scene.splinecode" />
    
          <h1 className="text-7xl absolute top-1/2  font-bold text-center right-16 uppercase text-white">
            Fastest growing company in the{" "}
            <span className="text-blue-600 uppercase font-bold text-9xl">
              world
            </span>
          </h1>
     </div>
     <div className="p-8 bg-black rounded-md">
        <div>
            <h1 className="text-4xl text-white font-bold uppercase">
                Who we are <span className="text-6xl text-red-600">?</span>
        </h1>

        </div>

            <div className="flex items-center justify-center gap-6">
                <div className="text w-[700px]">
                    <h1 className="text-white text-2xl">We sell electonics devices that has the potencial to change the tech world by the storm.
                        you can buy our products only on our app store or this website please consider us because we will never lay down our customers
                        Our Products are the most trusted products around the world
                    </h1>
                </div>
                <Spline
                className="w-full h-full min-h-[350px]"
                scene="https://prod.spline.design/Pt0CIaQihsnff2UN/scene.splinecode" />
            </div>

            <div className="flex items-center justify-center gap-6 my-14">
            
                <Spline className="min-h-[300px]" scene="https://prod.spline.design/bUjpUBmfZugFu-LY/scene.splinecode" />
                <div className="text w-[700px]">
                    <h1 className="text-white text-2xl ">Smartwateches are our one of the best and highest selling products we have a low cose pricing and high valur driven ecosystem that sells top notch high quality tech products that have the quality to change the users life by extremse mean. we recommend you to try out our products and i sure it will change your life. ut fugiat aperiam minima sunt magni, debitis ab qui beatae. Quod deserunt impedit minus sunt sit soluta a temporibus, in itaque quo, aliquam quis reprehenderit distinctio nemo delectus dolorum ipsa quos, vero optio eum quasi dolorem facilis? Assumenda reiciendis deserunt at odit odio autem, dolorem labore eos maxime qui aliquam culpa maiores minus nam numquam consectetur consequatur magnam possimus voluptates?
                    </h1>
                </div>
            </div>
     </div>
    </div>
  );
};

export default About;
