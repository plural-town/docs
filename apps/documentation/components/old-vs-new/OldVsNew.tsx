import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface OldVsNewProps {
  children?: ReactNode;
}

export function OldVsNew({ children }: OldVsNewProps) {
  return (
    <Stack
      align="center"
      spacing={{ base: 1, sm: 3, md: 5 }}
      py={2}
      direction={{ base: "column", md: "row" }}
    >
      {children}
    </Stack>
  );
}

export default OldVsNew;
