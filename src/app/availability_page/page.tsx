"use client";
import Image from "next/image";
import LitratoBranding from "../../../components/Branding";
import Calendar from "../../../components/LitratoCalendar";
import { useRouter } from "next/navigation";
export default function AvailabilityPage() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login_page");
  };
  const handleBack = () => {
    router.push("/home_page");
  };
  return (
    <div>
      <section>
        <div className="relative h-56 w-full mb-6">
          <Image
            src="/Images/litratobg.jpg"
            alt="background_img"
            fill
            className="object-cover bg-no-repeat"
            priority
          ></Image>
        </div>
        <LitratoBranding></LitratoBranding>
      </section>
      <section className="flex-grow flex py-4 justify-center">
        <Calendar />
      </section>
      <div className="flex flex-row justify-center gap-8 my-8 ">
        <div
          onClick={handleBack}
          className="bg-[#878787] text-black px-4 py-2 w-28 text-center rounded-lg hover:cursor-pointer font-bold"
        >
          Back
        </div>
        <div
          onClick={handleLogin}
          className="bg-black text-white px-4 py-2 w-28 text-center rounded-lg hover:cursor-pointer font-bold"
        >
          LOGIN
        </div>
      </div>
    </div>
  );
}
