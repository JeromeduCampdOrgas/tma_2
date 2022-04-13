import { useState } from "react";

import TypeWriterEffect from "react-typewriter-effect";

import { MdPlayArrow } from "react-icons/md";
import { GrLike } from "react-icons/gr";
function Home() {
  return (
    <section id="home">
      <div className="home-type-writter">
        <TypeWriterEffect
          textStyle={{
            fontFamily: "Red Hat Display",
            color: "violet",
            fontWeight: 700,
            fontSize: "1.5em",
          }}
          startDelay={1000}
          cursorColor="#3F3D56"
          multiText={["PROMOTE", "SHARE"]}
          multiTextLoop={true}
          nextTextDelay={1000}
          typeSpeed={30}
        />
      </div>
      <div>
        <h1>YOUR MUSIC</h1>
        <p>
          We help you grow your audience and get more real fans for your music.
          And yes... our tools work for any genre.
        </p>
        <div id="btn-try-like">
          <div id="trail-btn">
            <h5>TRY FOR FREE</h5>
            <MdPlayArrow id="arrow" />
          </div>
          <div className="like">
            <GrLike /> like
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
