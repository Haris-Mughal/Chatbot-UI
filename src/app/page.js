"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="w-full h-full">
            <div className="sidebar">
                <div
                    className={`fixed left-0 top-0 h-full ${
                        isExpanded ? "w-[296px]" : "w-[120px]"
                    } bg-black text-white flex flex-col justify-center py-5 items-center mx-5 my-5 rounded-md`}
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

            <div
                className={`main flex flex-col justify-between left-10 ${
                    isExpanded ? "pl-[320px]" : "pl-[155px]"
                }`}
            >
                <div className="w-[320px] flex flex-row justify-end items-center right-7 top-4 absolute rounded-xl border border-gray-500 px-2 mx-auto py-1 gap-2">
                    <Image
                        src="/search.svg"
                        alt="search"
                        className="rounded-full w-8 h-8"
                        width={30}
                        height={30}
                    />
                    <input
                        type="search"
                        placeholder="Search"
                        className="text-[20px] bg-transparent outline-none rounded-xl"
                    />
                </div>
                <div className="flex flex-row justify-center items-end pt-[128px] gap-[40px]">
                    <div>
                        <Image
                            src="/bot.png"
                            alt="search"
                            className="w-[375px] h-[375px]"
                            width={375}
                            height={375}
                        />
                    </div>
                    <div className="flex flex-col capitalize">
                        <div className="text-[#181818] text-[87px] ">
                            Hi, Haris{/* {user.fullName} */}
                        </div>
                        <div className="text-[#2c2c2c] text-[42px]">
                            whats on your mind, can we discuss
                        </div>
                    </div>
                </div>
                <div className=" flex flex-row justify-between items-center rounded-xl border mt-[300px] border-gray-500 px-5 mx-8 py-4">
                    <input
                        type="search"
                        placeholder="Type a new message here..."
                        className="w-full px-5 text-[24px] bg-transparent outline-none rounded-xl"
                    />
                    <Image
                        src="/send.png"
                        alt="send"
                        className="end-0 right-0 w-8 h-8 cursor-pointer"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
        </div>
    );
}
