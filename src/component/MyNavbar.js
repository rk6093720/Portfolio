import { React, useEffect } from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  // useDisclosure,
  useColorModeValue,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./Drawer";
import Resume from "../Image/Rohit Kumar.pdf.pdf";
const NavLink = ({ children, onClick }) => (
  <Button
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    onClick={onClick}
    variant="ghost"
  >
    {children}
  </Button>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    toggleColorMode("dark");
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function handleResume() {
    window.open(`${Resume}`);
  }

  return (
    <>
      <Box
        as="header"
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position={{ base: "fixed", md: "fixed", lg: "fixed" }}
        w={{ base: "40%", md: "100%", lg: "100%" }}
        zIndex={{ base: "1000", md: "1000", lg: "1000" }}
        top={"0px"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          m="auto"
          width={"94%"}
          
        >
          <Box
            w={{ base: "50%", sm: "20%" }}
            fontSize={"25px"}
          >
            <Text as="em">Rohit Kumar</Text>
          </Box>

          <Flex
            w="70%"
            display={{ base: "none", lg: "block" }}
            alignItems={"center"}
            justifyContent="end"
          >
            <Flex
              id="nav-menu"
              w="100%"
              justifyContent={"space-between"}
              direction={"row"}
              fontSize="18px"
              alignItems={"center"}
              
            >
              <NavLink onClick={() => handleClickScroll("home")}>Home</NavLink>
              <NavLink onClick={() => handleClickScroll("aboutme")}>
                About
              </NavLink>
              <NavLink onClick={() => handleClickScroll("skills")}>
                Skills
              </NavLink>
              <NavLink onClick={() => handleClickScroll("projects")}>
                Projects
              </NavLink>
              <NavLink onClick={() => handleClickScroll("contact")}>
                Contact
              </NavLink>

              <Link
                id="resume-link-1"
                href={Resume}
                download
                onClick={handleResume}
                target="_blank"
              >
                <Button colorScheme="teal" size="md">
                  Resume
                  <BiDownload />
                </Button>
              </Link>

              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Flex>
          </Flex>

          <Box display={{ base: "block", lg: "none" }}>
            <Flex
              w="100%"
              justifyContent={"space-between"}
              direction={"column"}
              fontSize="18px"
              alignItems={"center"}
            >
              <DrawerExample
                handleClickScroll={handleClickScroll}
                handleResume={handleResume}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
