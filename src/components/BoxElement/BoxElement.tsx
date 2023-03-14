import { Container } from "@chakra-ui/react";

import { Text } from "../Text/Text";

export function BoxElement({
  label,
  value,
}: {
  label: string;
  value: string | undefined;
}) {
  return (
    <Container>
      <Text fontWeight="bold">{label}</Text>
      <Text>{value ?? "-"}</Text>
    </Container>
  );
}
