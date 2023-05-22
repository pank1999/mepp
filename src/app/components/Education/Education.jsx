import Image from "next/image";
import "./Education.css";

export default function Education() {
  return (
    <div className="Education">
      <h1>Education</h1>
      <div className="Eduction-container">
        <div className="Edu-item">
          <Image
            src="https://upload.wikimedia.org/wikipedia/en/c/c4/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png"
            alt=""
            height="200"
            width="200"
          />
          <h3>B.Tech CSE</h3>
          <p>[2018 -2022]</p>
          <p>86%</p>
        </div>
        <div className="Edu-item">
          <Image
            height="200"
            width="200"
            src="https://media-exp1.licdn.com/dms/image/C510BAQHSkMicNJO1-w/company-logo_200_200/0/1549271665778?e=2147483647&v=beta&t=kAdilSy2KaSUmZBDL6LmCDSG6axs7kzVemIqSr5gn08"
            alt=""
          />
          <h3>Class 12th</h3>
          <p>[2017 -2018]</p>
          <p>61%</p>
        </div>
      </div>
    </div>
  );
}
