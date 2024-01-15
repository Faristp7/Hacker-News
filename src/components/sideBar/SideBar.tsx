import { useState } from "react";
import { About } from "../TabsMenu/About";
import { Appearance } from "../TabsMenu/Appearance";
import { YC } from "../TabsMenu/YC";
import NavBar from "./NavBar";

export default function SideBar() {
  const [tabs, setTabs] = useState<number>(0);

  return (
    <>
      <div className="">
        <div>
          <NavBar />
        </div>
        <div className="fixed mt-11 flex w-full sm:w-2/6 justify-between bg-orange-900 align-middle font-thin">
          <div
            className={`flex flex-1 cursor-pointer justify-center py-2 ${tabs === 0 ? "border-b-2 border-gray-400" : ""}`}
            onClick={() => setTabs(0)}
          >
            YC
          </div>
          <div
            className={`flex flex-1 cursor-pointer justify-center py-2 ${tabs === 1 ? "border-b-2 border-gray-400" : ""}`}
            onClick={() => setTabs(1)}
          >
            Appearance
          </div>
          <div
            className={`flex flex-1 cursor-pointer justify-center py-2 ${tabs === 2 ? "border-b-2 border-gray-400" : ""}`}
            onClick={() => setTabs(2)}
          >
            About
          </div>
        </div>

        {tabs === 0 && (
          <div className="">
            <YC />
          </div>
        )}
        {tabs === 1 && (
          <div>
            <Appearance />
          </div>
        )}
        {tabs === 2 && (
          <div>
            <About />
          </div>
        )}
      </div>
    </>
  );
}
