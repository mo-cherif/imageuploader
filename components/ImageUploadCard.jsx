import image from "@/images/image.svg";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const ImageUploadCard = () => {
  return (
    <div
      className={`${poppins.className} h-screen flex justify-center items-center`}
    >
      <main className="bg-white shadow-3xl rounded-[10px]">
        <div className="p-7 flex flex-col gap-4 justify-center items-center">
          <h1 className="font-medium text-[18px]">Upload your image</h1>
          <h2 className="text-[10px]">File should be Jpeg, Png, ...</h2>
          <div className="bg-[#F6F8FB] flex justify-center items-center flex-col gap-10 border w-[338px] h-[219px] rounded-[12px] border-dashed border-[#97BEF4]">
            <Image src={image} />
            <h3 className="text-[12px] text-[#BDBDBD]">
              Drag & Drop your image here
            </h3>
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
