import React from "react";
const sizes = {
    textlg: "text-[20px] font-medium",
    headingxs: "text-[14px] font-bold",
    headings: "text-[16px] font-semibold",
    headingmd: "text-[18px] font-bold",
    headinglg: "text-[20px] font-semibold",
    headingxl: "text-[24px] font-semibold md:text-[22px]",
    heading2x1: "text-[32px] font-bold md:text-[30px] sm:text-[28px]",
};
const Heading = ({ children, className = size = "headingmd", as, ...restProps }) => {
    const Component = as || "h6";
    return (
        <Component className={`text-gray-900_02 font-inter ${className} ${sizes [size]}`} {...restProps}>
            {children}
        </Component>
    );
};
export { Heading };