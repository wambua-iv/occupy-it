import { Box, Container, Input, styled, Typography } from '@mui/material';
import { Divider } from '../utils';
import { CustomInput, CustomSelect } from '../utils/CustomInput';

const InputArea = styled(Box)({
  width: '210px',
  height: '70%',
  px: 2,
  py: 1,
});

function SearchBar() {
  return (
    <Container>
      <Box
        sx={{
          height: { xs: 35, sm: 75, md: 80 },
          width: { xs: 350, sm: 600, md: 700 },
          backgroundColor: '#fff',
          mx: 6,
          my: -6,
          borderRadius: '1rem',
          display: 'flex',
          position: 'relative',
          zIndex: 10,
        }}
      >
        <InputArea>
          <Typography >Location</Typography>
          <CustomInput type="text" />
        </InputArea>
        <Divider />
        <InputArea>
          <Typography>Location</Typography>
          <CustomSelect />
        </InputArea>
        <Divider />
        <Input />
      </Box>
    </Container>
  );
}
export default SearchBar;
