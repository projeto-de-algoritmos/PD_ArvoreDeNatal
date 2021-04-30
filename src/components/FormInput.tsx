import React from 'react';
import { Box, Text, NumberInput, NumberInputField } from '@chakra-ui/react';

const FormInput: React.FC = () => {
  return (
    <>
        <Box m="5px 20px 5px 0">
        <Text>Qtd. Enfeites</Text>
        <NumberInput w="8rem" borderColor="#578a4e">
            <NumberInputField />
        </NumberInput>
        </Box>
        <Box m="5px 20px 5px 0">
            <Text>Peso:</Text>
            <NumberInput w="8rem" borderColor="#578a4e">
                <NumberInputField />
            </NumberInput>
        </Box>
    </>
  );
}

export default FormInput;