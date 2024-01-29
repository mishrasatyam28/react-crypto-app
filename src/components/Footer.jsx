import { Avatar, Box, Stack, VStack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Footer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/mishrasatyam28")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      {console.log(data.avatar_url)}
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very cheap price.{" "}
          </Text>
        </VStack>

        <VStack>
          <a href="https://github.com/mishrasatyam28" target="_blank">
            <Avatar boxSize={"28"} mt={["4", "0"]} src={data.avatar_url} />
          </a>
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

// const githubData = async () => {
//   const response = await fetch("https://api.github.com/users/mishrasatyam28");
//   return response.json();
// };

export default Footer;
