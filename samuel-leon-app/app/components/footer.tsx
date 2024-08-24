import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white mt-8 py-8 w-full">
            <div className="px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Contact Us</h5>
                        <p className="text-sm">1234 Street Name, City, State, 12345</p>
                        <p className="text-sm">Email: info@example.com</p>
                        <p className="text-sm">Phone: (123) 456-7890</p>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
                        <ul className="list-none">
                            <li><a href="#" className="text-sm hover:underline">Facebook</a></li>
                            <li><a href="#" className="text-sm hover:underline">Twitter</a></li>
                            <li><a href="#" className="text-sm hover:underline">Instagram</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3">
                        <h5 className="text-lg font-semibold mb-2">About Us</h5>
                        <p className="text-sm">We are a company dedicated to providing the best service possible. Our mission is to make our customers happy.</p>
                    </div>
                </div>
                <div className="mt-8 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;