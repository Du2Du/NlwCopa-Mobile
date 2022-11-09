import { Icon, VStack } from "native-base";
import React from "react";
import { Button, Header } from "../../components";
import { Feather } from "@expo/vector-icons";

export const Pools: React.FC = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus Bolões" />

      <VStack
        mt={6}
        mx={5}
        borderBottomWidth={1}
        borderBottomColor="gray.600"
        pb={4}
        mb={4}
      >
        <Button
          leftIcon={<Icon as={Feather} name="search" color="black" size="md" />}
          title="BUSCAR BOLÃO POR CÓDIGO"
        />
      </VStack>
    </VStack>
  );
};
