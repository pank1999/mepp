import Image from "next/image";
import "./Experiance.css";
// import AOS from "aos";

export default function Experiance() {
  // AOS.init();
  return (
    <div className="exp">
      <h1 className="exp-title">Work Experiance</h1>
      <div className="exp-container">
        <div
          className="exp-item"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div className="exp-left">
            <Image
              src="https://media.licdn.com/dms/image/C4D0BAQHf0gTA_aypmw/company-logo_200_200/0/1655293981541?e=2147483647&v=beta&t=rFLJfloBjyZepl50_dN8RI1ixKsFdUEjnge83We6xPY"
              alt="img"
              height="100"
              width="100"
            />
          </div>
          <div className="exp-right">
            <h2>Wisflux Private Limited</h2>
            <h3>
              Full Stack Developer Intern <span>[09/2022 - current]</span>{" "}
            </h3>
            <p>
              I works in both front end back end both and manage the hosting
              sever, technologies works on are Angular React Typescript
              Express.Js Nest.Js Sequelize Postgres-sql and MongoDB .  Backend
              Logic for Invites based platform, database designing, User
              profiles and User Dashboard functionality.
            </p>
          </div>
        </div>
        <div
          className="exp-item"
          data-aos="zoom-in-up"
          data-aos-duration="1500"
        >
          <div className="exp-left">
            <Image
              src="https://media-exp1.licdn.com/dms/image/C560BAQGI7tBL7mu0UA/company-logo_200_200/0/1661429182960?e=2147483647&v=beta&t=cQeKU6URJigyhHp0nuWax9Q-NdOuow3LZFq1NoNCrQA"
              alt="exp"
              height="100"
              width="100"
            />
          </div>
          <div className="exp-right">
            <h2>UPCRED</h2>
            <h3>
              Software Engineer Intern <span>[10/2021 - 12/2021]</span>{" "}
            </h3>
            <p>
              Working on live project and collaboration with development team on
              Bitbucket working environment and using REACT for UI.Adding
              animations on website using AOS animation library and improving
              user interface and increasing the user interaction percentages
            </p>
          </div>
        </div>
        <div
          className="exp-item"
          data-aos="zoom-in-up"
          data-aos-duration="2000"
        >
          <div className="exp-left">
            <Image
              src="https://media-exp2.licdn.com/dms/image/C4D0BAQG_Bh8qz_qV0w/company-logo_200_200/0/1627766731477?e=2147483647&v=beta&t=VNQ2d-QqdKiEzRs_YRVioKv34Tt0rUW03OE45nvAnkw"
              alt="exp"
              height="100"
              width="100"
            />
          </div>
          <div className="exp-right">
            <h2>SKYHYPE</h2>
            <h3>
              FullStack Developer Intern <span>[06/2021 - 09/2021]</span>{" "}
            </h3>
            <p>
              I lead the pivot development team, works in both front end back
              end both and manage the hosting sever, technologies works on are
              HTML, CSS, JAVASCRIPT, NODE.JS, MONGODB, MYSQL.  Backend Logic
              for Invites based platform, database designing, User profiles and
              User Dashboard functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
