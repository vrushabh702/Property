// import { compress } from "next.config";
import Image from "next/image";

export const Cover = ({ children, background }) => {
  return (
    <div className="h-screen text-white bg-slate-800 relative h-min-[400px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        className="mix-blend-soft-light object-cover"
      />
      <div className="max-w-5xl z-10"> {children} </div>
    </div>
  );
};
