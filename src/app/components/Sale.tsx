import Image from "next/image";

export default function Sale() {
    return (
        <main>
        <div className="w-full sm:h-full md:h-[300px] flex justify-center  items-center mt-10 mb-10 ">
            <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                {/* Top Side*/}
                <div className="sm:pl-5 md:pl-0">
                    <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">Today&apos;s</span>
                    <h2 className="text-4xl font-bold mt-5 ml-1">Flash Sales</h2>
                </div>
                {/*Products*/}
                {/*Container Boxes*/}
                <div className="flex sm:flex-col md:flex-row sm:items-center justify-between mt-7 sm:gap-y-5 md:gap-y-0" >
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center" >
                            <Image src={"/images/products pics/Iwatch.png"} width={170} height={150} alt="Iwatch"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className=" font-bold pt-3">NIKE IWATCH SPORTS</span>
                            <span className="font-bold">$120</span>
                        </div>

                    </div>
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/airpods4.png"} width={170} height={150} alt="airpods4"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3">APPLE AIRPODS4 NEW</span>
                            <span className="font-bold">$400</span>
                        </div>

                    </div>

                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/lvshearlingblouson.png"} width={170} height={150} alt="lvshearlingblouson"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3"> LV SHEARLINGBLOUSON JACKET</span>
                            <span className="font-bold">$400</span>
                        </div>
                    </div>
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/perfume ombre.png"} width={170} height={150} alt="perfume ombre"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3">LV OMBRE-NOMADE PERFUME</span>
                            <span className="font-bold">$400</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <button className="py-2 px-3 bg-red-500 sm:ml-5 md:ml-[700px] rounded-md mt-8 text-white">View All Products</button>
        
        </main>
    )
}