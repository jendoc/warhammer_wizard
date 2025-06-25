import * as React from 'react';
import { Box } from '@mui/system';
import { AppBar, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router';

function NavBar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <AppBar position='static'>
                <Toolbar className='navbar'>
                    <IconButton
                        size='large'
                        edge='start'
                        aria-label='menu'
                        onClick={handleClick}
                    >
                        <MenuIcon style={{ color: '#BFD1E5' }} />
                    </IconButton>
                    <Menu
                        id='basic-menu'
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        slotProps={{
                            list: {
                                'aria-labelledby': 'basic-button',
                            },
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Link to='/'>Home</Link>
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
