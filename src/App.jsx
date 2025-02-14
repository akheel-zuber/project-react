import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import React from "react";
import Navbar from "../components/navbar";
import { BrowserRouter } from "react-router-dom";
import { Homebox } from "../components/homebox";


export default function App() {
  return (
    <BrowserRouter>
    
    <header>
      <SignedOut>
        <Navbar login={<SignInButton />} />
        <Homebox />
      </SignedOut>
      <SignedIn>
            <Navbar login={<UserButton/>} />
            <Homebox />
      </SignedIn>
    </header>
    </BrowserRouter>
  );
}
