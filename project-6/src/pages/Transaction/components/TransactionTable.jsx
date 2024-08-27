import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Text,
  Stack,
  Tag,
} from "@chakra-ui/react";
const TransactionTable = () => {
  const tableData = [
    {
      id: "HD82NA2H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "INR Deposit",
        tag: "E-Transfer",
      },
      amount: "+₹81,123",
      status: "pending",
    },
    {
      id: "HD82NA4H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "INR Widthdraw",
        tag: "Wire Transfer",
      },
      amount: "-₹55,123",
      status: "processing",
    },
    {
      id: "HD82NA5H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Buy",
        tag: "BTC",
      },
      amount: "12.0554484 BTC",
      status: "cancelled",
    },
    {
      id: "HD82NA6H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "Sell",
        tag: "BTC",
      },
      amount: "-2.0554484 BTC",
      status: "completed",
    },
    {
      id: "HD82NA7H",
      date: "2023-06-20",
      time: "07:00 AM",
      type: {
        name: "BTC Deposit",
      },
      amount: "+15.5000000",
      status: "pending",
    },
    {
      id: "HD82NA8H",
      date: "2023-06-18",
      time: "07:00 AM",
      type: {
        name: "BTC Widthdraw",
      },
      amount: "-5.05555544",
      status: "completed",
    },
  ];
  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };
  return (
    <TableContainer
      w={{
        base: "100%",
        md: "80%",
        sm: "60%",
      }}
    >
      <Table variant="simple" colorScheme="gray">
        <Thead>
          <Tr>
            <Th p={{ base: "1", md: "3" }}>ID</Th>
            <Th p={{ base: "1", md: "3" }}>Date & Time</Th>
            <Th p={{ base: "1", md: "3" }}>Type</Th>
            <Th p={{ base: "1", md: "3" }}>Amount</Th>
            <Th p={{ base: "1", md: "3" }}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((data) => (
            <Tr key={data.id}>
              <Td p={{ base: "1", md: "3" }} fontSize="sm" fontWeight="medium">
                {data.id}
              </Td>
              <Td p={{ base: "1", md: "3" }}>
                <Stack spacing={{ base: "0", md: "0.5" }}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.date}
                  </Text>
                  <Text fontSize="xs" color="black.60">
                    {data.time}
                  </Text>
                </Stack>
              </Td>
              <Td p={{ base: "1", md: "3" }}>
                <Stack spacing={{ base: "0", md: "0.5" }}>
                  <Text fontSize="sm" fontWeight="medium">
                    {data.type.name}
                  </Text>
                  <Text fontSize="xs" color="black.60" fontWeight="medium">
                    {data.type?.tag}
                  </Text>
                </Stack>
              </Td>
              <Td p={{ base: "1", md: "3" }} fontSize="sm" fontWeight="medium">
                {data.amount}
              </Td>
              <Td p={{ base: "1", md: "3" }} fontSize="sm" fontWeight="medium">
                <Tag
                  bg={statusColor[data.status]}
                  color="white"
                  borderRadius="full"
                >
                  {data.status}
                </Tag>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
