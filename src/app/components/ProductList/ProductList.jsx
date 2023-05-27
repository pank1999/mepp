import "./ProductList.css";
import Product from "../Product/Product.jsx";
import { products } from "../../data";

export default function ProductList() {
  return (
    <div className="ProductList">
      <div className="pl-text">
        <h1 className="pl-title">Create & Inspire. Its Pank1999</h1>
        <p className="pl-desc">
          I am a creative designer and developer, who aims to work with small
          businesses and marginalized communities to bring their passions to
          life. I offer both design and development services of web applications
          or websites!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            height={item.height}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
