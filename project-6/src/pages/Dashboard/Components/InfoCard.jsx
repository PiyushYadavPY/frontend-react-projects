import { Tag, Text } from "@chakra-ui/react";
import { CustomCard } from "../../../chakra/CustomCard";

const InfoCard = ({ imgUrl, text, tagText, inverted }) => {
  return (
    <CustomCard
      bgImage={imgUrl}
      bgSize={"cover"}
      bgColor={inverted ? "p.purple" : "white"}
      bgRepeat={"no-repeat"}
    >
      <Tag
        color={inverted ? "p.purple" : "white"}
        bg={inverted ? "white" : "p.purple"}
        borderRadius="full"
      >
        {tagText}
      </Tag>
      <Text
        mt={"4"}
        fontWeight={"medium"}
        textStyle={"h5"}
        color={inverted ? "white" : "black.80"}
      >
        {text}
      </Text>
    </CustomCard>
  );
};

export default InfoCard;
