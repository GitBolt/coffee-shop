/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { Inter } from '@next/font/google'
import { Box, Flex, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import { Navbar } from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ducks Coffee</title>
        <meta name="description" content="Cafe in Graz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main style={{ width: "100vw", display: "flex", justifyContent: "center", marginTop: "12rem" }}>

        <Flex w="80%" justify="space-between" fontFamily="Inter">
          <Flex flexFlow="column">
            <Text fontSize="5rem" fontWeight={700} color="#FF9900" m="0">Ducks Coffee Shop</Text>
            <Text fontSize="2rem" fontWeight={600} color="#FFC737">Cafe in Graz with wide range of drinks and desserts.</Text>

            <Box
              borderRadius="2rem" bg="linear-gradient(234.76deg, #FFF8BB -26.23%, #FFFFFF 45.45%)"
              boxShadow="2px 2px 20px rgba(103, 103, 103, 0.19)"
              mt="2rem"
              w="70%"
            >
              <UnorderedList fontSize="2rem" color="#232323" fontWeight={700}>
                <ListItem mt="1rem">Kaffee</ListItem>
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

          <img src="/coffee.png" alt="Coffee" />
        </Flex>

        <img style={{ position: "absolute", width: "100vw" }} src="/gradient.png" alt="Gradient" />

        <Flex flexFlow="column">
          <Text fontSize="3.5rem" fontWeight={700} color="black">Image Gallery</Text>
        </Flex>
      </main>
    </>
  )
}
