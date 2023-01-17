import { Box, Button, Container, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";

export function Index() {
  return (
    <>
      <Head>
        <title>Join a PluralTown</title>
      </Head>
      <Container maxW="7xl">
        <Stack
          align="center"
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading as="h1">PluralTown Software</Heading>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
              <NextLink href="/servers/" passHref legacyBehavior>
                <Button
                  as="a"
                  rounded="full"
                  size="lg"
                  fontWeight="normal"
                  px={6}
                  colorScheme="red"
                  bg="red.400"
                  _hover={{ bg: "red.500" }}
                >
                  Join a PluralTown Server
                </Button>
              </NextLink>
              <NextLink href="/docs/admin/" passHref legacyBehavior>
                <Button as="a" rounded="full" size="lg" fontWeight="normal" px={6}>
                  Host a Server
                </Button>
              </NextLink>
            </Stack>
          </Stack>
          <Flex flex="1" justify="center" align="center" position="relative" w="full">
            <Box
              position="relative"
              height="300px"
              rounded="2xl"
              boxShadow="2xl"
              width="full"
              overflow="hidden"
            >
              <Image
                alt="Hero Image"
                fit="cover"
                align="center"
                width="100%"
                height="100%"
                src="https://placekitten.com/800/600"
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
}

export default Index;
