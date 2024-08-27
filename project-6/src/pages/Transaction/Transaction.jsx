import {
  Button,
  Card,
  Flex,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Tag,
} from "@chakra-ui/react";
import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import TransactionTable from "./components/TransactionTable";
import { IoSearchSharp } from "react-icons/io5";
const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout
      w={{
        base: "100%",
        md: "80%",
        sm: "60%",
        xs: "40%",
      }}
      title="Transactions"
    >
      <Flex justify={{ base: "flex-start", md: "flex-end" }} mt="4" mb="3">
        <Button
          leftIcon={<Icon as={AiOutlineDownload} />}
          w={{ base: "20%", md: "auto" }}
        >
          Export csv
        </Button>
      </Flex>
      <Card borderRadius="1rem">
        <Tabs>
          <TabList
            pt="4"
            display="flex"
            w="full"
            justifyContent="space-between"
            flexDirection={{ base: "column", md: "row" }}
          >
            <HStack
              spacing={{ base: "4", md: "0" }}
              mb={{ base: "4", md: "0" }}
            >
              {tabs.map((tab) => (
                <Tab key={tab.name} display="flex" gap="2" pb="4">
                  {tab.name}
                  <Tag colorScheme="gray" borderRadius="full">
                    {tab.count}
                  </Tag>
                </Tab>
              ))}
            </HStack>
            <InputGroup
              maxW="200px"
              pr="6"
              ml={{ base: "4", md: "0" }}
              mb={{ base: "4", md: "0" }}
            >
              <InputLeftElement pointerEvents="none">
                <Icon as={IoSearchSharp} />
              </InputLeftElement>
              <Input placeholder="Search" />
            </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transaction;
