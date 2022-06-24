
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function LoadingIcon() {
  return (
    <Box width={500} height={500} bgcolor={"green"} sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>
  );
}