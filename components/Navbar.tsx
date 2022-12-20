/* eslint-disable @next/next/no-img-element */
import { Flex, Text } from "@chakra-ui/react"
import { Inter } from "@next/font/google"


export const Navbar = () => {
  return (
    <Flex
      h="6rem"
      w="100vw"
      borderBottom="1px solid #DFDFDF"
      fontFamily="Inter"
      pos="fixed"
      top="0"
      bg="white"
      padding="0 2rem"
      justify="space-between"
    >
      <Flex gap="2rem" align="center" justify="center">
        <img src="/logo.png" alt="Logo"  style={{width:"4rem"}}/>
        <Text fontSize="2rem" fontWeight={700} color="#FF9900">Ducks Coffee Shop</Text>
      </Flex>

      <Flex gap="2rem" justify="center" align="center">
        <Text fontSize="1.8rem" fontWeight={600} color="#7A7A7A">About Us</Text>
        <Text fontSize="1.8rem" fontWeight={600} color="#7A7A7A">Find Us</Text>
      </Flex>
    </Flex>
  )
}