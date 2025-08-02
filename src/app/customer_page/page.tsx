"use client";
import Image from "next/image";
import LitratoSidebar from "../../../components/sidebar";

export default function CustomerUI() {
  const formTitles = [
    "Email:",
    "Facebook:",
    "Complete name:",
    "Contact #:",
    "Contact Person & Number:",
    "Name of event (Ex. Maria & Jose Wedding):",
    "Location of event:",
    "Extension? (Our Minimum is 2hrs)",
    "Placement of booth (Indoor/Outdoor):",
    "What signal is currently strong in the event area?",
  ];

  return (
    <div className="flex h-screen">
      {/* Fixed Sidebar */}
      <div className="h-screen fixed left-0 top-0 z-10">
        <LitratoSidebar />
      </div>

      <div className="ml-64 flex-1 flex flex-col overflow-auto px-2 mb-10">
        <div className="h-50 w-full bg-red-500 relative overflow-hidden">
          <Image
            src={"/Images/litratobg.jpg"}
            alt="bg-image"
            fill
            className="object-cover bg-no-repeat rounded-lg"
            priority
          />
        </div>
        <div className="overflow-y-auto">
          <p className="text-center font-didone text-3xl font-bold mt-4">
            Welcome, Valued Customer. Scheduling a Booking with Us! <br />
            Turn your Moments into Memories!
          </p>
          <div className="bg-white px-10 mt-8">
            <div className="flex flex-col gap-2 py-2">
              {formTitles.map((title, idx) => (
                <div className="flex flex-col leading-tight" key={idx}>
                  <p className="font-semibold">{title}</p>
                  {title.includes("Placement of booth") ? (
                    <form className="bg-[#D9D9D9] p-2 rounded-lg shadow-md w-full">
                      <input
                        placeholder="Enter Here:"
                        type="text"
                        className="w-full text-xl border-none outline-none bg-transparent"
                      />
                    </form>
                  ) : (
                    <form className="bg-[#D9D9D9] p-2 rounded-lg shadow-md w-full">
                      <input
                        placeholder="Enter Here:"
                        type="text"
                        className="w-full text-xl border-none outline-none bg-transparent"
                      />
                    </form>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
