import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import {
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Icon,
} from "@chakra-ui/react";
const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4" bg="white">
      <HStack maxW="70rem" h="16" justify="space-between" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: "block",
            lg: "none",
          }}
        />
        <Heading fontSize="28px" fontWeight="medium">
          {title}
        </Heading>
        <Menu>
          <MenuButton>
            <Icon as={FaUserCircle} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Log out</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
