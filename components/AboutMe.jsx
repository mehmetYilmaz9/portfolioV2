import React, {useState} from "react";
import Link from 'next/link'
import Image from 'next/image';
import { RoughNotation } from "react-rough-notation";
import aboutpic from '../assets/aboutme.png';

const AboutMe = () => {

  return (
    <section className="bg-white dark:bg-gray-800 ">
      <div className="flex flex-col-reverse items-center container mx-auto space-y-2  md:flex-row">
        {/* Left Side*/}
        <div className="flex flex-col md:w-1/2">
          {/* Title Intro */}
           {/* Presentation Intro */}
          <div className="m-2 text-left">
            <p className="m-0"> 
            👨🏻‍💻 - I’m a Frontend | Blockchain Software developer based on Paris, France; <br /> 
            🔨 - For the storytelling: I enjoy building code with React. I love building user friendly interface; <br /> 
            🔗 - I upgraded my skills from Web2 to Web3.0; <br /> 
            </p>
          
          </div>

          {/*  Language Intro */}
          <div className="m-2 text-left">
          <h1>💻 - Language & framework : </h1>   
            <p className="m-2">
            + Front-End : HTML || CSS || Tailwind || Bulma || Javascript || React || NextJS <br />
            + Back-End :  NodeJS || Typescript || Express || Strapi || MongoDB || Jamstack || Firebase ;<br />
            + Dapps : Solidity || Rust || Metamask || NFT mining + Marketplace || Hardhat || Alchemy || Infura || Moralis ;
            </p> 
          </div>

          {/* Link Intro */}
          <div className="m-2 text-left">
            <p className="">
            🍔  - Please feel free to take a look at <Link href="/projects"><a>My Projects</a></Link>;
            </p>
          </div>
        </div>

           {/* Right SIde */}
        <div className="md:w-1/2"  >
        <Image
            src={aboutpic}
            alt="DemonNFT"
            className="grayscale "
        />
        </div>
      </div>
      </section>
    )
}

export default AboutMe;
