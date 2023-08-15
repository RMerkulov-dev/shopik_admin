'use client'

import {ReactNode} from "react";
import {Navigation} from "@/app/components/index";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (

        <div className="dashboard_wrapper">
            <div className="dashboard_wraper-menu">
                <Navigation/>
            </div>
            <div className="dashboard_wraper-content">
                {children}
            </div>

        </div>
    );
};

export default Layout;

