/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Box, Flex, Text, Button, UnorderedList, ListItem, useMediaQuery } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'
import Carousel from '../components/Carousal'


export default function Home() {

  const [over1100px] = useMediaQuery('(min-width: 1100px)')
  return (
    <>
      <Head>
        <title>Ducks Coffee</title>
        <meta name="description" content="Cafe in Graz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main style={{ width: "100vw", display: "flex", alignItems: "center", marginTop: "12rem", flexFlow: "column", fontFamily: "Inter", overflowX: "hidden" }}>

        <Flex w="80%" justify="space-between" flexFlow={over1100px ? "row" : "column"} align="center" gap="4rem">
          <Flex flexFlow="column" gap="2rem">
            <Text fontSize="5rem" fontWeight={700} color="#FF9900" mt="8rem">Ducks Coffee Shop</Text>
            <Text fontSize="2rem" fontWeight={600} color="#FFC737">Cafe in Graz with wide range of drinks and desserts.</Text>

            <Box
              borderRadius="2rem" bg="linear-gradient(234.76deg, #FFF8BB -26.23%, #FFFFFF 45.45%)"
              boxShadow="2px 2px 20px rgba(103, 103, 103, 0.19)"
              mt="2rem"
              w="70%"
              padding="3rem 0rem"
              zIndex={2}
            >
              <UnorderedList fontSize="2rem" color="#232323" fontWeight={700} zIndex={2}>
                <ListItem>Kaffee</ListItem>
                <ListItem mt="1rem">Vegane Bio Smoothies</ListItem>
                <ListItem mt="1rem">Limos</ListItem>
                <ListItem mt="1rem">Mehlspeisen</ListItem>
                <ListItem mt="1rem">Frühstück</ListItem>
                <ListItem mt="1rem">Snacks</ListItem>
                <ListItem mt="1rem">Bio Prosecco</ListItem>
                <ListItem mt="1rem">Dark Gin</ListItem>
                <ListItem mt="1rem">Helles Bier</ListItem>
                <ListItem mt="1rem">Conceptstore</ListItem>
              </UnorderedList>
            </Box>
          </Flex>

          <img src="/coffee.png" alt="Coffee" style={{
            display: "block",
            maxWidth: "60rem",
            maxHeight: "60rem",
            width: "auto",
            height: "auto",
            transform: `${over1100px ? '' : "translate(25rem, -25rem)"}`
          }} />
        </Flex>

        <img style={{ position: "absolute", width: "100vw", transform: "translate(0, -5rem)" }} src="/gradient.png" alt="Gradient" />

        <Flex w="80%" justify="start" mt={over1100px ? "12rem" : "-25rem"} mb="2rem">
          <Text fontSize="3.5rem" fontWeight={700} color="black" textAlign="start" alignSelf="start">Image Gallery</Text>
        </Flex>

        <Box display="block" w="80%" h="35rem">
          <Carousel slidesToShow={4} dots>

            <Box h="35rem"><img src="/gallery/1.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/2.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/3.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/4.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/5.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/6.jpg" style={{ height: "100%" }} alt="Image" /></Box>
            <Box h="35rem"><img src="/gallery/7.jpg" style={{ height: "100%" }} alt="Image" /></Box>

          </Carousel>
        </Box>

        <Flex flexFlow="column" bg="#FF9E2C" w="100vw" padding="4rem 5rem" gap="2rem" mt="8rem" zIndex={2}>
          <Text fontSize="3.5rem" fontWeight={700} color="white" textAlign="start" alignSelf="start">About Us</Text>
          <Text fontSize="3.2rem" fontWeight={400} color="#FFF9DA" textAlign="start" alignSelf="start">The best service, satisfied customers, delicious coffee from the most exotic countries and a wide range of drinks and desserts - that&apos;s all about us! <br /> Come to Eclectique Marseille and see for yourself. Wir warten auf Sie :)</Text>
        </Flex>

        <Flex w="80%" align="start" mt="7rem" flexFlow="column" gap="3rem">
          <Text fontSize="3.5rem" fontWeight={700} color="black" textAlign="start" alignSelf="start">Find Us</Text>
          <Box w="80vw" h="48rem">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10870.341266462889!2d15.4279549!3d47.0679844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476e357ec1a94877%3A0xcbdbde7992818744!2sDucks%20coffee%20shop!5e0!3m2!1sen!2sin!4v1671517308186!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "none" }}
            ></iframe>
          </Box>
        </Flex>

        <Flex mt="7rem" w="80%" gap="6rem" mb="5rem" flexWrap="wrap">

          <Flex boxShadow="-4px 4px 11px rgba(255, 153, 0, 0.27)" bg="white" flexFlow="column" padding="3rem 3rem" gap="2rem" borderRadius="2rem">
            <Text fontSize="3.5rem" fontWeight={700} color="black" textAlign="start" alignSelf="start">Operation Hours</Text>
            <UnorderedList fontSize="3rem" fontWeight={600} color="#7C7C7C" spacing={14} ml="0">
              <ListItem><span style={{ color: "#FFA800" }}>Monday</span> 07:30 - 19:00</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Tuesday</span> 07:30 - 19:00</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Wednesday</span> 07:30 - 19:00</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Thursday</span> 07:30 - 17:00</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Friday</span> 07:30 - 14:30</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Saturday</span> Closed</ListItem>
              <ListItem><span style={{ color: "#FFA800" }}>Sunday</span> 10:00 - 14:00</ListItem>
            </UnorderedList>
          </Flex>

          <hr style={{ backgroundColor: "#E9E9E9", color: "#E9E9E9", border: "none", height: "60rem", width: "2px" }} />

          <Flex flexFlow="column" gap="4rem" mt="2rem" w="40%">
            <Text fontSize="3.5rem" fontWeight={700} color="black">
              Follow us on <span style={{ color: "#FF5C00" }}>Instagram</span> at <span style={{ color: "#FFB800" }}>@ducks_coffee_shop</span>
            </Text>

            <Text fontSize="3rem" fontWeight={500} color="#7C7C7C">To know more and view about us!</Text>

            <Button
              _focus={{ transform: "scale(.95)" }}
              bg="#FFB800"
              borderRadius="2rem"
              transition="200ms"
              padding="2rem"
              color="white"
              fontSize="3rem"
              fontWeight={600}
              outline="none"
              cursor="pointer"
              border="none"
              w="40rem"
              h="8rem"
              onClick={() => window.open("https://instagram.com/ducks_coffee_shop/")?.focus()}
            >Open on Instagram</Button>
          </Flex>
        </Flex>
      </main>
    </>
  )
}
