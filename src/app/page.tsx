import Image from "next/image";
import Link from "next/link";
import Cards from "./Components/homeCardProps";
import App from "./Cards/page";
import CarrerHeader from "./CarrerHeader";
export default function Home() {
  return (
    <main className="bg-gradient-to-r from-red-600 to-violet-600  min-h-screen text-black  flex justify-center  ">
      <div className="bg-white/70 backdrop:blur m-10 w-3/4 rounded-xl ">
        <div className=" flex flex-row justify-between p-3  ">
          <h1 className=" font-bold text-2xl pl-16 cursor-pointer ">
            JOBLISTINGS
          </h1>
        </div>

        {/* IMAGE */}
        <div className="  pb-4 p-2">
          <div className=" flex  flex-col-reverse sm:flex-row md:gap-48 justify-center items-center ">
            <div className=" flex flex-col ">
              <h1 className=" font-extrabold text-3xl sm:text-5xl md:pt-4 md:pb-4  ">
                <CarrerHeader />
              </h1>
              <p>
                Lorem Ipsum is simply dummy text of <br></br>the printing and
                typesetting industry.
              </p>
            </div>
            <img
              src="works.jpg"
              width="40%"
              className="sm:rounded-full w-full rounded-md sm:max-w-[30rem] "
            ></img>
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
