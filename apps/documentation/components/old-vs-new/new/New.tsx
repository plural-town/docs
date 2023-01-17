import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface NewProps {
  children?: ReactNode;
}

export function New({ children }: NewProps) {
  return (
    <Flex flex="1" w="full">
      {children}
    </Flex>
  );
}

export default New;
