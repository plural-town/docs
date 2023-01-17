import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useMemo } from "react";

interface TootAuthor {
  name: string;
  slug: string;
}

interface CommonOptions {
  dim?: boolean;
  byline?: TootAuthor;
  "byline-position"?: "top" | "bottom";
  children?: ReactNode;
}

interface MultipleAuthorTootProps extends CommonOptions {
  authors: TootAuthor[];
}

interface SingleAuthorTootProps extends CommonOptions {
  author: string;
  slug: string;
}

/* eslint-disable-next-line */
export type ExampleTootProps = SingleAuthorTootProps | MultipleAuthorTootProps;

export function ExampleToot({ byline, dim, children, ...props }: ExampleTootProps) {
  const authors = useMemo<TootAuthor[]>(() => {
    if ("author" in props) {
      return [
        {
          name: props.author,
          slug: props.slug,
        },
      ];
    }
    return props.authors;
  }, [props]);

  return (
    <Card data-note bg={dim ? "gray.200" : "white"} color={dim ? "gray.600" : "black"} w="full">
      <CardHeader>
        <Flex direction="row">
          <AvatarGroup max={3} spacing="-6">
            {authors.map((author) => (
              <Avatar key={author.slug} name={author.name} />
            ))}
          </AvatarGroup>
          <Stack flex="1" mx={3}>
            <HStack>
              {authors.map((author) => (
                <Heading size="sm" key={author.slug}>
                  {author.name}
                </Heading>
              ))}
            </HStack>
            <HStack>
              {authors.map((author) => (
                <Heading size="sm" key={author.slug}>
                  @{author.slug}
                </Heading>
              ))}
            </HStack>
          </Stack>
        </Flex>
      </CardHeader>
      <CardBody>
        {byline && props["byline-position"] !== "bottom" && (
          <Box mb={3}>
            Authored by {byline.name} (@{byline.slug})
          </Box>
        )}
        <Text fontSize="xl" mx={4}>
          {children}
        </Text>
        {byline && props["byline-position"] === "bottom" && (
          <Box mt={3}>
            Authored by {byline.name} (@{byline.slug})
          </Box>
        )}
      </CardBody>
    </Card>
  );
}

export default ExampleToot;
