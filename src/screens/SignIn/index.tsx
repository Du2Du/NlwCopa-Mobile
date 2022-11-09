import { Fontisto } from "@expo/vector-icons";
import { Center, Icon, Text } from "native-base";
import React from "react";
import Logo from "../../assets/logo.svg";
import { Button } from "../../components";
import { useAuth } from "../../contexts";

export const SignIn: React.FC = () => {
  const { signIn } = useAuth();
  return (
    <Center flex={1} bgColor="gray.900" fontFamily="heading" p={7}>
      <Logo width={212} height={40} />
      <Button
        title="ENTRAR COM O GOOGLE"
        mt={12}
        type="SECONDARY"
        onPress={signIn}
        leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
      />
      <Text mt={4} color="white" textAlign="center">
        Não utilizamos nenhuma informação além{"\n"} do seu e-mail para criação
        de sua conta
      </Text>
    </Center>
  );
};
