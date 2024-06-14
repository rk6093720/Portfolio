import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import HelperProject from "./helper";
import Asos from "../Image/Asos.jpg";
import codeclap from "../Image/codeclap.png";
const Project = () => {
  return (
    // Passing `columns={[2, null, 3]}` and `columns={{sm: 2, md: 3}}`
    // will have the same effect.
    <Container
      id="projects"
      // border={{
      //   base: "1px solid red",
      //   sm: "1px solid green",
      //   lg: "1px solid blue",
      // }}
      margin={{ base: "auto", sm: "auto", lg: "auto" }}
      maxW={{ base: "98%", sm: "80%", lg: "80%" }}
      // height={{ base: "700px", sm: "400px", lg: "600px" }}
      textAlign={{ base: "center", md: "center", lg: "center" }}
      marginLeft={{ base: "0.3em", sm: "5em", lg: "8em" }}
      marginTop={{ base: "180px", sm: "60px", lg: "150px" }}
      pt="10"
    >
      <Heading>Projects</Heading>
      <SimpleGrid
        justifyContent="center"
        textAlign={"center"}
        m={"auto"}
        columns={{ base: "1", md: "2", xl: "3" }}
        spacing={{ base: "10px", md: "40px" }}
        w={{ base: "95%", md: "81%" }}
        marginTop="70px"
        marginBottom={"50px"}
      >
        {data.map((el, ind) => {
          return <HelperProject key={Date.now() + ind} {...el} />;
        })}
      </SimpleGrid>
    </Container>
  );
};

let data = [
  {
    image: `${Asos}`,
    desc: "ASOS is a Men and Women's fashion brand for the newest & trending Cloths,fashion accessories and online shop that offered high quality products at an affordable price. We have built the exact website clone as it is on the original website.",
    title: "Asos",
    techStack: [
      "React",
      "Redux",
      "Javascript",
      "Nodejs",
      "Express js",
      "Mongodb",
      "GooglePay",
    ],
    github: "https://github.com/agodse21/Asos_clone",
    deploy: "https://frontend-eight-lime.vercel.app/",
  },
  {
    image: `${codeclap}`,
    desc: "A collaborative coding platform for seamless teamwork, version control, and project management. Revolutionize your coding experience today",
    title: "CodeCollab",
    techStack: ["React", "Node", "Express"],
    github: "https://github.com/rk28284/native-fog-9540",
    deploy: "https://frondend-eight.vercel.app/",
  },
  // {
  //   image: `${""}`,
  //   desc: "Shayari Generator: Enter a keyword, get personalized Shayari! Enjoy creative verses on any topic with ChatGPT.",
  //   title: "Shayari Generator",
  //   techStack: ["React", "OpenAI", "ChakraUI"],
  //   github: "https://github.com/rk28284/shayari-generator",
  //   deploy: "https://65392cb6cabdb500888fc6c7--chic-gaufre-53f545.netlify.app/",
  // },
  // {
  //   image: `${""}`,
  //   desc: "It  is an online survey service provider that allow users to create web browser based surveyss",
  //   title: "SurveyMonkey Clone",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/rk28284/SurveyHomes",
  //   deploy: "https://steady-choux-5544ac.netlify.app/",
  // },
  // {
  //   image: `${""}`,
  //   title: "Paytm Mall Clone",
  //   desc: "It is India's Leading Online Shopping Website,your ultimate online shopping destination! ",
  //   techStack: ["Redux", "React", "Chakra-ui"],
  //   github: "https://github.com/rk28284/Styles-Up",
  //   deploy: "https://stylesup121.vercel.app/",
  // },

  // {
  //   image: `${""}`,
  //   title: "Mytheresa Clone",
  //   desc: "Mytheresa is a German e-commerce luxury fashion company",
  //   techStack: ["HTML", "CSS", "JavaScript"],
  //   github: "https://github.com/rk28284/wry-stitch-5509",
  //   deploy: "https://coruscating-meerkat-173874.netlify.app/",
  // },
];

export default Project;
