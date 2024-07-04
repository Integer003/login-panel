import React from 'react'
import { Button, Container, Box, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

export function AnotherPage(){
    // return <div>hahaha</div>
    const history = useHistory();
    return (
        <Container maxWidth="md">
            <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="h1">Another Page</Typography>
                <Button variant="contained" color="primary" onClick={() => history.push('/')}>
                    返回
                </Button>
            </Box>
        </Container>
    );
}
