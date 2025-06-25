import { Box } from '@mui/system';
import { KeyboardArrowUp, KeyboardArrowDown } from '@mui/icons-material';
import {
    Typography,
    Card,
    CardContent,
    Collapse,
    CardHeader,
    IconButton,
} from '@mui/material';
import { useState, type ReactNode } from 'react';

function ActionCard({
    phase,
    title,
    icon,
    children,
    headerColor,
}: {
    phase: string;
    title: string;
    icon: ReactNode;
    headerColor: string;
    children: ReactNode;
}) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Card sx={{ backgroundColor: '#fff', margin: '0 15px' }}>
                <CardHeader
                    onClick={() => setOpen(!open)}
                    title={phase}
                    avatar={icon}
                    action={
                        <IconButton
                            aria-label='expand'
                            size='small'
                            sx={{ color: '#fff' }}
                        >
                            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                        </IconButton>
                    }
                    sx={{ backgroundColor: headerColor, color: '#fff' }}
                ></CardHeader>
                <CardContent>
                    <Typography variant='subtitle2'>{title}</Typography>
                    <Collapse in={open}>
                        <Box>{children}</Box>
                    </Collapse>
                </CardContent>
            </Card>
        </>
    );
}

export default ActionCard;
