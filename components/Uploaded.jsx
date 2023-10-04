"use client";
import Image from "next/image";
import { useState } from "react";

const Uploaded = ({ icon }) => {
  const [value, setValue] = useState("https://imageUpload/photo-388888883");

  return (
    <div className="p-7 flex flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl">☑️</h1>
      <h1 className="font-medium text-[15px] pb-4">Uploaded Successfully!</h1>
      <div className="flex justify-center items-center flex-col gap-10 rounded-[12px]">
        <div className="flex justify-center items-center flex-col gap-10">
          <Image
            className="rounded-2xl object-cover "
            src={icon}
            width={280}
            height={180}
            alt="image dropped"
          />

          <div className="p-1 flex border rounded-xl border-[#E0E0E0]">
            <div className="">
              <input
                value={value}
                className="p-2 w-[200px] font-medium outline-none text-[8px]"
                type="text"
              />
            </div>
            <button className="bg-[#2F80ED] text-[8px] rounded-[8px] font-medium w-[74px] text-[#FFF]">
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
