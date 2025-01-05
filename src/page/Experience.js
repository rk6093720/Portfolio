import {
  Box,
  Text,
  Flex,
  ListItem,
  UnorderedList,
  Container,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Data from "../component/Data";
const Experience = () => {
    const [experienceData]=useState(Data);
  return (
    <>
      <Box id="experience" h="60px"></Box>
      <Container
        id="experience"
        // border={{
        //   base: "1px solid red",
        //   sm: "1px solid green",
        //   lg: "1px solid blue",
        // }}
        maxW={{ base: "100%", sm: "80%", lg: "80%" }}
        textAlign={{ base: "center", sm: "center", lg: "center" }}
        // width={{ base: "120em", sm: "80%", lg: "80%" }}
        height={{ base: "100%", sm: "100%", lg: "480px" }}
        margin={{ base: "auto", sm: "auto", lg: "auto" }}
        marginTop={{ base: "50px", sm: "80px", lg: "50px" }}
        marginBottom={{ base: "-50px", sm: "0px" }}
        marginLeft={{ base: "0.2em", sm: "5em" }}
       // boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <Stack
          w="100%"
        //   border={"1px solid red"}
          margin="auto"
          height={"100%"}
          mb={{ base: "20px", md: "25px" }}
          padding={{ base: "10px 1%", md: "10px", lg: "10px 22%" }}
        >
          <Box
            color={"white"}
            fontWeight="bold"
            mb={{ base: "12px", md: "22px" }}
            fontSize={{ base: "22px", md: "45px" }}
            textAlign={{ base: "center" }}
            textDecoration="none"
          >
            Experience
          </Box>
          {experienceData.map((item, index) => (
            <Box
              key={index}
              textAlign={{ base: "", md: "", lg: "start" }}
              width={{ base: "", md: "", lg: "800px" }}
            //   border={"1px solid green"}
              padding={{ base: "12px", md: "18px", lg: "8px" }}
              m={{ base: "10px 5%", md: "18px 10px", lg: "5px -120px" }}
              borderRadius={"12px"}
              height={{ lg: "100%" }}
              boxShadow={"rgba(230, 250, 255, 0.56) 0px 22px 70px 4px;"}
            >
              <Flex justifyContent={"space-between"} fontWeight={"bold"}>
                <Text
                  color={"red"}
                  fontSize="xl"
                  textAlign={"start"}
                  w={{ base: "50%", md: "65%", lg: "65%" }}
                >
                  {item.company_name}
                </Text>
                <Text
                  fontSize="lg"
                  textAlign={{ base: "end", md: "end", lg: "right" }}
                  w={{ base: "50%", md: "35%", lg: "35%" }}
                >
                  {item.Location}
                </Text>
              </Flex>

              <Flex
                justifyContent={"space-between"}
                fontWeight={"semibold"}
                fontStyle={"italic"}
              >
                <Text textAlign={"start"} w="50%">
                  {item.role}
                </Text>
                <Text textAlign={"end"} w="50%">
                  {item.start_Date} - {item.end_Date}
                </Text>
              </Flex>

              <UnorderedList mt={{ base: "10px", md: "15px", lg: "18px" }}>
                {item.work.map((item, index) => (
                  <ListItem key={index}>{item}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Stack>
      </Container>
    </>
  );
};

export default Experience;
