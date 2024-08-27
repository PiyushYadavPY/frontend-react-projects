import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {
  HStack,
  Icon,
  Stack,
  Flex,
  Text,
  Button,
  Image,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";
const PriceSection = () => {
  const timestamps = ["11:55 AM", "12:55 PM", "1:55 PM", "2:55 PM", "3:55 PM"];
  return (
    <CustomCard>
      <Flex justifyContent="space-between" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="sm">Current price</Text>
          </HStack>
          <HStack
            spacing={1}
            align={{
              base: "flex-start",
              lg: "center",
            }}
            flexDir={{
              base: "column",
              lg: "row",
            }}
          >
            <HStack>
              <Text textStyle="h2" fontWeight="medium">
                22.39401000
              </Text>
              <HStack fontWeight="medium" color="green.500">
                <Icon as={BsArrowUpRight} />
                <Text fontSize="small" textStyle="h2" fontWeight="medium">
                  22%
                </Text>
              </HStack>
            </HStack>
          </HStack>
        </Stack>
        <HStack>
          <Button leftIcon={<Icon as={FaPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={FaMinusCircle} />}>Sell</Button>
        </HStack>
      </Flex>
      <Tabs variant="soft-rounded">
        <Flex justify="end">
          <TabList bg="black.5" p="3px">
            {["1H", "1D", "1W", "1M", "1Y"].map((tab) => (
              <Tab
                fontSize="sm"
                p="4px"
                borderRadius="4"
                key={tab}
                _selected={{ bg: "white" }}
              >
                {tab}
              </Tab>
            ))}
          </TabList>
        </Flex>
        <TabPanels>
          <TabPanel>
            <Image src="/graph.svg" />
            <HStack justify="space-between">
              {timestamps.map((timestamp) => (
                <Text key={timestamp} fontSize="sm" color="black.80">
                  {timestamp}
                </Text>
              ))}
            </HStack>
          </TabPanel>
          <TabPanel>
            <p>1DAY DATA</p>
          </TabPanel>
          <TabPanel>
            <p>1WEEK DATA</p>
          </TabPanel>
          <TabPanel>
            <p>1MONTH DATA</p>
          </TabPanel>
          <TabPanel>
            <p>1YEAR DATA</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </CustomCard>
  );
};

export default PriceSection;
