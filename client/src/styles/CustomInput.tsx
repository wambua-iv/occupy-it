import { Input, Select, styled } from '@mui/material';

export const CustomInput = styled(Input)({
  width: '90%',
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  position: 'relative',
  bottom: '-20%',
  margin: 'auto',
  color: '#999911',
  px: 2,
  '&:focus': {
    outline: 'none',
  },
});

export const CustomSelect = styled(Select)({
    width: '90%',
    border: 'none',
    borderRight: 'none',
    borderLeft: 'none',
    position: 'relative',
    bottom: '-20%',
    margin: 'auto',
    color: '#999911',
    px: 2,
    '&:focus': {
      outline: 'none',
    },
  });
  