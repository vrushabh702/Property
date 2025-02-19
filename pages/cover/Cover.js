import { compress } from "next.config";
import Image from "next/image";

export const Cover = ({ children, background }) => {
  console.log(children, background, "new");
  return (
    <div className="h-screen bg-slate-800 relative h-min-[400px] flex justify-center items-center">
      <Image
        alt="Cover"
        src={background}
        layout="fill"
        className="mix-blend-soft-light object-cover"
      />
      {children}
    </div>
  );
};
