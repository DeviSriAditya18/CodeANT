import { CloseSVG } from "../Input/close";
import { Input, Img, Button, Text, Heading } from "./..";
import React from "react";
export default function Header({...props }) {
    const [searchBarValue, setSearchBarValue]=React.useState("");
    return (
    <header
        {...props}
        className={`${props.className} flex flex-col items-start gap-3.5 px-6 py-5 sm:px-5 border-gray-200 border-b border-solid bg-white-a700`}
    >
        <div className="mx-auto flex w-full max-w-[1102px] items-center justify-between gap-5 self-stretch sm:flex-col">
            <div className="flex flex-1 flex-col items-start gap-1 sm:self-stretch">
                <Heading size="headingx1" as="h4" className="text-[24px] font-semibold text gray-900_01 md:text-[22px]">
                    Repositories
                </Heading>
                <Text as="p" className="text-[14px] font-normal text-blue gray-800">
                    33 total repositories
                </Text>
            </div>
            <div className="flex gap-3">
                <Button
                    leftIcon={<Img src="images/img_settings.svg" alt="Settings" className="h-[20px] w-[20px] object-contain" />}
                    className="flex h-[40px] min-w-[126px] flex-row items-center justify-center gap-1.5 rounded-1g border border-solid border-blue gray-100 bg-white-a700 px-[13px] text-center text-[14px] text-blue_gray-800 shadow-xs"
                >   
                    Refresh All
                </Button>
                <Button
                    className="add_repository_border flex h-[40px] min-w-[158px] flex-row items-center justify-center gap-1.5 rounded-1g bg-blue-600 px-3 text-center text-[14px] text-white-a700 shadow-xs"
                    leftIcon={<Img src="images/img.plus.svg" alt="Plus" className="h-[20px] w-[20px] object-contain" />}
                >
                  Add Repository  
                </Button>
            </div>
        </div>
        <Input
            name="search"
            placeholder={`Search Repositories`}
            value={searchBarValue}
            onChange={(e)=>setSearchBarValue(e.target.value)}
            prefix={<Img src="images/img_rewind.svg" alt="Rewind" className="h-[24px] w-[24px] object-contain" />}
            suffix={
                searchBarValue?.length>0?(
                    <CloseSVG onClick={()=>setSearchBarValue("")} height={24} width={24} fillColor="#414651ff" />
                ) : null
            }
            className="flex h-[44px] w-[32%] items-center justify-center gap-1.5 rounded-lg border border-solid border-blue_gray-100 bg-white-a700 px-3 text-[16px] text-blue_gray-800 shadow-xs"
        />
    </header>
    );
}