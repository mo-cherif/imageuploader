"use client";
import Loading from "./Loading";
import photoIcon from "../images/image.svg";
import { poppins } from "../utils/fonts";
import Image from "next/image";
import { useState } from "react";
import {
  handleDrop,
  handleDragEnter,
  handleDragOver,
} from "../utils/dragAndDrop";
import Uploaded from "./Uploaded";

const ImageUploadCard = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [photoName, setPhotoName] = useState("");

  return (
    <main>
      {loading ? (
        <div
          className={`${poppins.className} h-screen flex justify-center items-center`}
        >
          <main className="bg-white shadow-3xl rounded-[10px]">
            {!image ? (
              <div className="p-7 flex flex-col gap-6 justify-center items-center">
                <h1 className="font-medium text-[18px]">Upload your image</h1>
                <h2 className="text-[10px]">File should be Jpeg, Png, ...</h2>
                <div
                  onDragEnter={(e) => handleDragEnter(e)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) =>
                    handleDrop(e, setImage, setLoading, setPhotoName)
                  }
                  className="bg-[#F6F8FB] flex justify-center items-center flex-col gap-10 border w-[280px] h-[180px] rounded-[14px] border-dashed border-[#97BEF4]"
                >
                  <div className="flex justify-center items-center flex-col gap-10">
                    <Image src={photoIcon} priority alt="default image" />
                    <h3 className="text-[12px] text-[#BDBDBD]">
                      Drag & Drop your image here
                    </h3>
                  </div>
                </div>
                <p className="text-[#BDBDBD] text-[12px]">Or</p>
                <button className="bg-[#2F80ED] text-[12px]  rounded-[8px] text-center tracking-[-0.42px] text-white w-[101px] h-[31.984px]">
                  Choose a file
                </button>
              </div>
            ) : (
              <Uploaded icon={image} photoName={photoName} />
            )}
          </main>
        </div>
      ) : (
        <div>
          <Loading />
        </div>
      )}
    </main>
  );
};

export default ImageUploadCard;
