import React, { useState, useEffect, useContext } from "react";
import DeviceYPosition from "../../contexts/DeviceYPosition";

import { IoMdUnlock } from "react-icons/io";
import { BsMegaphoneFill } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

function Cta() {
  const { y, setY } = useContext(DeviceYPosition);

  return (
    <section id="cta">
      <div id="share" className="cta-div">
        <div className="cta-icons">
          <IoMdUnlock />
        </div>
        <h2>Share</h2>
        <p>
          Share downloads or links of your music in return for automatic likes,
          reposts, comments and followers
        </p>
        <button className="btn-gate">CREATE GATE</button>
      </div>
      <div id="promote" className="cta-div">
        <div className="cta-icons">
          <BsMegaphoneFill />
        </div>
        <h2>Promote</h2>
        <p>
          Get your music heard and into the Spotlight on top of Hypeddit’s Top
          100 Charts and New Releases
        </p>
        <button className="btn-gate">PROMOTE</button>
      </div>
      <div id="learn" className="cta-div">
        <div className="cta-icons">
          <FaGraduationCap />
        </div>
        <h2>Learn</h2>
        <p>
          Learn how the top artists promote their music and explode their
          fanbase... then do the same
        </p>
        <button className="btn-gate">LEARN</button>
      </div>
    </section>
  );
}
export default Cta;
