import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import ExampleToot from "../components/example-toot/ExampleToot";
import Arrow from "../components/old-vs-new/arrow/Arrow";
import New from "../components/old-vs-new/new/New";
import Old from "../components/old-vs-new/old/Old";
import OldVsNew from "../components/old-vs-new/OldVsNew";

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
            <Heading as="h1">Plural-Friendly Social Networks</Heading>
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

        <Center mt={6} mb={1}>
          <Heading as="h2" size="md" textAlign="center" fontWeight="normal">
            Identity is complicated on most social media platforms.
          </Heading>
        </Center>
        <Center mt={1} mb={4}>
          <Heading size="xl" textAlign="center">
            PluralTown changes the rules.
          </Heading>
        </Center>

        <Center mt={8} mb={2}>
          <Heading as="h3" size="md" textAlign="center">
            You can properly attribute messages on PluralTown.
          </Heading>
        </Center>

        <OldVsNew>
          <Old>
            <ExampleToot author="Slime Airlines" slug="slime" dim>
              We&apos;re so sorry we lost your cat and broke your guitar. Can you DM us, and
              we&apos;ll try to get you a $10 credit? - Karen
            </ExampleToot>
          </Old>
          <Arrow />
          <New>
            <ExampleToot
              author="Slime Airlines"
              slug="slime"
              byline={{
                slug: "slime.karen",
                name: "Karen at Slime",
              }}
              byline-position="bottom"
            >
              We&apos;re so sorry we lost your cat and broke your guitar. Can you DM us, and
              we&apos;ll try to get you a $10 credit?
            </ExampleToot>
          </New>
        </OldVsNew>

        <Center mt={3} mb={8}>
          <Text fontSize="sm" textAlign="center">
            (Slime Airlines may still break guitars)
          </Text>
        </Center>
      </Container>
    </>
  );
}

export default Index;
