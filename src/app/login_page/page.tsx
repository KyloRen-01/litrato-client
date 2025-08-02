"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import LitratoBranding from "../../../components/Branding";
import LitratoFooter from "../../../components/Footer";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      router.push("/customer_page");
    } else {
      alert("Invalid Nigga");
    } // Redirect to customer page
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
          />
        </div>
        <LitratoBranding />
      </section>

      <section className="flex flex-col items-center justify-center mt-8 gap-y-4 mb-12">
        {/* Username */}
        <div className="bg-[#D9D9D9] p-2 rounded-lg shadow-md w-96">
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-72 px-2 text-xl border-none outline-none bg-transparent"
              placeholder="Enter username"
            />
          </label>
        </div>

        {/* Password */}
        <div className="bg-[#D9D9D9] p-2 rounded-lg shadow-md w-96">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-72 px-2 text-xl border-none outline-none bg-transparent"
              placeholder="Enter password"
            />
          </label>
        </div>

        {/* Login Button */}
        <div
          onClick={handleLogin}
          className="bg-black text-white px-6 py-2 rounded-lg hover:cursor-pointer font-bold transition-all duration-200 hover:bg-gray-800"
        >
          LOGIN
        </div>
      </section>

      <LitratoFooter />
    </div>
  );
}
