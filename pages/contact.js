import React from "react";
import { NextPage } from "next";

import ContainerBlock from "../components/ContainerBlock";
import Contact from "../components/Contact";
import { ThemeProvider } from "next-themes";


const ContactPage = () => {
  
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
    <ContainerBlock title="Contact - Mehmet Yilmaz">
      <Contact />
    </ContainerBlock>
    </ThemeProvider>
  );
}

export default ContactPage;