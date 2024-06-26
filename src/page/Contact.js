import React from "react";
// import { HiOutlineMail } from "react-icons/hi";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
//  import { BsFillPersonLinesFill} from "react-icons/bs";
import {
  FormControl,
  FormLabel,
  // FormErrorMessage,
  FormHelperText,
  Input,
  Textarea,
  Button,
  Container,
  Heading,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container
      id="contact"
      textAlign={{ base: "center", md: "center", lg: "center" }}
      pt={{base:"10px",md:"10px"}}
      // border={{
      //   base: "1px solid red",
      //   sm: "1px solid green",
      //   lg: "1px solid blue",
      // }}
      marginTop={{ base: "10px", md: "80px", lg: "150px" }}
      marginLeft={{ base: "0.2em", sm: "5em", lg: "8em" }}
      display={{ base: "flex", md: "flex", lg: "flex" }}
      justifyContent={{ base: "center", md: "center", lg: "center" }}
      alignItems={{ base: "center", md: "center", lg: "center" }}
      flexDirection={{ base: "column", md: "column", lg: "column" }}
      style={{
        gap: "5px",
      }}
      maxW={{ base: "98%", sm: "80%", lg: "80%" }}
    >
      <Heading>Contact</Heading>
      <h4>Submit the form below to get in touch with me!!</h4>
      <FormControl
        as="form"
        action="https://getform.io/f/67c67ee3-5564-4501-bd17-7ff4ad2466d5"
        method="POST"
        style={{ width: "40%", textAlign: "center" }}
        w={"40%"}
      >
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Your Name"
        />
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <FormLabel htmlFor="number">Mobile Number</FormLabel>
        <Input
          type="number"
          id="number"
          name="number"
          placeholder="Enter Your Mobile Number"
        />
        <FormLabel htmlFor="message">Message</FormLabel>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter Your Message"
        />
        <FormHelperText>We'll never share your details.</FormHelperText>
        <Button
          type="submit"
          style={{
            backgroundColor: "skyblue",
            color: "black",
            marginTop: "10px",
          }}
        >
          Submit
        </Button>
      </FormControl>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          width: "50%",
          gap: "2%",
          marginTop: "10px",
        }}
      >
        <a href="mailto:rk6093720@gmail.com">
          <>
            <HiOutlineMail size={50} />
          </>
        </a>
        <a href="https://www.linkedin.com/in/rohit-kumar-6b1b421a9/">
          <>
            <FaLinkedin size={50} />
          </>
        </a>

        <a href="https://github.com/rk6093720">
          <>
            <FaGithub size={50} />
          </>
        </a>
      </div>
    </Container>
  );
};

export default Contact;
