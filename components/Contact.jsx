import React from "react"
import Image from 'next/image'

import { BsGithub, BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FiMail} from "react-icons/fi"

import contactpng from "../assets/contact.png";

const Contact = () => {
    return (
        <section className="bg-white dark:bg-gray-800 ">
            <div className="container flex flex-col-reverse items-center justify-center mx-auto space-y-2  md:flex-row ">
            <div className="flex  items-center justify-center md:w-1/2"  >
                    <div className="text-4xl py-4">
                        
                        <div>
                            <span className="text-sm flex justify-center font-extralight tracking-wide ">
                                <a href="https://github.com/mehmetYilmaz9" alt="github" rel="noopener noreferrer" target="_blank"> <BsGithub  className="h-8 w-8 mx-2  text-gray-800 dark:text-white "  /></a> |
                                <a href="mailto:mehmet.web.y@gmail.com"> <FiMail className="h-8 w-8 mx-2  text-gray-800 dark:text-white" /></a> |               
                                <a href="https://www.linkedin.com/in/mehmet-yilmaz-50597715b/" target="_blank" rel="noopener noreferrer"><BsLinkedin className="h-8 w-8 mx-2 text-gray-800 dark:text-white" /></a> |
                                 <a href="https://twitter.com/mehmetydev" target="_blank" rel="noopener noreferrer"><BsTwitter  className="h-8 w-8 mx-2  text-gray-800 dark:text-white" /></a>  
                            </span>
                        </div>   
                    </div>
                </div>
                <div className=" md:w-1/2">
                     <Image
                            src={contactpng}
                            alt="contactpng"
                            className="m-0 "
                    />
                </div>

                
            </div>
        </section>
    )
}

export default Contact;
