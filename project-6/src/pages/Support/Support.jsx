import React from "react";
import DashboardLayout from "../../Components/DashboardLayout";
import SupportCard from "./components/SupportCard";
import ContactCard from "./components/ContactCard";
import { IoMdMail } from "react-icons/io";
import InfoCard from "../Dashboard/Components/InfoCard";
import { Stack } from "@chakra-ui/react";
import { BiSolidMessageRounded } from "react-icons/bi";
const Support = () => {
  return (
    <DashboardLayout title="Support">
      <Stack spacing={"80px"}>
        <SupportCard
          icon={IoMdMail}
          leftComponent={<ContactCard />}
          title="Contact us"
          text=" Have a question or just want to know more? Feel free to reach out to us."
        />
        <SupportCard
          icon={BiSolidMessageRounded}
          leftComponent={
            <InfoCard
              imgUrl="/grid_bg.svg"
              text="Learn more about our real estate, mortgage, and  corporate account services"
              tagText="Contact"
              inverted={true}
            />
          }
          title="Live Chat"
          text=" Have a question or just want to know more? Feel free to reach out to us."
        />
      </Stack>
    </DashboardLayout>
  );
};
export default Support;
