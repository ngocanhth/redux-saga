import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

export const PrimayButton = styled(Button)({
//   boxShadow: 'none',
//   textTransform: 'uppercase',
//   fontSize: 16,
//   padding: '6px 12px',
//   border: '1px solid #131313',
//   lineHeight: 1.5,
//   backgroundColor: '#131313',
  fontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#323233',
    borderColor: '#323233',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#323233',
    borderColor: '#323233',
  },
  '&:focus': {
    boxShadow: 'none',
    backgroundColor: '#323233',
    borderColor: '#323233',
  },
});

export const SecondaryButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  '&:hover': {
    backgroundColor: purple[700],
  },
}));

