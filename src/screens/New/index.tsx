import { Heading, Text, VStack } from "native-base";
import React from "react";
import { Button, Header, Input } from "../../components";
import Logo from "../../assets/logo.svg";

export const New: React.FC = () => {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />

      <VStack mt={8} mx={5} alignItems="center">
        <Logo />

        <Heading
          fontFamily="heading"
          color="white"
          fontSize="xl"
          my={8}
          textAlign="center"
        >
          Crie seu próprio bolão da copa {"\n"}e compartilhe entre amigos!
        </Heading>

        <Input mb={2} placeholder="Qual nome do seu bolão?" />
        <Button title="CRIAR MEU BOLÃO" />

        <Text color="gray.200" fontSize="sm" textAlign="center" px={10} mt={4}>
          Após criar seu bolão, você receberá um código únicoque poderá usar
          para convidar outras pessoas
        </Text>
      </VStack>
    </VStack>
  );
};
