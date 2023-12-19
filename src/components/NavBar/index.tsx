import * as React from 'react';
import NextLink from 'next/link';
import { Box, List, ListItem, ListItemButton, ListDivider, Avatar } from '@mui/joy';

export default function NavBar() {
    // Company Logo

    // Teams
    // People
    // Projects
    // Goals


    return (
        <Box component="nav" aria-label="My site" sx={{ flexGrow: 1 }}>
            <List role="menubar" orientation="horizontal">
                <ListItem role="none">
                    <Avatar src="/public/logo.svg" />
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={NextLink} href="/people">
                        People
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={NextLink} href="/teams">
                        Teams
                    </ListItemButton>
                </ListItem>
                <ListDivider />
                <ListItem role="none">
                    <ListItemButton role="menuitem" component={NextLink} href="/projects">
                        Projects
                    </ListItemButton>
                </ListItem>
                <ListDivider />
            </List>
        </Box>
    )
}