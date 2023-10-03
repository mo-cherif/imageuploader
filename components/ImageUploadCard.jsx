"use client";

import photoIcon from "@/images/image.svg";
import { poppins } from "@/utils/fonts";
import Image from "next/image";
import { useState } from "react";
import {
  handleDrop,
  handleDragEnter,
  handleDragLeave,
  handleDragOver,
} from "@/utils/dragAndDrop";

const ImageUploadCard = () => {
  const [image, setImage] = useState(null);
  const [border, setBorder] = useState(true);

  return (
    <div
      className={`${poppins.className} h-screen flex justify-center items-center`}
    >
      <main className="bg-white shadow-3xl rounded-[10px]">
        <div className="p-7 flex flex-col gap-6 justify-center items-center">
          <h1 className="font-medium text-[18px]">Upload your image</h1>
          <h2 className="text-[10px]">File should be Jpeg, Png, ...</h2>
          <div
            onDragEnter={(e) => handleDragEnter(e)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, setImage, setBorder)}
            className={
              border
                ? "bg-[#F6F8FB] flex justify-center items-center flex-col gap-10 border w-[338px] h-[219px] rounded-[12px] border-dashed border-[#97BEF4]"
                : "flex justify-center items-center flex-col gap-10 rounded-[12px]"
            }
          >
            {image ? (
              <div className=" flex w-fit justify-center items-center">
                <Image
                  className="rounded-2xl object-cover "
                  src={image}
                  width={338}
                  height={219}
                  alt="image dropped"
                />
              </div>
            ) : (
              <div className="flex justify-center items-center flex-col gap-10">
                <Image src={photoIcon} alt="default image" />
                <h3 className="text-[12px] text-[#BDBDBD]">
                  Drag & Drop your image here
                </h3>
              </div>
            )}
          </div>
          <p className="text-[#BDBDBD] text-[12px]">Or</p>
          <button className="bg-[#2F80ED] text-[12px]  rounded-[8px] text-center tracking-[-0.42px] text-white w-[101px] h-[31.984px]">
            Choose a file
          </button>
        </div>
      </main>
    </div>
  );
};

export default ImageUploadCard;
