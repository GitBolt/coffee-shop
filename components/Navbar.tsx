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
      zIndex={5}
    >
      <Flex gap="2rem" align="center" justify="center" cursor="pointer" onClick={() => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        })
      }}>
        <img src="/logo.png" alt="Logo" style={{ width: "4rem" }} />
        <Text fontSize="2rem" fontWeight={700} color="#FF9900">Ducks Coffee Shop</Text>
      </Flex>

      <Flex gap="2rem" justify="center" align="center">
        <Text fontSize="1.8rem" fontWeight={600} color="#7A7A7A" cursor="pointer" onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight / 3,
            left: 0,
            behavior: 'smooth',
          });
        }}>About Us</Text>
        <Text fontSize="1.8rem" fontWeight={600} color="#7A7A7A" cursor="pointer" onClick={() => {
          window.scrollTo({
            top: document.body.scrollHeight / 2,
            left: 0,
            behavior: 'smooth',
          });
        }}>Find Us</Text>
      </Flex>
    </Flex>
  )
}