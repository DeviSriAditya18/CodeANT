import { Helmet } from "react-helmet";
import { Text, Button, Img, Heading } from "../../components";
import React from "react";

export default function SigninOnePage() {
    return (
        <>
            <Helmet>
                <title>Single Sign-On (SSO) Secure Sign In for CodeAnt AI</title>
                <meta
                    name="description"
                    content="Securely sign in to CodeAnt AI using Single Sign-On (SSO). Streamline your workflow with AI-driven code detection and autofix capabilities."
                />
            </Helmet>
            <div className="flex w-full bg-white-a700 md:flex-col">
                <div className="w-full md:px-5">
                    <div className="flex flex-col border-r border-solid border-gray-200 bg-white-a700">
                        <div className="relative mx-[122px] mt-[318px] h-[322px] md:mx-0">
                            <div className="absolute left-0 top-0 my-auto ml-auto mr-[26px] flex-1 rounded-[24px] bg-white-a700 py-5 shadow-sm md:mr-0">
                                <div className="mb-1.5 flex flex-col gap-5">
                                    <div className="flex flex-col gap-5">
                                        <div className="mx-[22px] flex items-center gap-2 md:mx-0">
                                            <Img src="images/img_settings_gray_900_02.svg" alt="Settings" className="h-[30px]" />
                                            <Heading as="h1" className="text-[18px] font-bold text-gray-900_02">
                                                AI to Detect & Autofix Bad Code
                                            </Heading>
                                        </div>
                                        <div className="h-px bg-indigo-50" />
                                    </div>
                                    <div className="ml-5 mr-10 flex justify-between gap-5 md:mx-0">
                                        <div className="flex flex-1 justify-between gap-5">
                                            <div className="flex flex-col items-center justify-center gap-0.5">
                                                <Heading as="h2" className="text-[18px] font-bold text-gray-900_02">
                                                    30+
                                                </Heading>
                                                <Text as="p" className="text-[14px] font-normal text-gray-900">
                                                    Language Support
                                                </Text>
                                            </div>
                                            <div className="flex w-[38%] flex-col items-start justify-center gap-0.5">
                                                <Heading as="h3" className="ml-3.5 text-[18px] font-bold text-gray-900_02 md:ml-0">
                                                    10K+
                                                </Heading>
                                                <Text as="p" className="text-[14px] font-normal text-gray-900">
                                                    Developers
                                                </Text>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-end">
                                            <Heading as="h4" className="mr-3 text-[18px] font-bold text-gray-900_02 md:mr-0">
                                                100K+
                                            </Heading>
                                            <Text as="p" className="text-[14px] font-normal text-gray-900">
                                                Hours Saved
                                            </Text>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 m-auto flex w-[56%] justify-center rounded-[24px] bg-white-a700 p-1.5 shadow-sm">
                                <div className="mt-1.5 flex w-full flex-col items-start">
                                    <div className="flex items-center self-stretch">
                                        <Button className="flex h-[56px] w-[56px] items-center justify-center rounded-[28px] bg-indigo-a100_3f px-3">
                                            <Img src="images/img_ant_design_pie_chart_filled.svg" />
                                        </Button>
                                        <div className="relative h-[38px] flex-1">
                                            <Img
                                                src="images/img_arrow_right.svg"
                                                alt="Arrowright"
                                                className="absolute right-[28%] top-0 m-auto h-[24px]"
                                            />
                                            <div className="absolute bottom-0 left-0 right-8 top-0 m-auto flex h-max flex-1 flex-col items-end">
                                                <Heading size="headingxs" as="h5" className="mr-3 text-[14px] font-bold text-blue-800 md:mr-0">
                                                    14%
                                                </Heading>
                                                <Text size="textxs" as="p" className="text-[12px] font-normal text-gray-900">
                                                    This week
                                                </Text>
                                            </div>
                                        </div>
                                    </div>
                                    <Heading size="headingxs" as="h6" className="mt-4 text-[14px] font-bold text-gray-900">
                                        Issues Fixed
                                    </Heading>
                                    <Heading
                                        size="heading2x1"
                                        as="h2"
                                        className="text-[32px] font-bold text-gray-900_02 md:text-[30px] sm:text-[28px]"
                                    >
                                        500K+
                                    </Heading>
                                </div>
                            </div>
                        </div>
                        <Img src="images/img_subtract.svg" alt="Subtract" className="h-[318px] w-[38%] object-contain" />
                    </div>
                </div>
                <div className="w-full md:px-5">
                    <div className="flex flex-col items-center justify-center gap-8 bg-gray-50 px-6 py-[150px] md:py-5 sm:p-5">
                        <div className="self-stretch rounded-[12px] border border-solid border-gray-200 bg-white-a700 shadow-xs">
                            <div className="flex flex-col gap-5 border-b border-solid border-blue_gray-100 px-6 py-8 sm:p-5">
                                <div className="flex flex-col items-center gap-8 px-14 md:px-5">
                                    <div className="flex items-center gap-3">
                                        <Img src="images/img_settings_gray_900_01_40x34.svg" alt="Settings" className="h-[40px]" />
                                        <Text
                                            size="textxl"
                                            as="p"
                                            className="font-satoshi text-[30px] font-normal text-gray-900_01 md:text-[28px] sm:text-[26px]"
                                        >
                                            CodeAnt AI
                                        </Text>
                                    </div>
                                    <Heading
                                        size="heading2x1"
                                        as="h2"
                                        className="text-[32px] font-semibold text-gray-900_01 md:text-[30px] sm:text-[28px]"
                                    >
                                        Welcome to CodeAnt AI
                                    </Heading>
                                </div>
                                <div className="flex items-center justify-between gap-5 rounded-lg border border-solid border-gray-200 bg-gray-50">
                                    <Heading size="headinglg" as="h3" className="ml-32 text-[20px] font-semibold text-blue_gray-800">
                                        SAAS
                                    </Heading>
                                    <Button className="add_repository border flex h-[60px] min-w-[310px] flex-row items-center justify-center rounded-lg bg-blue-600 px-8 text-center">
                                        Self Hosted
                                    </Button>
                                </div>
                            </div>
                            <div className="mb-[146px] flex flex-col items-center gap-4 bg-white-a700 p-[22px] sm:p-5">
                                <Button
                                    leftIcon={<Img src="images/img_icon.png" alt="Icon" className="h-[24px] w-[24px] object-contain" />}
                                    className="flex h-[56px] min-w-[446px] flex-row items-center justify-center gap-4 rounded-lg border-[0.5px] border-solid border-gray-300 bg-white-a700"
                                >
                                    Self Hosted GitLab
                                </Button>
                                <Button
                                    leftIcon={<Img src="images/img_icon_gray_900.svg" alt="Icon" className="h-[24px] w-[24px] object-contain" />}
                                    className="flex h-[56px] min-w-[446px] flex-row items-center justify-center gap-4 rounded-lg border-[0.5px] border-solid border-gray-300 bg-white-a700"
                                >
                                    Sign in with SSO
                                </Button>
                            </div>
                        </div>
                        <Text size="textmd" as="p" className="font-inter text-[16px] font-normal text-gray-900_01">
                            <span>By signing up you agree to the&nbsp;</span>
                            <span className="font-bold">Privacy Policy</span>
                            <span>.</span>
                        </Text>
                    </div>
                </div>
            </div>
        </>
    );
}
