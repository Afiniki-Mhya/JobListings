import Image from "next/image";
import Link from "next/link";
import Cards from "./Components/homeCardProps";
import App from "./Cards/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-br from-[#1E2025] via-[#3C5665] to-[#5A7480] min-h-screen text-black font-[Courier] flex justify-center  ">
      <div className="bg-[#92A4B1] m-10 w-3/4 rounded-xl ">
        <div className=" flex flex-row justify-between p-5 ">
          <h1 className=" font-bold text-lg ">JOBLISTINGS</h1>
          <div className=" flex flex-row gap-6 ">
            <Link href="/">HOME</Link>
            <Link href="/Jobs">JOBS</Link>
            <Link href="/Scholarships">SCHOLARSHIPS</Link>
            <Link href="/Internships">INTERNSHIPS</Link>
          </div>
        </div>

        {/* IMAGE */}
        <div className=" m-6 pb-4 ">
          <div className=" flex flex-row gap-12 justify-center items-center ">
            <div className=" flex flex-col ">
              <h1 className=" font-extrabold text-5xl pt-4 pb-4 ">
                Find your <br></br> career path
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.
              </p>
            </div>
            <img src="works.jpg" width="40%" className="rounded-xl"></img>
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
