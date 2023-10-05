"use client";
import Image from "next/image";
import { useState } from "react";

const Uploaded = ({ icon, photoName }) => {
  const [value, setValue] = useState(photoName);

  const handleCopy = () => {
    navigator.clipboard.writeText(photoName);
    alert("Link Copied! 📝");
  };

  return (
    <div className="p-7 flex flex-col gap-2 justify-center items-center">
      <h1 className="text-4xl">☑️</h1>
      <h1 className="font-medium text-[15px] pb-4">Uploaded Successfully!</h1>
      <div className="flex justify-center items-center flex-col gap-10 rounded-[14px]">
        <div className="flex justify-center items-center flex-col gap-10">
          <Image
            className="rounded-2xl object-cover "
            src={icon}
            priority
            width={280}
            height={180}
            alt="image dropped"
          />

          <div className="p-1 flex border rounded-xl border-[#E0E0E0]">
            <div className="">
              <input
                onChange={() => setValue(value)}
                value={value}
                className="p-2 w-[200px] font-medium outline-none text-[8px]"
                type="text"
              />
            </div>
            <button
              onClick={handleCopy}
              className="bg-[#2F80ED] text-[8px] rounded-[8px] font-medium w-[74px] text-[#FFF]"
            >
              Copy Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploaded;
