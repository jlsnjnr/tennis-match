import React, { useState } from "react";
import {
  Text,
  HStack,
  Center,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Button,
} from "native-base";
import { PlayerSelect } from "./components/PlayersSelect";
import { Alert } from "react-native";

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

  const [setsOne, setWinnerPointOne] = useState(0);
  const [setsTwo, setWinnerPointTwo] = useState(0);

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
        setWinnerPointOne(setsOne + 1);
        setPointsPlayerOne(0);
        setPointsPlayerTwo(0);
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
        setWinnerPointTwo(setsTwo + 1);
        setPointsPlayerTwo(0);
        setPointsPlayerOne(0);
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

  if (pointsPlayerOne === 40 && pointsPlayerTwo === 40) {
    setPointsPlayerOne(0);
    setPointsPlayerTwo(0);
  }

  return (
    <NativeBaseProvider>
      <Center bgColor="muted.50" px={4} flex={1}>
        <VStack
          position="relative"
          height="full"
          w="full"
          justifyContent="center"
          alignItems="center"
        >
          {step === 1 && (
            <PlayerSelect
              namePlayerOne={namePlayerOne}
              setPlayerOne={setPlayerOne}
              namePlayerTwo={namePlayerTwo}
              setPlayerTwo={setPlayerTwo}
              setStep={setStep}
              step={step}
            />
          )}

          {step === 2 && (
            <>
              <HStack position="absolute" left="0" top="0" mt="10">
                <VStack>
                  <Text
                    fontSize={20}
                    fontWeight={setsOne > setsTwo ? "bold" : "normal"}
                    color="gray.400"
                  >
                    {setsOne}
                  </Text>
                  <Text
                    fontWeight={setsTwo > setsOne ? "bold" : "normal"}
                    fontSize={20}
                    color="gray.400"
                  >
                    {setsTwo}
                  </Text>
                </VStack>
              </HStack>

              <HStack
                w="100%"
                alignItems="center"
                justifyContent="space-between"
                mx="5"
              >
                <VStack w="49%">
                  <Text>{namePlayerOne}</Text>
                  <Text fontSize={42} fontWeight={"bold"}>
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
                    borderColor="tertiary.500"
                    borderWidth="1"
                    backgroundColor="none"
                    mt="2"
                    w="100%"
                    rounded="md"
                    onPress={removePointsPlayer}
                    color="tertiary.500"
                  >
                    <Text color="tertiary.500">-</Text>
                  </Button>
                </VStack>

                <VStack w="49%">
                  <Text>{namePlayerTwo}</Text>
                  <Text fontSize={42} fontWeight={"bold"}>
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
                    borderColor="tertiary.500"
                    borderWidth="1"
                    backgroundColor="none"
                    mt="2"
                    w="100%"
                    rounded="md"
                    onPress={removePointsPlayerTwo}
                    color="tertiary.500"
                  >
                    <Text color="tertiary.500">-</Text>
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
