import Image from "next/image";

export default function Product () {
    return (
        
        <div className="w-full sm:h-full md:h-[300px] flex justify-center items-center mt-10 mb-20 ">
            <div className="sm:w-full md:w-full lg:w-[80%] h-full">
                {/* Top Side*/}
                <div className="sm:pl-5 md:pl-0">
                    <span className="border-l-8 border-red-500 text-red-500 mb-5 font-bold">This Month</span>
                   <div className="flex justify-between">
                   <h2 className="text-4xl font-bold mt-5">Best Selling Products</h2>
                   <button className=" sm:hidden md:block px-5 bg-red-500  rounded-md text-white">View All</button>
                   </div>
                </div>
                {/*Products*/}
                {/*Container Boxes*/}
                <div className="flex sm:flex-col md:flex-row sm:items-center md: justify-between mt-7 sm:gap-y-5 md:gap-y-0" >
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center" >
                            <Image src={"/images/products pics/tshirt.png"} width={200} height={100} alt="tshirt"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className=" font-bold pt-3">GIORDANO BLUE TSHIRT</span>
                            <span className="font-bold">$50</span>
                        </div>

                    </div>
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/shoes.png"} width={200} height={150} alt="shoes"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3">MEN FORMAL SHOES </span>
                            <span className="font-bold">$100</span>
                        </div>

                    </div>

                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/richard mille.png"} width={150} height={150} alt="richard mille"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3">RICHARD MILLE DIAMOND WATCH</span>
                            <span className="font-bold">$300</span>
                        </div>
                    </div>
                    <div>
                        <div className="w-[210px] h-[190px] bg-gray-200 flex justify-center items-center">
                            <Image src={"/images/products pics/macbook.png"} width={300} height={250} alt="macbook"></Image>
                        </div>
                        {/*TITLE DIV*/}
                        <div className="flex flex-col">
                            <span className="font font-bold pt-3">MACBOOK AIR 18 FOLDABLE</span>
                            <span className="font-bold">$200</span>
                        </div>
                    </div>
                </div>
                {/*Button For Small Screen*/}
                <button className=" sm:block md:hidden py-2 px-5 bg-red-500 sm:ml-5 mt-3 rounded-md text-white">View All</button>

            </div>
        </div>
       
        
       
    )
}