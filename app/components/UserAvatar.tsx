'use client'

import {Avatar, Box} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import {signOut} from "next-auth/react";
import {UserAvatarProps} from "@/types";


const UserAvatar = ({avatar}: UserAvatarProps) => {

    return (
        <Box className="avatar">
            <Avatar alt="user" src={avatar} sx={{width: "30px", height: "30px"}}/>
            <button className="button-logout" onClick={() => signOut()}>
                <LogoutIcon sx={{width: "30px", height: "30px"}}/>
            </button>

        </Box>
    );
};

export default UserAvatar;

