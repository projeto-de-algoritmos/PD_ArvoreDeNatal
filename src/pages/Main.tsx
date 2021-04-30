import React, {useState} from 'react';
import { 
    Box, 
    Image, 
    Text,
    NumberInput,
    NumberInputField,
    Button,
} from '@chakra-ui/react';
import {
    
  } from "@chakra-ui/react"
import Boy from '../asserts/Boy.png';
import Tree from '../asserts/xmax-tree.png';
import problem from '../asserts/problem';
import FormInput from '../components/FormInput';

interface branchParams {
    value: number,
    weight: number
};

const Main: React.FC = () => {

    const [branchCapacity, setBranchCapacity] = useState<number>(0);
    const [branch2Capacity, setBranch2Capacity] = useState<number>(0);
    const [branch3Capacity, setBranch3Capacity] = useState<number>(0);

    const [branch1Value, setBranch1Value] = useState<number>(0);
    const [branch2Value, setBranch2Value] = useState<number>(0);
    const [branch3Value, setBranch3Value] = useState<number>(0);
    const [branch4Value, setBranch4Value] = useState<number>(0);
    const [branch5Value, setBranch5Value] = useState<number>(0);
    const [branch6Value, setBranch6Value] = useState<number>(0);
    const [branch7Value, setBranch7Value] = useState<number>(0);
    const [branch8Value, setBranch8Value] = useState<number>(0);
    const [branch9Value, setBranch9Value] = useState<number>(0);
    const [branch10Value, setBranch10Value] = useState<number>(0);
    const [branch11Value, setBranch11Value] = useState<number>(0);
    const [branch12Value, setBranch12Value] = useState<number>(0);
    const [branch13Value, setBranch13Value] = useState<number>(0);
    const [branch14Value, setBranch14Value] = useState<number>(0);
    const [branch15Value, setBranch15Value] = useState<number>(0);

    const [branch1Weight, setBranch1Weight] = useState<number>(0);
    const [branch2Weight, setBranch2Weight] = useState<number>(0);
    const [branch3Weight, setBranch3Weight] = useState<number>(0);
    const [branch4Weight, setBranch4Weight] = useState<number>(0);
    const [branch5Weight, setBranch5Weight] = useState<number>(0);
    const [branch6Weight, setBranch6Weight] = useState<number>(0);
    const [branch7Weight, setBranch7Weight] = useState<number>(0);
    const [branch8Weight, setBranch8Weight] = useState<number>(0);
    const [branch9Weight, setBranch9Weight] = useState<number>(0);
    const [branch10Weight, setBranch10Weight] = useState<number>(0);
    const [branch11Weight, setBranch11Weight] = useState<number>(0);
    const [branch12Weight, setBranch12Weight] = useState<number>(0);
    const [branch13Weight, setBranch13Weight] = useState<number>(0);
    const [branch14Weight, setBranch14Weight] = useState<number>(0);
    const [branch15Weight, setBranch15Weight] = useState<number>(0);

    const submit = () => {
        let branch1Array: Array<branchParams> = [];
        let branch2Array: Array<branchParams> = [];
        let branch3Array: Array<branchParams> = [];

        branch1Array.push({value: branch1Value, weight: branch1Weight});
        branch1Array.push({value: branch2Value, weight: branch2Weight});
        branch1Array.push({value: branch3Value, weight: branch3Weight});
        branch1Array.push({value: branch4Value, weight: branch4Weight});
        branch1Array.push({value: branch5Value, weight: branch5Weight});

        branch2Array.push({value: branch6Value, weight: branch6Weight});
        branch2Array.push({value: branch7Value, weight: branch7Weight});
        branch2Array.push({value: branch8Value, weight: branch8Weight});
        branch2Array.push({value: branch9Value, weight: branch9Weight});
        branch2Array.push({value: branch10Value, weight: branch10Weight});

        branch3Array.push({value: branch11Value, weight: branch11Weight});
        branch3Array.push({value: branch12Value, weight: branch12Weight});
        branch3Array.push({value: branch13Value, weight: branch13Weight});
        branch3Array.push({value: branch14Value, weight: branch14Weight});
        branch3Array.push({value: branch15Value, weight: branch15Weight});
    }

  return (
      <>
        <Box>
              <Image src={Tree}
                w="38vw"
                pos="absolute"
                bottom="0"
                left="0"
              />
              <Image src={Boy} 
                w="10vw"
                pos="absolute"
                bottom="0"
                left="20vw"
              />
          </Box>
          <Button pos="absolute" bottom="2vh" left="30vw" w="10vw" background="#eb6a7f" onClick={() => submit()}>
              Calcular
          </Button>
          <Box
            w="100%"
            h="100vh"
            background="#F6F6F6"
            d="flex"
            justifyContent="flex-end"
          >
            <Box
                width="60%"
                height="100vh"
                background="#23187"
                padding="20px"
                display="flex"
                flexDir="column"
            >
                <Text
                    fontFamily="Roboto"
                    fontSize="2rem"
                    textAlign="center"
                    fontWeight="bold"
                    marginBottom="20px"
                >
                    Árvore de Natal
                </Text>
                <Text
                    fontFamily="Roboto"
                    fontSize="0.9vw"
                    textAlign="justify" 
                >
                    {problem}
                </Text>
                <Box
                    w="100%"
                    height="60vh"
                    display="flex"
                    padding="30px 0"
                >
                    <Box w="100%" d="flex" justifyContent="space-around">
                        <Box>
                            <Text fontFamily="Roboto" fontSize="0.9vw">Digite o peso suportado pelo galho 1:</Text>
                            <NumberInput 
                                width="15vw" 
                                borderColor="#578a4e" 
                                marginBottom="10px" 
                                value={branchCapacity} 
                                onChange={(value) => setBranchCapacity(Number(value))}
                            >
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch1Value}
                                    onChangeValue={(value) => setBranch1Value(Number(value))}
                                    weight={branch1Weight}
                                    onChangeWeight={(value) => setBranch1Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch2Value}
                                    onChangeValue={(value) => setBranch2Value(Number(value))}
                                    weight={branch2Weight}
                                    onChangeWeight={(value) => setBranch2Weight(Number(value))}
                                />
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch3Value}
                                    onChangeValue={(value) => setBranch3Value(Number(value))}
                                    weight={branch3Weight}
                                    onChangeWeight={(value) => setBranch3Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch4Value}
                                    onChangeValue={(value) => setBranch4Value(Number(value))}
                                    weight={branch4Weight}
                                    onChangeWeight={(value) => setBranch4Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch5Value}
                                    onChangeValue={(value) => setBranch5Value(Number(value))}
                                    weight={branch5Weight}
                                    onChangeWeight={(value) => setBranch5Weight(Number(value))}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <Text fontFamily="Roboto" fontSize="0.9vw">Digite o peso suportado pelo galho 2:</Text>
                            <NumberInput width="15vw" 
                                borderColor="#578a4e" 
                                marginBottom="10px" 
                                value={branch2Capacity} 
                                onChange={(value) => setBranch2Capacity(Number(value))}>
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch6Value}
                                    onChangeValue={(value) => setBranch6Value(Number(value))}
                                    weight={branch6Weight}
                                    onChangeWeight={(value) => setBranch6Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch7Value}
                                    onChangeValue={(value) => setBranch7Value(Number(value))}
                                    weight={branch7Weight}
                                    onChangeWeight={(value) => setBranch7Weight(Number(value))}
                                />
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch8Value}
                                    onChangeValue={(value) => setBranch8Value(Number(value))}
                                    weight={branch8Weight}
                                    onChangeWeight={(value) => setBranch8Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch9Value}
                                    onChangeValue={(value) => setBranch9Value(Number(value))}
                                    weight={branch9Weight}
                                    onChangeWeight={(value) => setBranch9Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch10Value}
                                    onChangeValue={(value) => setBranch10Value(Number(value))}
                                    weight={branch10Weight}
                                    onChangeWeight={(value) => setBranch10Weight(Number(value))}
                                />
                            </Box>
                        </Box>

                        <Box>
                            <Text fontFamily="Roboto" fontSize="0.9vw">Digite o peso suportado pelo galho 3:</Text>
                            <NumberInput width="15vw" 
                                borderColor="#578a4e" 
                                marginBottom="10px" 
                                value={branch3Capacity} 
                                onChange={(value) => setBranch3Capacity(Number(value))}>
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch11Value}
                                    onChangeValue={(value) => setBranch11Value(Number(value))}
                                    weight={branch11Weight}
                                    onChangeWeight={(value) => setBranch11Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch12Value}
                                    onChangeValue={(value) => setBranch12Value(Number(value))}
                                    weight={branch12Weight}
                                    onChangeWeight={(value) => setBranch12Weight(Number(value))}
                                />
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch13Value}
                                    onChangeValue={(value) => setBranch13Value(Number(value))}
                                    weight={branch13Weight}
                                    onChangeWeight={(value) => setBranch13Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch14Value}
                                    onChangeValue={(value) => setBranch14Value(Number(value))}
                                    weight={branch14Weight}
                                    onChangeWeight={(value) => setBranch14Weight(Number(value))}
                                />
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput
                                    value={branch15Value}
                                    onChangeValue={(value) => setBranch15Value(Number(value))}
                                    weight={branch15Weight}
                                    onChangeWeight={(value) => setBranch15Weight(Number(value))}
                                />
                            </Box>
                        </Box>                       
                    </Box>
                </Box>
          </Box>        
      </Box>

      </>
  );
}

export default Main;