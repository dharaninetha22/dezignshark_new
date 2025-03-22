import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { ReactNode } from 'react';
import React from 'react';
import { SxProps, Theme } from '@mui/material';

interface CustomInputProps extends InputBaseProps {
  endAdornment?: ReactNode;
  sx?: SxProps<Theme>;  // ✅ Define sx properly
}

const CustomInputWrapper = styled(InputBase)(({ theme }) => ({
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
    padding: '10px 12px',  // Default padding
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      borderColor: '#fc0000',
      boxShadow: '0px 3px 6px #7643EB4D',
      backgroundColor: 'transparent',
    },
  },
  '& .MuiInputAdornment-positionEnd': {
    marginLeft: theme.spacing(1),
    position: 'absolute',
    right: "8px",
    fontSize: '14px',
  },
}));

export default function CustomInput(props: CustomInputProps) {
  const { endAdornment, sx, ...other } = props;

  return (
    <CustomInputWrapper
      {...other}
      sx={{
        '& .MuiInputBase-input': { height: (sx as any)?.height || 'auto' },  // ✅ Correctly extracts height
        ...sx,
      }}
      endAdornment={endAdornment}
    />
  );
}
