"use client";
import { useState } from "react";
import Image from "next/image";

export default function LitratoSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleActive = (label: string) => {
    setActiveItem(label);
  };

  const navItems = [
    { label: "Booking", icon: "/Icons/booking.png" },
    { label: "Dashboard", icon: "/Icons/dashboard.png" },
    { label: "Rescheduling", icon: "/Icons/rescheduling.png" },
    { label: "Manage Account", icon: "/Icons/person.png" },
  ];

  return (
    <div className="h-screen w-64 bg-gray-300 pr-2 py-8 flex flex-col justify-between">
      <div className="flex flex-col gap-2">
        {navItems.map((item) => (
          <div
            key={item.label}
            onClick={() => handleActive(item.label)}
            className={`flex text-lg items-center gap-2 rounded-r-full px-4 py-2 font-bold rounded-lg cursor-pointer transition-all ${
              activeItem === item.label
                ? "bg-[#8B0000] text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            <Image
              src={item.icon}
              alt={`${item.label} icon`}
              width={26}
              height={26}
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col text-center font-didone leading-tight">
        <p className="text-[48px] font-semibold">LITRATO</p>
        <p className="text-[36px] ">BYAM</p>
        <p className="text-[12px] font-semibold mt-2">
          Moments in Memories <br />
          Pop up photo booth in Davao City <br />
          Discover the perfect memory for you!
        </p>
      </div>
    </div>
  );
}
