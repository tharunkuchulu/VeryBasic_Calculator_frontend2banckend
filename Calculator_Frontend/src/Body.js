import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import axios from 'axios'; // Import Axios
import BasicTextFields from './inputs';
import MultipleSelect from './operation';
import BasicButtons from './submit';

function Body() {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async () => {
        try {
            const payload = {
                firstNumber,
                secondNumber,
                operation,
            };

            console.log("Payload sent to backend:", payload); // Debug the payload

            const response = await axios.post('http://127.0.0.1:8000/calculate', payload);

            setResult(response.data.result);
        } catch (error) {
            console.error('Axios Error:', error);
            if (error.response) {
                // Server responded with a status other than 200 range
                setResult(`Error: ${error.response.data.error || 'Unknown error'}`);
            } else if (error.request) {
                // Request was made but no response received
                setResult('Error: No response received from the server');
            } else {
                // Something else happened during the request setup
                setResult('Error: Unable to calculate result');
            }
        }
    };

    return (
        <Box>
            <Paper
                sx={{
                    p: 3,
                    elevation: 3,
                    backgroundColor: '#5d4037',
                    color: '#ffffff',
                    maxWidth: '600px',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    SIMPLE CALCULATOR
                </Typography>
                <Typography variant="body1">
                    Enter the numbers and select the operation to perform the calculation.
                </Typography>
                <BasicTextFields
                    firstNumber={firstNumber}
                    secondNumber={secondNumber}
                    setFirstNumber={setFirstNumber}
                    setSecondNumber={setSecondNumber}
                />
                <MultipleSelect operation={operation} setOperation={setOperation} />
                <BasicButtons handleSubmit={handleSubmit} />
                <Typography variant="body1">Result is: {result}</Typography>
            </Paper>
        </Box>
    );
}

export default Body;
