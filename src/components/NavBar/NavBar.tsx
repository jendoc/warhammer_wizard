import { Box } from '@mui/system';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar() {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar className='navbar'>
                    <IconButton size='large' edge='start' aria-label='menu'>
                        <MenuIcon style={{ color: '#BFD1E5' }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
