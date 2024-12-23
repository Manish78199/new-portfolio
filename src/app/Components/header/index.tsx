'use client'


import Link from "next/link";

import { WiMoonAltWaningCrescent5 } from "react-icons/wi";
import { WiMoonAltWaxingGibbous4 } from "react-icons/wi";

import { VscGrabber } from "react-icons/vsc";
export default function index() {
    return (

        <div className=' w-full '>
            <div className="">
                <div className="px-5 py-3 z-20 text-xl text-white bg-zinc-950 fixed font-bold">
                    MANISH
                </div>
                <div className="p-3 fixed z-20 bg-zinc-950 right-0 flex flex-row items-center space-x-3 text-white">
                    <button className="">
                        <WiMoonAltWaxingGibbous4 className="w-6 h-6" />
                    </button>

                    <button className="">
                        <VscGrabber className="w-12 h-8" />
                    </button>
                </div>
            </div>

            <div className="fixed bg-zinc-950 w-full h-screen">
                <div className="w-full h-full">
                    <div >
                        <Link href={"home"} className="text-white">
                            Home
                        </Link>
                    </div>
                </div>
            </div>

            <div className="fixed bg-zinc-950 w-3 h-full left-0"></div>
            <div className="fixed bg-zinc-950 w-full h-3 top-0"></div>
            <div className="fixed bg-zinc-950 w-3 h-full right-0	"></div>
            <div className="fixed bg-zinc-950 w-full h-3 bottom-0"></div>
        </div>
    )
}
