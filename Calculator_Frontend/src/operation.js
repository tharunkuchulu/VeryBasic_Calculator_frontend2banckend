import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      backgroundColor: 'black', // Change menu background to dark gray for contrast
    },
  },
};

const operations = [
  'Addition',
  'Subtraction',
  'Division',
  'Multiplication',
];


export default function SelectOperation({ operation, setOperation }) {
    const handleChange = (event) => {
      setOperation(event.target.value);
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 465 }}>
          <InputLabel id="select-operation-label" sx={{ color: 'white' }}>
            Select Operation
          </InputLabel>
          <Select
            labelId="select-operation-label"
            id="select-operation"
            value={operation}
            onChange={handleChange}
            input={<OutlinedInput label="Select Operation" sx={{ color: 'white' }} />}
            MenuProps={MenuProps}
            sx={{
              color: 'white',
              '.MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: 'white' },
            }}
          >
            {operations.map((op) => (
              <MenuItem key={op} value={op} style={{ color: 'white' }}>
                {op}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    );
  }
  