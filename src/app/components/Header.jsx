import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <div className="generalHeaderBox">
        <div className="childItemInHeader">
          <Image src="/logo.png" alt="logo" width={50} height={50} />
        </div>

        <div className="childItemInHeader">
          <h1 className="titleText">GDSC CALEB UNIVERSITY</h1>
        </div>
        <div className=" linksRouter">
        <ul>
        <li><a href="/contact">Contact</a></li>
        

        </ul>
            
        </div>
        
      </div>
    </>
  );
};

export default Header;
