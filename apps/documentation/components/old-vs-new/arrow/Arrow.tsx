import { Box, Icon } from "@chakra-ui/react";
import { AiOutlineArrowRight, AiOutlineDown } from "react-icons/ai";

/* eslint-disable-next-line */
export interface ArrowProps {}

export function Arrow(props: ArrowProps) {
  return (
    <Box>
      <Icon
        display={{
          base: "none",
          md: "block",
        }}
        boxSize={6}
        as={AiOutlineArrowRight}
      />
      <Icon display={{ md: "none" }} boxSize={6} as={AiOutlineDown} />
    </Box>
  );
}

export default Arrow;
