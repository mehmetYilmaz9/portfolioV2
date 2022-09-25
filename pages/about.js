import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import { ThemeProvider } from "next-themes";
import AboutMe from "../components/AboutMe";

const AboutPage = () => {

  return (
    <ThemeProvider defaultTheme="light" attribute="class">
    <ContainerBlock title="About - Mehmet Yilmaz">
      <AboutMe />
    </ContainerBlock>
    </ThemeProvider>
  )
}

export default AboutPage;