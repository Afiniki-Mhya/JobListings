import Image from "next/image";
import Link from "next/link";
import Cards from "./Components/homeCardProps";
import App from "./Cards/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#5A7480] via-[#3C5665] to-[#1E2025] min-h-screen text-black font-[poppins] flex justify-center  ">
      <div className="bg-[#92A4B1] m-10 w-3/4 rounded-xl ">
        <div className=" flex flex-row justify-between p-3  ">
          <h1 className=" font-bold text-lg pl-16 ">JOBLISTINGS</h1>
        </div>

        {/* IMAGE */}
        <div className="  pb-4 p-2">
          <div className=" flex  flex-col-reverse sm:flex-row  md:gap-48 justify-center items-center ">
            <div className=" flex flex-col ">
              <h1 className=" font-extrabold text-3xl sm:text-5xl md:pt-4 md:pb-4  ">
                Find your <br></br> career path
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.
              </p>
            </div>
            <img src="works.jpg" width="40%" className="sm:rounded-full w-full rounded-md sm:w-fit "></img>
          </div>
        </div>

        {/* CARDS */}
        <div className=" flex flex-row gap-3 justify-center items-center ">
          <App />
        </div>
      </div>
    </main>
  );
}
