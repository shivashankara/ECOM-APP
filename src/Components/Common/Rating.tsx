'use client'
import  React,{useState} from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function BasicRating({count, mode}:any) {
  const [value, setValue] = useState<number | null>(count);

  return (
    <Box
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        readOnly ={mode ==='readOnly'}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
    </Box>
  );
}
