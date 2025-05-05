import React from "react";
import { services, about, helps } from "./NavFooterDetails";
import { Box, Grid, Center } from "@chakra-ui/react";

import { FooterCard1,FooterCard,FooterCard2 } from "./NavFooterCard1";

const NavFooter = () => {
  return (
    <Box
      bgColor="#000042"
      color="whiteAlpha.900"
      p={{ lg: "0", md: "5", base: "5" }}
    >
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)"
        }}
        textAlign="left"
        ml="2%"
      >
        <Box w={{ base: "100%", lg: "60%" }} pl="5">
          <Grid
            templateColumns={{
              base: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)"
            }}
            gap={5}
          >
            <FooterCard1 type={services} heading="Services" />
            <FooterCard1 type={about} heading="About Us" />
            <FooterCard1 type={helps} heading="Help" />
          </Grid>
        </Box>
           <Center>
                     <FooterCard2 />
                   </Center>
                 </Grid>
                 <hr />
                 <FooterCard />

    </Box>
  );
};

export default NavFooter;
