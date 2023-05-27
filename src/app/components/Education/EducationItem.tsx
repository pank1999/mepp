import Image from "next/image";
import React from "react";
import "./Education.css";

export default function EducationItem({
  title,
  img,
  session,
  percentage,
  instituteName,
}) {
  return (
    <div className="Edu-item">
      <Image src={img} alt="" height="100" width="100" />
      <span className="title">{title}</span>
      <span className="percentage">{percentage} %</span>
      <span className="institute">{instituteName}</span>
      <span>{session}</span>
    </div>
  );
}
