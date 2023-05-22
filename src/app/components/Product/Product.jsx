import Link from "next/link";
import "./Product.css";
import Image from "next/image";

export default function Product({ link, img }) {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <Link href={link} target="_blank" rel="noreferrer">
        <Image
          src={img}
          alt="product"
          className="p-img"
          width="auto"
          height="auto"
        />
      </Link>
    </div>
  );
}
