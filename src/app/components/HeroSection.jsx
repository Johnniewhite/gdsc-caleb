import Image from "next/image";

const HeroSection = () => {
  return (
    <>
      <div className="mx-auto flex flex-wrap max-w-7xl items-center justify-between p-6 pt-0 lg:px-8">
        <div className="w-full sm:w-1/2">
          <div className="text-left">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              WELCOME TO GDSC CALEB UNIVERSITY
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An all-inclusive community designed to foster growth and collaboration in the tech space at Caleb University.
            </p>
            <div className="mt-10 flex items-center justify-left gap-x-6">
              <a
                href="https://gdsc.community.dev/caleb-university/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a>
              <a
                href="/engagement"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Check Out Activities <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 py-12">
          <div
          className="mb:mx-[-40px]"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gridGap: "6px", // Adjust the gap as needed
            }}
          >
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <img
                className="border border-gray-400 rounded-lg"
                src="/fulllLogo.jpeg"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <img
                className="border border-gray-400 rounded-lg"
                src="/infoSesh.jpeg"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <img
                className="border border-gray-400 rounded-lg"
                src="/infoSeshFlyer.jpeg"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
              <img
                className="border border-gray-400 rounded-lg"
                src="/flyerTwo.jpeg"
                alt=""
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
