import { Car, Shield, FileCheck, Camera, Menu } from "lucide-react"
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({ login, signup }) {
    return (
        <nav className="flex items-center justify-between px-6 py-2 bg-white shadow-md">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <Link className="flex justify-items-start" to='/'>
                    <Car className="h-6 w-6 text-blue-600" />
                    <span className="px-2 text-lg font-bold text-gray-900">AutoDamageDetect</span>
                </Link>
            </div>

            {/* Navigation Links */}
            <div className="flex space-x-6 text-gray-700">
                <Link to={"/detect"} className="hover:text-blue-600">Detect Damage</Link>
                <Link to={"/claim"} className="hover:text-blue-600">Claim Insurance</Link>
                <Link to={"/claim"} className="hover:text-blue-600">Contact us</Link>
                <Link to={"/"} className="hover:text-blue-600">{login}</Link>
            </div>
        </nav>
    );
}
