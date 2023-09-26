import { SocialIcon } from "react-social-icons";

const Social = () => {
  return (
    <>
    <div className="flex justify-center text-center pt-32">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Follow us on our Social Media accounts</h1>
    </div>
      <div className="mx-auto flex flex-wrap justify-center pb-32">
        <div className=" max-w-lg max-h-0.5 m-2">
          <SocialIcon url="https://x.com/gdsc_calebuniv" bgColor="purple"/>
        </div>

        <div className=" max-w-lg max-h-0.5 m-2">
          <SocialIcon url="https://instagram.com/gdsc_caleb" bgColor="purple"/>
        </div>
        <div className=" max-w-lg max-h-0.5 m-2">
          <SocialIcon url="https://www.tiktok.com/@calebgdsc" bgColor="purple"/>
        </div>
        <div className=" max-w-lg max-h-0.5 m-2">
          <SocialIcon url="https://www.linkedin.com/company/gdsc-caleb/" bgColor="purple"/>
        </div>
      </div>
    </>
  );
};

export default Social;
