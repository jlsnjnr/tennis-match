import { Button, HStack, Input, Text, View } from "native-base";

interface PlayerSelectProps {
  namePlayerOne: any;
  setPlayerOne: any;
  namePlayerTwo: any;
  setPlayerTwo: any;
  setStep: any;
  step: any;
}

export function PlayerSelect({
  namePlayerOne,
  setPlayerOne,
  namePlayerTwo,
  setPlayerTwo,
  setStep,
  step,
}: PlayerSelectProps) {
  return (
    <>
      <Text mr="auto" fontSize={20} py="4" textAlign="left" fontWeight={"bold"}>
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
  );
}
