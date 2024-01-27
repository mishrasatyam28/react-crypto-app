import { Box, Container } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../main";

const CoinDetails = () => {
  const [coins, setCoin] = useState({});
  const [loading, setLoading] = useState("true");
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState("inr");

  const params = useParams();

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        console.log(data);
        setCoin(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoin();
  }, [params.id]);

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Box width={"full"} borderWidth={1}>
            Helllo
          </Box>
        </>
      )}
    </Container>
  );
};

export default CoinDetails;
