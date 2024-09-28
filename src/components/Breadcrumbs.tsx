import { Box, Breadcrumbs as MBreadcrumbs, Link, Typography } from '@mui/material';
import NavigateNexIcon from   '@mui/icons-material/NavigateNext';

function Breadcrumbs() {
  return (
    <Box m={2}>
      <MBreadcrumbs aria-label="breadcrumb" separator={<NavigateNexIcon fontSize="small" />}>
        <Link underline='hover' href='#'>Home</Link>
        <Link underline='hover' href='#'>Shop</Link>
        <Link underline='hover' href='#'>About</Link>
        <Link underline='hover' href='#'>Contact</Link>    

        <Typography color="text.primary">Current Page</Typography> 
      </MBreadcrumbs>
    </Box>
  );
}

export default Breadcrumbs;

