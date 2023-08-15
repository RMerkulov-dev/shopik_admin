"use client";

import React, {useEffect, useState} from "react";
import {List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {RxDashboard} from "react-icons/rx";
import Link from "next/link";
import {MdProductionQuantityLimits} from "react-icons/md";
import {RiOrderPlayFill} from "react-icons/ri";
import {FiSettings} from "react-icons/fi";

const Navigation = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log(selectedIndex)
    const handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number
    ) => {
        setSelectedIndex(index);
    };

    useEffect(() => {

    }, [selectedIndex]);

    return (
        <div className="dashboard_wrapper">
            <div className="dashboard_wraper-menu">
                <List component="nav" aria-label="main mailbox folders">
                    <Link href={'/'}>
                        <ListItemButton
                            selected={selectedIndex === 0}
                            onClick={(event) => handleListItemClick(event, 0)}
                        >
                            <ListItemIcon>
                                <RxDashboard/>
                            </ListItemIcon>
                            <ListItemText primary="Dashboard"/>
                        </ListItemButton>
                    </Link>
                    <Link href={'/products'}>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemIcon>
                                <MdProductionQuantityLimits/>
                            </ListItemIcon>
                            <ListItemText primary="Products"/>
                        </ListItemButton>
                    </Link>
                    <Link href={'/orders'}>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemIcon>
                                <RiOrderPlayFill/>
                            </ListItemIcon>
                            <ListItemText primary="Orders"/>
                        </ListItemButton>
                    </Link>
                    <Link href={'/settings'}>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemIcon>
                                <FiSettings/>
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </Link>

                </List>
            </div>

        </div>
    );
};

export default Navigation;
