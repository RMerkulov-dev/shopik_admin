'use client'

import {Box, Button, Container} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import {signIn} from "next-auth/react";


const NavBar = () => {
    return (
        <Container>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"flex-end"}}>
                <Button sx={{display:"flex",alignItems:"center", gap:"5px"}} variant="outlined" onClick={()=>signIn("google")}>Login with <GoogleIcon/></Button>
            </Box>
        </Container>
    );
};

export default NavBar;

