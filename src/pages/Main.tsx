import React from 'react';
import { 
    Box, 
    Image, 
    Text,
    NumberInput,
    NumberInputField,
} from '@chakra-ui/react';
import {
    
  } from "@chakra-ui/react"
import Boy from '../asserts/Boy.png';
import Tree from '../asserts/xmax-tree.png';
import problem from '../asserts/problem';
import FormInput from '../components/FormInput';

const Main: React.FC = () => {
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
                            <Text>Digite o peso suportado pelo galho 1:</Text>
                            <NumberInput width="17rem" borderColor="#578a4e" marginBottom="10px">
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                        </Box>

                        <Box>
                            <Text>Digite o peso suportado pelo galho 2:</Text>
                            <NumberInput width="17rem" borderColor="#578a4e" marginBottom="10px">
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                        </Box>

                        <Box>
                            <Text>Digite o peso suportado pelo galho 3:</Text>
                            <NumberInput width="17rem" borderColor="#578a4e" marginBottom="10px">
                                <NumberInputField />
                            </NumberInput>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>

                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
                            </Box>
                            <Box
                                d="flex"
                                w="100%"
                            >
                                <FormInput/>
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