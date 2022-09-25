import ContainerBlock from "../components/ContainerBlock";
import HomePage from "../components/HomePage";
import { ThemeProvider } from "next-themes";


export default function Home() {
  return (
    <>
    <ThemeProvider defaultTheme="light" attribute="class">
    <ContainerBlock 
    title="Mehmet Yilmaz - Front-End Developer"
    description="I just code for living. Get in touch with me to know more."
      >
     

      <HomePage />
    </ContainerBlock>
    </ThemeProvider>
   
  </>  
  )
}
