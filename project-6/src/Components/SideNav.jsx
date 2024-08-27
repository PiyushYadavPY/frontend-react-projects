import { Stack, Box, HStack, Icon, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { RxDashboard } from "react-icons/rx";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
const SideNav = () => {
  const location = useLocation();
  // console.log(location);
  const isActiveLink = (link) => {
    return location.pathname === link;
  };
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: TbArrowsDoubleNeSw,
      text: "Transactions",
      link: "/transactions",
    },
  ];
  return (
    <Stack
      bg="white"
      justify="space-between"
      boxShadow={{ base: "none", lg: "lg" }}
      w={{ base: "full", lg: "16rem" }}
      h="100vh"
    >
      <Box>
        <Heading textAlign="center" fontSize="25px" as="h1" pt="3.5rem">
          PY-Crypto
        </Heading>
        <Box mt="6" mx="3">
          {navLinks.map((nav) => (
            <Link to={nav.link} key={nav.text}>
              <HStack
                bg={isActiveLink(nav.link) ? "#d4d4d4" : "transparent"}
                color={isActiveLink(nav.link) ? "#171717" : "#88888a"}
                borderRadius="10px"
                py="3"
                px="4"
                _hover={{
                  bg: "#F3F3F7",
                  color: "#171717",
                }}
              >
                <Icon as={nav.icon} />
                <Text fontSize="14px" fontWeight="700">
                  {nav.text}
                </Text>
              </HStack>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
        <Link to="/support">
          {" "}
          <HStack
            borderRadius="10px"
            // key={nav.text}
            py="3"
            px="4"
            bg={isActiveLink("/support") ? "#d4d4d4" : "transparent"}
            color={isActiveLink("/support") ? "#171717" : "#88888a"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717",
            }}
          >
            <Icon as={BiSupport} />
            <Text fontSize="14px" fontWeight="700">
              Support
            </Text>
          </HStack>
        </Link>
      </Box>
    </Stack>
  );
};

export default SideNav;
