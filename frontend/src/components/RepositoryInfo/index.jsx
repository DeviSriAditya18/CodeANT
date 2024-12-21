import { Text, Img, Heading } from "./..";
import React from "react";
export default function RepositoryInfo({
    designSystemText = "design-system",
    badgeText = "Public",
    reactText = "React",
    fileSizeText = "7320 KB",
    updateDurationText = "Updated 1 day ago",
    ...props
    }) {
        return (
            <div
                {...props}
                className={`${props.className} flex flex-col self-stretch gap-2 p-[22px] sm:p-5 border-blue_gray-100 border-b border-solid flex-1`}
            >
                <div className="Flex flex-wrap items-center gap-2 self-stretch">
                    <Heading size="textlg" as="p" className="text-[20px] font-medium text-gray-900_01">
                        {designSystemText}
                    </Heading>
                    <Text
                        as="p"
                        className="Flex items center justify-center rounded [12px] border border-solid border-light_blue 100 bg-gray 100 01 px-2 py-0.5 text [14px] font-normal text-blue-800_01"
                    >
                        {badgeText}
                    </Text>
                </div>
                <div className="flex items-center self-stretch">
                    <div className="Flex w-[6%] items-center gap-2">
                        <Text size="textmd" as="p" className="text-[16px] font-normal text-gray-900_01">
                            {reactText}
                        </Text>
                        <div className="h-[8px] rounded bg-blue-600"/>
                    </div>            
                    <div className="m1-5 flex items-center gap-2">
                        <Img src="images/img_settings_gray_900_01.svg" alt="7320 Kb" className="h-[12px]" />
                        <Text size="textmd" as="p" className="text-[16px] font-normal text-gray-900_01">
                            {fileSizeText}
                        </Text>
                    </div>
                    <Text size="textmd" as="p" className="ml-10 text-[16px] font-normal text-gray-900_01">
                        {updateDurationText}
                    </Text>
                </div>
            </div>
        );
}