import "./Slider.css";
import img1 from "../../img/python.png";
import img2 from "../../img/sih.png";
// import img3 from "../../img/PRO-console.jpg";
import img4 from "../../img/internshala.png";

// import { ArrowBack, ArrowForward } from "@mui/icons-material";
// import AOS from "aos";
import Image from "next/image";

export default function Slider() {
  // AOS.init();

  return (
    <div className="Slider-container">
      <div>
        <h1>Certifications</h1>
        {/* <ArrowBack /> */}
      </div>
      <div className="Slides">
        <div
          className="img-cont"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Image src={img1} alt="img" />
        </div>
        {/* <div className="img-cont">
               <img src={img3} alt="img" />
           </div> */}
        <div
          className="img-cont"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Image src={img2} alt="img" height="202" width="300" />
        </div>
        <div
          className="img-cont"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <Image src={img4} alt="img" />
        </div>
      </div>
      <div>{/* <ArrowForward /> */}</div>
    </div>
  );
}
