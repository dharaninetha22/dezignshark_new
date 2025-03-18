import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { ReactNode } from 'react';
import React from 'react';

interface CustomInputProps extends InputBaseProps {
  endAdornment?: ReactNode;
}

const CustomInputWrapper = styled(InputBase)(({ theme }) => ({
  // backgroundColor: theme.palette.background.paper,
  'label + &': {
    marginTop: theme.spacing(2.0),
  },
  '& .MuiInputBase-input': {
    position: 'relative',
    backgroundColor: 'transparent',
    border: `1.5px solid ${theme.palette.divider}`,
    borderRadius: "6px",
    fontSize: 14,
    color: theme.palette.text.primary,
    padding: '6px 10px', 
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#30779d', 
      boxShadow: '0px 3px 6px #7643EB4D', 
      backgroundColor: 'transparent',
      border: `1.5px solid #fc0000`,
    },
  },
  '& .MuiInputAdornment-positionEnd': {
    marginLeft: theme.spacing(1),
    position: 'absolute',
    right: "8px",
    fontSize : '14px',
  },
}));

export default function CustomInput(props: CustomInputProps) {
  const { endAdornment, ...other } = props;
  return (
    <CustomInputWrapper
      {...other}
      endAdornment={endAdornment} 
    />
  );
}
