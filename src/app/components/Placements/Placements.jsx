import Image from "next/image";
import "./Placements.css";
// import AOS from "aos";

function Placements() {
  // AOS.init();
  return (
    <div className="main-container">
      <h1>Placements</h1>
      <div className="content" data-aos="fade-left" data-aos-duration="2000">
        <div>
          <Image
            src="https://data1.ibtimes.co.in/cache-img-0-450/en/full/644897/1493747079_wipro-wipro-unveils-new-logo-wipro-ceo-abidali-neemuchwala-wipro-chairman-azim-premji.jpg"
            alt="1"
            height="100"
            width="200"
          />
        </div>
        <div>
          <Image
            src="https://media.glassdoor.com/sqll/3862824/wisflux-squarelogo-1662111884631.png"
            alt="2"
            height="100"
            width="200"
          />
        </div>
        <div>
          <Image
            src="https://th.bing.com/th/id/R.d1d2d3cf41095ad28f1a4814377094de?rik=B7zaMPCZg0XEzA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-KuoDdjhvhSc%2fU5hZg1c3fFI%2fAAAAAAAAA2k%2fOX2SpxWBTig%2fs1600%2fzensar_logo.png&ehk=Gj1FNr8qyli4c1cjrrbsfyo47Jg%2bYuvo1gBHoyZwUD8%3d&risl=&pid=ImgRaw&r=0"
            alt="3"
            height="100"
            width="200"
          />
        </div>
        <div>
          <Image
            src="https://th.bing.com/th/id/R.a5088529d0d03b8be531ba910d00fc43?rik=ajNaFGDq3wJ%2bWQ&riu=http%3a%2f%2foutsourcingdigest.com%2fwp-content%2fuploads%2f2018%2f02%2fHexaware-Logo.png&ehk=2mCxgAIfaztsD4E5cyzUdoWzl66TyAaTZn2iuqOrFn8%3d&risl=&pid=ImgRaw&r=0"
            alt="4"
            height="100"
            width="200"
          />
        </div>
        <div>
          <Image
            src="https://www.scoopearth.com/wp-content/uploads/2021/07/Transport_Corporation_of_India_logo.svg_.png"
            alt="5"
            height="100"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}

export default Placements;
