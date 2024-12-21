import { Img } from "...";
import React from "react";
import { MenuItem, Menu, Sidebar, sidebarClasses } from "react-pro-sidebar";
export default function Sidebarl({...props }) {
    const [collapsed, setCollapsed]=React.useState(false);
    return (
        <Sidebar
            {...props}
            width="244px !important"
            collapsedWidth="80px limportant"
            collapsed={collapsed}
            rootStyles={{[`.${sidebarClasses.container}`]: { gap: 18} }}
            className={`${props.className} flex flex-col h-screen pt-5 gap-[18px] top-0 border-gray-200 border-solid bg-white-a700 Isticky overflow-auto`}
        > 
            <Img src="images/img_logo.svg" alt="Logo" className="h-[94px] w-full" />
            <Menu
                className="add_repository_border flex w-full flex-col self-stretch px-4"
                menuItemStyles={{
                    button: {
                    padding: "10px",
                    gap: "8px",
                    backgroundColor: "#ffffff",
                    color: "#414651",
                    fontWeight: 600,
                    fontSize: "16px",
                    borderImage: "",
                    boredrRadius: "6px",
                    border: "transparent",
                    [`&:hover, &.ps-active`]:{
                        color: "#ffffff",
                        backgroundColor: "#156fee !important",
                        boxShadow: "0 1px 2px 0 #0a0c120c",
                        borderColor: "",
                        borderImage: "8px",
                    },
                },
            }}
            rootStyles={{["&>ul"]: {gap: "494px"}}}
        >
            <div className="flex flex-col gap-[0.45px]">
                <MenuItem icon={<Img src="images/img_home.svg" alt="Home" className="h-[24px] w-[24px]" />}>
                    Repositories
                </MenuItem>
                <MenuItem icon={<Img src="images/img_thumbs_up.svg" alt="Thumbsup" className="h-[24px] w-[24px]" />}>
                    AI Code Review
                </MenuItem>
                <MenuItem icon={<Img src="images/img_frame_10.svg" alt="Image" className="h-[24px] w-[24px]" />}>
                    Cloud Security
                </MenuItem>
                <MenuItem icon={<Img src="images/img_television.svg" alt="Television" className="h-[24px] w-[24px]" />}>
                    How to Use
                </MenuItem>
                <MenuItem icon={<Img src="images/img_search.svg" alt="Search" className="h-[24px] w-[24px]" />}>
                    Settings
                </MenuItem>
            </div>
            <div className="flex flex-col gap-[0.45px]">
                <MenuItem icon={<Img src="images/img_call.svg" alt="Call" className="h-[24px] w-[24px]" />}>Support</MenuItem>
                <MenuItem icon={<Img src="images/img_clock.svg" alt="Clock" className="h-[24px] w-[24px]" />}>
                    Logout
                </MenuItem>
            </div>
        </Menu>
    </Sidebar>
    );
}