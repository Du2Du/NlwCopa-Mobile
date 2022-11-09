import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import React from "react";

export interface ButtonParams extends IButtonProps {
  title: string;
  type?: "PRIMARY" | "SECONDARY";
}

export const Button: React.FC<ButtonParams> = ({
  title,
  type = "PRIMARY",
  ...rest
}) => {
  return (
    <ButtonNativeBase
      w="full"
      h={14}
      rounded="sm"
      fontSize="md"
      textTransform="uppercase"
      bg={type === "SECONDARY" ? "red.500" : "yellow.500"}
      _pressed={{
        bg: type === "SECONDARY" ? "red.600" : "yellow.600",
      }}
      _loading={{
        _spinner: { color: "#000" },
      }}
      {...rest}
    >
      <Text
        fontSize="sm"
        fontFamily="heading"
        color={type === "SECONDARY" ? "white" : "#000"}
      >
        {title}
      </Text>
    </ButtonNativeBase>
  );
};
