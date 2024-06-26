import { React, useEffect } from "react";
import {
  Box,
  Flex,
  // Avatar,
  Link,
  Button,
  // Menu,
  // MenuButton,
  // MenuList,
  // MenuItem,
  // Input,
  // MenuDivider,
  // useDisclosure,
  useColorModeValue,
  // Stack,
  useColorMode,
  // Center,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { BiDownload } from "react-icons/bi";
import DrawerExample from "./Drawer";
import Resume from "../Image/Rohit Kumar.pdf.pdf";
const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    toggleColorMode("light");
  }, []);

  const handleClickScroll = (value) => {
    const element = document.getElementById(value);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
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
        width={{ base: "100%", md: "100%", lg: "100%" }}
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
          <Box w={{ base: "50%", sm: "20%", lg: "20%" }} fontSize={"25px"}>
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
              <Button
                onClick={() => {
                  handleClickScroll("home");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link home">Home</Link>
              </Button>

              <Button
                colorScheme="gray"
                onClick={() => {
                  handleClickScroll("aboutme");
                }}
                variant="ghost"
              >
                <Link className="nav-link about">About</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("skills");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link skills">Skills</Link>
              </Button>
              <Button
                onClick={() => {
                  handleClickScroll("experience");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link experience">Experience</Link>
              </Button>
              <Button
                onClick={() => {
                  handleClickScroll("projects");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link projects">Projects</Link>
              </Button>

              <Button
                onClick={() => {
                  handleClickScroll("contact");
                }}
                colorScheme="gray"
                variant="ghost"
              >
                <Link className="nav-link contact">Contact</Link>
              </Button>

              <Link
                id="resume-link-1"
                href={Resume}
                className="nav-link resume"
                download
                onClick={handleResume}
                target="_blank"
              >
                <Button
                  className="nav-link resume"
                  id="resume-button-1"
                  colorScheme="teal"
                  size="md"
                >
                  Resume
                  <BiDownload />
                </Button>
              </Link>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
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
