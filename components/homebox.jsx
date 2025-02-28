import React, { useEffect } from 'react'
import {Shield, FileCheck, Camera} from "lucide-react";
import { Input } from './ui/Input';
import { Button } from './ui/Button';
import { useInView } from '../hooks/useInView';

export const Homebox = () => {
  const headingInView = useInView();
  const paragraphInView = useInView();
  return (
    <main className="flex-grow">
      <section className="bg-blue-50 py-20 relative">
        <div className="container mx-auto px-4 text-center">
          <h1
            className={`text-4xl font-bold text-gray-800 mb-4 scroll-animate ${headingInView ? 'animate-fadeInUp' : ''}`}
          >
            Instant Vehicle Damage Detection
          </h1>
          <p
            className={`text-xl text-gray-600 mb-8 scroll-animate ${paragraphInView ? 'animate-fadeInUp' : ''}`}
          >
            Assess damage quickly and accurately with our AI-powered technology
          </p>
          <Button content={"Get Started"}/>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Camera className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Damage Detection</h3>
              <p className="text-gray-600">Upload photos of your vehicle for instant damage assessment</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FileCheck className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Insurance Claims</h3>
              <p className="text-gray-600">Streamline your insurance claim process with our platform</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Reliable</h3>
              <p className="text-gray-600">Your data is protected with state-of-the-art security measures</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="/placeholder.jpg?height=400&width=600"
                alt="Vehicle damage detection process"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">How It Works</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Camera className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Take photos of your vehicle damage</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <FileCheck className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Our AI analyzes the damage instantly</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-blue-100 rounded-full p-2 mr-4">
                    <Shield className="h-6 w-6 text-blue-600" />
                  </div>
                  <span>Receive a detailed damage report</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Join Our Community</h2>
          <p className="text-xl text-gray-600 mb-8">
            Stay updated with the latest in vehicle damage detection technology
          </p>
          <form className="max-w-md mx-auto flex flex-col items-center space-y-5">
            <Input width={70} placeholder={'abc@gmail.com'} /> 
            <Button width='60px' content={"Enroll now"} />
          </form>
        </div>
      </section>
    </main>
  )
}
