"use client";
import Typewriter from "typewriter-effect";

function CarrerHeader() {
  return (
    <>
      Find your
      <br></br>
      <Typewriter
        onInit={(typewriter) => {
          typewriter

            .deleteAll()
            .typeString("Scholraships")
            .pauseFor(2500)
            .deleteAll()
            .typeString("Interships")
            // .callFunction(() => {
            //   console.log("All strings were deleted");
            // })
            .pauseFor(2500)
            .deleteAll()

            .typeString("career path")
            // .callFunction(() => {
            //   console.log("String typed out!");
            // })
            .pauseFor(2500)
            .start();
        }}
        options={{
          loop: true,
        }}
      />{" "}
    </>
  );
}

export default CarrerHeader;
