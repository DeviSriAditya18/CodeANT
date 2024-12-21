import React from "react";
const sizes = {
    textxs: "text-[12px] font-normal",
    texts: "text-[14px] font-normal",
    textmd: "text-[16px] font-normal",
    textxl: "text-[30px] font-normal md:text-[28px] sm:text-[26px]",
};
const Text = ({ children, className = "", as, size = "texts", ...restProps }) => {
    const Component = as || "p";
    return (
        <Component className={`text-gray-900 font-inter ${className} ${sizes [size]}`} {...restProps}>
            {children}
        </Component>
    );
};
export { Text };