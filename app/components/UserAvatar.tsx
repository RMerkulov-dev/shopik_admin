'use client'

import {Box} from "@mui/material";

interface UserProps {
    user: string | undefined | null
}

const UserAvatar = ({user}: UserProps) => {
    return (
        <Box>
            <p>
                {user}
            </p>

        </Box>
    );
};

export default UserAvatar;

