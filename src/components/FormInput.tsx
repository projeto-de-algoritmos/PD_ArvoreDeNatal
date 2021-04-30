import React from 'react';
import { Box, Text, NumberInput, NumberInputField } from '@chakra-ui/react';

type FormInputValues = {
    value: number,
    weight: number,
    onChangeValue: (value: string) => void,
    onChangeWeight: (value: string) => void
}

const FormInput: React.FC<FormInputValues> = ({value, weight, onChangeValue, onChangeWeight}) => {
  return (
    <>
        <Box m="5px 20px 5px 0">
        <Text fontFamily="Roboto" fontSize="0.9vw">Qtd. Enfeites</Text>
        <NumberInput w="7vw" borderColor="#578a4e" value={value} onChange={onChangeValue}>
            <NumberInputField />
        </NumberInput>
        </Box>
        <Box m="5px 20px 5px 0">
            <Text fontFamily="Roboto" fontSize="0.9vw">Peso:</Text>
            <NumberInput w="7vw" borderColor="#578a4e" value={weight} onChange={onChangeWeight}>
                <NumberInputField />
            </NumberInput>
        </Box>
    </>
  );
}

export default FormInput;