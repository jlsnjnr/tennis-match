import React, { useState } from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
  Input,
  Button,
} from "native-base";

const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

export default function App() {
  const [step, setStep] = useState(1);
  const [namePlayerOne, setPlayerOne] = useState("");
  const [namePlayerTwo, setPlayerTwo] = useState("");

  const [pointsPlayerOne, setPointsPlayerOne] = useState(0);
  const [pointsPlayerTwo, setPointsPlayerTwo] = useState(0);

  const setPointsPlayer = () => {
    switch (pointsPlayerOne) {
      case 0:
        setPointsPlayerOne(15);
        break;
      case 15:
        setPointsPlayerOne(30);
        break;
      case 30:
        setPointsPlayerOne(40);
        break;
      case 40:
        setPointsPlayerOne(50);
        break;
      default:
    }
  };

  const setPointsSecond = () => {
    switch (pointsPlayerTwo) {
      case 0:
        setPointsPlayerTwo(15);
        break;
      case 15:
        setPointsPlayerTwo(30);
        break;
      case 30:
        setPointsPlayerTwo(40);
        break;
      case 40:
        setPointsPlayerTwo(50);
        break;
      default:
    }
  };

  const removePointsPlayer = () => {
    switch (pointsPlayerOne) {
      case 15:
        setPointsPlayerOne(0);
        break;
      case 30:
        setPointsPlayerOne(15);
        break;
      case 40:
        setPointsPlayerOne(30);
        break;
      default:
    }
  };

  const removePointsPlayerTwo = () => {
    switch (pointsPlayerTwo) {
      case 15:
        setPointsPlayerTwo(0);
        break;
      case 30:
        setPointsPlayerTwo(15);
        break;
      case 40:
        setPointsPlayerTwo(30);
        break;
      default:
    }
  };

  return (
    <NativeBaseProvider>
      <Center bgColor="muted.50" px={4} flex={1}>
        <VStack w="full" alignItems="center">
          {step === 1 && (
            <>
              <Text
                mr="auto"
                fontSize={20}
                py="4"
                textAlign="left"
                fontWeight={"bold"}
              >
                Quem vai jogar? 🎾
              </Text>

              <HStack
                w="100%"
                mx="5"
                justifyContent={"space-between"}
                alignItems="center"
              >
                <Input
                  value={namePlayerOne}
                  onChangeText={(text) => setPlayerOne(text)}
                  h="12"
                  placeholder="Jogador 1"
                  w="45%"
                  rounded="md"
                />

                <Text>X</Text>

                <Input
                  value={namePlayerTwo}
                  onChangeText={(text) => setPlayerTwo(text)}
                  h="12"
                  placeholder="Jogador 2"
                  w="45%"
                  rounded="md"
                />
              </HStack>

              <Button
                h="12"
                background="tertiary.500"
                mt="4"
                alignItems="center"
                w="100%"
                rounded="md"
                onPress={() => setStep(step + 1)}
              >
                Próximo
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <HStack mr="auto" mb="4">
                <VStack>
                  <Text fontSize={14} color="gray.400">
                    2
                  </Text>
                  <Text fontSize={14} fontWeight={"bold"} color="gray.400">
                    4
                  </Text>
                </VStack>
              </HStack>

              <HStack w="100%" justifyContent="space-between" mx="5">
                <VStack w="49%">
                  <Text>{namePlayerOne}</Text>
                  <Text fontSize={32} fontWeight={"bold"}>
                    {pointsPlayerOne}
                  </Text>
                  <Button
                    h="12"
                    background="tertiary.500"
                    mt="4"
                    w="100%"
                    rounded="md"
                    onPress={setPointsPlayer}
                  >
                    +
                  </Button>

                  <Button
                    h="12"
                    background="tertiary.500"
                    mt="2"
                    w="100%"
                    rounded="md"
                    onPress={removePointsPlayer}
                  >
                    -
                  </Button>
                </VStack>

                <VStack w="49%">
                  <Text>{namePlayerTwo}</Text>
                  <Text fontSize={32} fontWeight={"bold"}>
                    {pointsPlayerTwo}
                  </Text>
                  <Button
                    h="12"
                    background="tertiary.500"
                    mt="4"
                    w="100%"
                    rounded="md"
                    onPress={setPointsSecond}
                  >
                    +
                  </Button>

                  <Button
                    h="12"
                    background="tertiary.500"
                    mt="2"
                    w="100%"
                    rounded="md"
                    onPress={removePointsPlayerTwo}
                  >
                    -
                  </Button>
                </VStack>
              </HStack>
            </>
          )}
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
