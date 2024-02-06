import { Box, HStack, VStack, Text, Input, Button } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";

const Watchlist = () => {
  // State for storing the list of favorite coins
  const [watchlist, setWatchlist] = useState([]);

  // State for the input value
  const [newCoin, setNewCoin] = useState("");

  // Load watchlist from local storage on component mount
  useEffect(() => {
    const storedWatchlist =
      JSON.parse(localStorage.getItem("cryptoWatchlist")) || [];
    setWatchlist(storedWatchlist);
  }, []);

  // Function to handle adding a new coin to the watchlist
  const addCoin = () => {
    // Check if the coin is not already in the watchlist
    if (newCoin.trim() !== "" && !watchlist.includes(newCoin.trim())) {
      const updatedWatchlist = [...watchlist, newCoin.trim()];
      setWatchlist(updatedWatchlist);
      localStorage.setItem("cryptoWatchlist", JSON.stringify(updatedWatchlist));
      setNewCoin(""); // Clear the input field
    }
  };

  // Function to handle removing a coin from the watchlist
  const removeCoin = (coin) => {
    const updatedWatchlist = watchlist.filter((item) => item !== coin);
    setWatchlist(updatedWatchlist);
    localStorage.setItem("cryptoWatchlist", JSON.stringify(updatedWatchlist));
  };

  return (
    <VStack w={"full"} h={"85vh"}>
      <HStack
        fontSize={"2rem"}
        mt={"20"}
        display={"flex"}
        w={"auto"}
        border={"2px solid grey"}
        p={"4"}
        borderRadius={"3rem"}
      >
        <IoMdAdd />
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontWeight={"thin"}
          color={"blackAlpha.900"}
        >
          Your Watchlist
        </Text>
      </HStack>

      {/* Input for adding new coins */}
      <HStack m={"2rem"}>
        <Input
          type="text"
          w={"sm"}
          fontFamily={"Roboto"}
          placeholder="Enter coin name"
          border={"2px solid green"}
          value={newCoin}
          onChange={(e) => setNewCoin(e.target.value.toUpperCase())}
        />

        <Button
          onClick={addCoin}
          p={"2px"}
          w={"50%"}
          variant={"transparent"}
          border={"1px"}
          bgColor={"blackAlpha.900"}
          color={"white"}
        >
          Create
        </Button>
      </HStack>

      {/* Display the watchlist */}
      <VStack w={"md"} h={"full"} m={"1rem"}>
        {watchlist.map((coin) => (
          <HStack
            w={"sm"}
            display={"flex"}
            justifyContent={"space-between"}
            p={"8px"}
          >
            <Box w={"50%"} h={"full"} key={coin}>
              <Text
                fontSize={"2xl"}
                textAlign={"center"}
                fontWeight={"thin"}
                color={"whiteAlpha.900"}
                borderRadius={"10px"}
                bgColor={"blackAlpha.700"}
              >
                {coin}
              </Text>
            </Box>
            <Button
              p={"2px"}
              w={"25%"}
              variant={"transparent"}
              border={"1px"}
              bgColor={"red"}
              color={"white"}
              onClick={() => removeCoin(coin)}
            >
              Remove
            </Button>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

export default Watchlist;
