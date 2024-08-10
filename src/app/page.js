"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full h-full bg-[#f8f8ff]">
            <div className="sidebar">
                <div
                    className={`fixed left-0 top-0 h-full ${
                        isExpanded ? "w-64" : "w-20"
                    } bg-black text-white flex flex-col justify-center py-5 items-center`}
                >
                    <div
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="cursor-pointer p-4"
                    >
                        <Image
                            src="/menu.png"
                            alt="Profile"
                            className="rounded-full w-12 h-12"
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="flex items-center justify-center mt-auto">
                        {isExpanded ? (
                            <div className="flex flex-row items-center justify-center gap-5">
                                <Image
                                    src="/user.png"
                                    alt="Profile"
                                    className="rounded-full w-12 h-12 mb-5"
                                    width={50}
                                    height={50}
                                />
                                {/* <span>{user.fullName}</span> */}
                                <span className="mb-4 text-[20px] font-semibold">
                                    Haris
                                </span>
                            </div>
                        ) : (
                            <Image
                                src="/user.png"
                                alt="Profile"
                                className="rounded-full w-12 h-12 mb-5"
                                width={50}
                                height={50}
                            />
                        )}
                    </div>
                </div>
            </div>

            <div className="main"></div>
        </div>
    );
}
