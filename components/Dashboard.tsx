import Image from "next/image";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaRegFileAlt } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function LitratoDashboard() {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const handleLogout = () => {
    setShowLogoutModal(true);
  };
  const confirmLogout = () => {
    setShowLogoutModal(false);
    router.push("/login_page");
  };
  const cancelLogout = () => {
    setShowLogoutModal(false);
  };
  const data = [
    {
      orgName: "SAMAHAN Systems and Development",
      eventName: "SAMAHAN SYSDEV General Assembly",
      date: "Jan 16, 2025",
      startTime: "08:00 AM",
      endTime: "12:00 PM",
      package: "Standard",
      place: "Finster Auditorium",
      paymentStatus: "Paid",
      status: "Approved",
      color: "bg-blue-600",
    },
  ];
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white py-4 px-10 rounded-lg items-center shadow-lg min-w-[300px] relative">
            <h2 className="text-2xl font-semibold mb-4">Confirm Logout</h2>
            <p className="mb-4">Are you sure you want to log out?</p>
            <div className="flex gap-2 justify-center">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400"
                onClick={cancelLogout}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                onClick={confirmLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col flex-1 p-4 overflow-y-auto">
        <div className=" flex flex-row justify-between items-center">
          <p className="text-4xl font-semibold">Hello, Valued Customer!</p>
          <div
            onClick={handleLogout}
            className="bg-black rounded-lg p-2 hover:cursor-pointer text-white"
          >
            LOGOUT
          </div>
        </div>
        <p className="text-lg font-semibold mt-4">Quick Actions</p>

        <div className="flex flex-row gap-2 px-2">
          <div className="flex bg-gray-300 border-2 border-black w-full items-center justify-center text-black rounded-lg sm:w-[170px] h-[50px] text-base">
            <HiOutlinePlusCircle className="text-xl mr-2" />
            Add Booking
          </div>
          <div className="flex bg-gray-300 border-2 border-black w-full items-center justify-center text-black rounded-lg sm:w-[170px] h-[50px] text-base">
            <FaRegFileAlt className="text-xl mr-2" />
            Add Booking
          </div>
        </div>

        <p className="text-lg font-semibold mt-4">Request Overview</p>
        <div className="flex flex-row gap-2 px-2">
          <Card className="h-32 w-72 border-black border-2 rounded-2xl bg-gray-300">
            <CardHeader className="flex flex-row items-center text-black text-lg font-medium justify-between">
              Approved
              <a href="">
                <HiOutlineExternalLink className="text-black" />
              </a>
            </CardHeader>
            <CardContent className="text-black text-4xl font-medium mt-[-10px]">
              7
            </CardContent>
          </Card>
          <Card className="h-32 w-72 border-black border-2 rounded-2xl bg-gray-300">
            <CardHeader className="flex flex-row items-center text-black text-lg font-medium justify-between">
              Approved
              <a href="">
                <HiOutlineExternalLink className="text-black" />
              </a>
            </CardHeader>
            <CardContent className="text-black text-4xl font-medium mt-[-10px]">
              7
            </CardContent>
          </Card>
          <Card className="h-32 w-72 border-black border-2 rounded-2xl bg-gray-300">
            <CardHeader className="flex flex-row items-center text-black text-lg font-medium justify-between">
              Approved
              <a href="">
                <HiOutlineExternalLink className="text-black" />
              </a>
            </CardHeader>
            <CardContent className="text-black text-4xl font-medium mt-[-10px]">
              7
            </CardContent>
          </Card>
        </div>

        <p className="text-lg font-semibold mt-4">Booking Overview</p>
        <div className="flex flex-row bg-gray-300 h-10 items-center px-4 pt-3 font-semibold rounded-t-xl">
          <p>Event Name</p>
          <p className="ml-64">Date</p>
          <p className="ml-25">StartTime</p>
          <p className="ml-13">EndTime</p>
          <p className="ml-13">Package</p>
          <p className="ml-14">Place</p>
          <p className="ml-36">Payment Status</p>
        </div>
        <div className="border border-gray-300 shadow-sm">
          <div className="overflow-y-auto max-h-72">
            <Table className="min-w-full table-auto text-xs sm:text-sm md:text-base">
              <TableBody>
                {data.map((row, i) => (
                  <TableRow key={i} className="text-sm">
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      <div className="flex items-center gap-2 font-medium">
                        <span className={`w-3 h-3 rounded-full ${row.color}`} />
                        {row.eventName}
                      </div>
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      {row.date}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      {row.startTime}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      {row.endTime}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      {row.package}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      {row.place}
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      <span
                        className={`${
                          row.paymentStatus === "Paid"
                            ? "text-green-700"
                            : row.paymentStatus === "Pending"
                            ? "text-yellow-600"
                            : "text-red-600"
                        } font-medium`}
                      >
                        {row.paymentStatus}
                      </span>
                    </TableCell>
                    <TableCell className="px-4 py-3 whitespace-nowrap">
                      <button>
                        <Image
                          src={"/Icons/edit.png"}
                          alt="reschedule"
                          width={20}
                          height={10}
                        />
                      </button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
