import { Helmet } from "react-helmet";
import Header from "../../components/Header";
import RepositoryInfo from "../../components/RepositoryInfo";
import Sidebar1 from "../../components/Sidebar1";
import React, { Suspense } from "react";

const repositoryList = [
    {
        designSystemText: "design-system",
        badgeText: "Public",
        reactText: "React",
        fileSizeText: "7320 KB",
        updateDurationText: "Updated 1 day ago",
    },
    {
        designSystemText: "codeant-ci-app",
        badgeText: "Private",
        reactText: "React",
        fileSizeText: "7320 KB",
        updateDurationText: "Updated 1 day ago", 
    },
    {
        designSystemText: "analytics-dashboard",
        badgeText: "Private",
        reactText: "Python",
        fileSizeText: "4521 KB",
        updateDurationText: "Updated 5 days ago",
    },
    {
        designSystemText:  "mobile-app",
        badgeText: "Public",
        reactText: "Swift",
        fileSizeText: "3096 KB",
        updateDurationText: "Updated 3 days ago",
    },
    {
        designSystemText: "e-commerce-platform",
        badgeText: "Private",
        reactText: "Java",
        fileSizeText: "6210 KB",
        updateDurationText: "Updated 6 days ago",
    },
    {
        designSystemText: "blog-website",
        badgeText: "Public",
        reactText: "HTML/CSS", 
        fileSizeText: "1876 KB",
        updateDurationText: "Updated 4 days ago",
    },
    {
        designSystemText: "social-network",
        badgeText: "Private",
        reactText: "PHP",
        fileSizeText: "5432 KB",
        updateDurationText: "Updated 7 days ago", 
    },
];

export default function LaptopPage() {
    return (
        <>
            <Helmet>
                <title>Repository List - Manage Your Code Repositories Efficiently</title>
                <meta
                    name="description"
                    content="Explore and manage your code repositories with ease. Our platform supports public and private repositories across multiple languages including React, Python, and Java."
                />
            </Helmet>
            <div className="flex w-full bg-white-a700">
                <Sidebar1/>
                <div className="flex-1">
                    <div className="bg-gray-50 p-6 sm:p-5">
                        <div className="rounded-[12px] border border-solid border-gray-200 bg-white-a700 shadow-xs"> 
                            <Header/>
                            <div className="flex flex-col">
                                <Suspense fallback={<div>Loading feed...</div>}>
                                    {repositoryList.map((d, index)=>(
                                        <RepositoryInfo {...d} key={"laptop"+index} />
                                    ))}
                                </Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}