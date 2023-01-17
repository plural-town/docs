import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface OldProps {
  children?: ReactNode;
}

export function Old({ children }: OldProps) {
  return (
    <Flex flex="1" w="full">
      {children}
    </Flex>
  );
}

export default Old;
