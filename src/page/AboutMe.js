import React from "react";
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  // Tag,
  // Wrap,
  // WrapItem,
  useColorModeValue,
  Container,
  // VStack,
  Flex,
  // Button,
} from "@chakra-ui/react";
import photo from "../Image/Rohit kumar.jpg";

// const BlogTags = (props) => {
//   return (
//     <HStack spacing={2} marginTop={props.marginTop}>
//       {props.tags.map((tag) => (
//         <Tag size={"md"} variant="solid" colorScheme="orange" key={tag}>
//           {tag}
//         </Tag>
//       ))}
//     </HStack>
//   );
// };

export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      />
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const AboutMe = () => {
  return (
    <>
      <Box id="aboutme" h="60px"></Box>
      <Container
        id="aboutme"
        // border={{
        //   base: "1px solid red",
        //   sm: "1px solid green",
        //   lg: "1px solid blue",
        // }}
        maxW={{ base: "300%", sm: "80%",lg:"80%" }}
        textAlign={{base:"center",sm:"center",lg:"center"}}
        // width={{ base: "120em", sm: "80%", lg: "80%" }}
        height={{ base: "400px", sm: "400px", lg: "480px" }}
        margin={{ base: "auto", sm: "auto", lg: "auto" }}
        marginTop={{ base: "600px", sm: "450px", lg: "50px" }}
        marginBottom={{ base: "-50px", sm: "0px" }}
        marginLeft={{ base: "0.2em", sm: "5em" }}
      >
        <Heading mb={"10"} as="h1">
          About Me
        </Heading>
        <Flex
          w={"100%"}
          m="auto"
          direction={{ base: "column", lg: "row" }}
          bg={useColorModeValue("white", "gray.800")}
          borderRadius="20px"
          p="20px"
          textAlign={"left"}
          boxShadow={"rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}
          marginTop={{ base: "5", sm: "5" }}
          justifyContent={{ base: "center", lg: "space-between" }}
        >
          <Box marginRight="3">
            <Flex
              width={{ base: "60%", md: "40%", lg: "65%" }}
              justifyContent={"center"}
              textAlign={"center"}
              m="auto"
              zIndex="2"
              mt="-10px"
              rounded={"md"}
              border="4px solid whiteAlpha"
              borderRadius="20%"
            >
              <Image
                textAlign={"center"}
                className="home-img"
                borderRadius="5%"
                src={photo}
                h="355px"
                w={{ base: "380px", md: "200px", lg: "300px" }}
                alt="some good alt text"
                objectFit="cover"
              />
            </Flex>
          </Box>
          <Flex
            w={{ base: "100%", lg: "70%" }}
            mt={{ base: "40px", lg: "0px" }}
            flexDirection="column"
            justifyContent="center"
          >
            {/* <BlogTags
              tags={["ReactJs","Redux","Javascript"]}
              marginTop="2"
            /> */}
            <Flex
              direction={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              textAlign="center"
              marginBottom={"20px"}
            >
              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -2px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>1200+ Hours</Text>
                <Text>Full Stack Coding</Text>
              </Box>

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>4+ Major Projects</Text>
                <Text>30+ Mini Projects</Text>
              </Box>

              <Box
                w={{ base: "100%", md: "30%" }}
                mt={{ base: "30px", md: "0px" }}
                padding={"18px"}
                borderRadius="9px"
                boxShadow={
                  "rgba(255, 255, 255, 0.17) 0px -23px 25px 0px inset, rgba(255, 255, 255, 0.15) 0px -36px 30px 0px inset, rgba(255, 255, 255, 0.1) 0px -79px 40px 0px inset, rgba(255, 255, 255, 0.06) 0px 2px 1px, rgba(255, 255, 255, 0.09) 0px 4px 2px, rgba(255, 255, 255, 0.09) 0px 8px 4px, rgba(255, 255, 255, 0.09) 0px 16px 8px, rgba(255, 255, 255, 0.09) 0px 2px 16px"
                }
              >
                <Text>100+ Hours</Text>
                <Text>Soft Skills</Text>
              </Box>
            </Flex>
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                Summary
              </Link>
            </Heading>
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
              id="user-detail-intro"
            >
              I am a Full Stack Developer in MERN stack having good knowledge of
              Express, MongoDB, JavaScript, HTML, CSS, etc. I am passionate
              about learning new technologies and aiming to create world-class
              web applications while facilitating organizations in achieving
              ambitious goals.
            </Text>
          </Flex>
        </Flex>
        <Divider marginTop="20" />
      </Container>
    </>
  );
};

export default AboutMe;
