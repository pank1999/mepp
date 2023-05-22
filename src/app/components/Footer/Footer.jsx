import "./Footer.css";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import { useContext } from "react";
import { TheameContext } from "../../context";
import Link from "next/link";

export default function Footer() {
  // const theame = useContext(TheameContext);
  const darkMode = true;

  return (
    <div className="f">
      <Link
        href="#"
        className="f-a"
        style={{ color: darkMode ? "white" : "black" }}
        rel="noreferrer"
        target="_blank"
      >
        <Facebook style={{ fontSize: "30px", marginRight: "10px" }} />
      </Link>
      <Link
        href="#"
        className="f-a"
        style={{ color: darkMode ? "white" : "black" }}
        rel="noreferrer"
        target="_blank"
      >
        <Instagram style={{ fontSize: "30px", marginRight: "10px" }} />
      </Link>
      <Link
        href="https://github.com/pank1999"
        style={{ color: darkMode ? "white" : "black" }}
        className="f-a"
        rel="noreferrer"
        target="_blank"
      >
        <GitHub style={{ fontSize: "30px", marginRight: "10px" }} />
      </Link>
      <Link
        href="https://twitter.com/Pankajp56829682"
        style={{ color: darkMode ? "white" : "black" }}
        className="f-a"
        rel="noreferrer"
        target="_blank"
      >
        <Twitter style={{ fontSize: "30px", marginRight: "10px" }} />
      </Link>
      <Link
        href="https://www.linkedin.com/in/pankaj-kumar-pandey/"
        style={{ color: darkMode ? "white" : "black" }}
        className="f-a"
        rel="noreferrer"
        target="_blank"
      >
        <LinkedIn style={{ fontSize: "30px", marginRight: "10px" }} />
      </Link>
    </div>
  );
}
