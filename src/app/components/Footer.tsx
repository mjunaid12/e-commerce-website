export default function Footer () {
    return (
        <div className=" sm:py-5 md:py-0 bg-black sm:pl-5 md:pl-0 sm:gap-y-5 md:gap-y-0 flex sm:flex-col md:flex-row text-white justify-evenly sm:items-start md:items-center sm:h-full md:h-[350px]">
            <div>
                <h1 className="text-2xl font-bold">Account</h1>
                <ul className="mt-4">
                    <li>My Account</li>
                    <li>login/Register</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">HELP</h1>
                <ul className="mt-4">
                    <li>Customer Support</li>
                    <li>Privacy Policy</li>
                    <li>Terms & Conditions</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">ABOUT US</h1>
                <ul className="mt-4">
                    <li>Our Producers</li>
                    <li>Sitemap</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div>
                <h1 className="text-2xl font-bold">Extras</h1>
                <ul className="mt-4">
                    <li>Tell a Friend</li>
                    <li>Gift Vouchers</li>
                    <li>Special Promotions</li>
                </ul>
            </div>



            
        </div>
    )
}


