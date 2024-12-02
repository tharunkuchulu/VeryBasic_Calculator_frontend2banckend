import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicButtons({ handleSubmit }) {
    return (
      <Button
        variant="contained"
        sx={{ m: 1, backgroundColor: '#7b5e57', marginLeft: '10px' }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    );
  }
  