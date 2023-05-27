import Image from "next/image";
import "./Education.css";
import EducationItem from "./EducationItem";

export default function Education() {
  return (
    <div className="Education">
      <h1>Education</h1>
      <div className="Eduction-container">
        <EducationItem
          img="https://upload.wikimedia.org/wikipedia/en/c/c4/Rajiv_Gandhi_Proudyogiki_Vishwavidyalaya_logo.png"
          instituteName="VITS Satna M.P,India"
          percentage={85}
          session="2018-2022"
          title="B.Tech (CSE)"
        />

        <EducationItem
          img="https://media-exp1.licdn.com/dms/image/C510BAQHSkMicNJO1-w/company-logo_200_200/0/1549271665778?e=2147483647&v=beta&t=kAdilSy2KaSUmZBDL6LmCDSG6axs7kzVemIqSr5gn08"
          instituteName="Blooms Academy Satna M.P,India"
          percentage={61}
          session="2017-2018"
          title="Class 12th"
        />
        <EducationItem
          img="https://media-exp1.licdn.com/dms/image/C510BAQHSkMicNJO1-w/company-logo_200_200/0/1549271665778?e=2147483647&v=beta&t=kAdilSy2KaSUmZBDL6LmCDSG6axs7kzVemIqSr5gn08"
          instituteName="Blooms Academy Satna M.P, India"
          percentage={76}
          session="2015-2016"
          title="Class 10th"
        />
      </div>
    </div>
  );
}
