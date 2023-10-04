import { poppins } from "@/utils/fonts";

const Loading = () => {
  return (
    <div
      className={`${poppins.className} h-screen w-screen flex justify-center items-center`}
    >
      <div className="flex w-[400px] h-[144px] justify-center p-10 rounded-xl flex-col gap-6 shadow-3xl">
        <h1 className="font-medium text-[14px]">Uploading...</h1>
        <div className="w-[310px] h-[6px] bg-[#F2F2F2]">
          <div className="w-[80px] load relative  h-[6px] rounded-md bg-[#2F80ED]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
