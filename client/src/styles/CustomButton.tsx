import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '8px 12px',
  margin: 'auto',
  border: '1px solid',
  lineHeight: 1.5,
  '&:hover': {
    backgroundColor: '#5D33D2',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#5D33D5',
    //borderColor: '#005cbf',
  },
  '&:focus': {
    //boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});
