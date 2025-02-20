import Link from "next/link";
import { FaHeart, FaHouseUser } from "react-icons/fa";

export const MainMenu = (items) => {
  console.log("Main menu propes", items);
  return (
    <div className="bg-slate-800 text-white px-5 h-[64px] sticky top-0 z-20 flex">
      <div className="py-4 pl-5 flex text-pink-600">
        <FaHouseUser size={30} />
        <FaHeart size={30} />
      </div>
      {/* <div className="flex flex-1 justify-end">
        {(items || []).map((item) => (
          <div
            key={item.id}
            className="hover:bg-slate-700 cursor-pointer relative group"
          >
            <div>
              <Link href={item.destination} className="p-5 block">
                {item.label}
              </Link>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};
