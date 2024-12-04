"use client";
const About = () => {
  return (
    <div className="w-full  bg-slate-100 ">
      {/* Contact Us Section */}
      <div className="flex flex-col md:flex-row justify-center items-center w-full lg:h-[500px] h-[400px] bg-cover bg-center bg-[url('/contactpage1.svg')]">
        <div className="w-full md:w-[800px]  md:mt-0 flex flex-col justify-center items-center lg:px-5 ">
          <h1 className="text-6xl font-Quicksand font-bold  text-white">
            About Us
          </h1>
          <h1 className="text-xl font-Quicksand font-semibold text-white mt-5 text-center ">
            Empowering Your Future with Cutting-Edge IT training with Nnine
            Solution{" "}
          </h1>
        </div>
      </div>
      <div className="">
        {/* WhatsApp Icon wrapped in a link */}
        <a
          href="https://wa.me/9779851359759"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/whatapp.svg"
            alt="WhatsApp Icon"
            className="w-[50px] h-[50px] md:w-[70px] md:h-[70px] fixed right-5"
            style={{
              top: "50%",
              transform: "translateY(-50%)", // Keeps the icon centered vertically
              zIndex: "9999",
              animation: "spin 4s linear infinite", // Ensures the icon spins
            }}
          />
        </a>
      </div>
      {/* Keyframes for spinning animation */}
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>

      {/* About N9 Solution Section */}
      <div className="p-8 flex flex-col md:flex-row items-center pl-24">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#031262]">
            About N9 Solution
          </h2>
          <p className="mt-3 text-justify font-Quicksand font-semibold text-[16px] sm:text-[20px] leading-[24px] sm:leading-[30px]">
            Welcome to N9 Solution, your premier destination for cutting-edge
            expertise in DevOps, AWS, Blockchain, and game development. At N9
            Solution, we blend passion with proficiency, equipping individuals
            and organizations with the skills and strategies needed to thrive in
            today's rapidly evolving technological landscape.
          </p>
          <div className="mt-6">
            <button className="text-[#1D0DD6] font-bold">GET IN TOUCH ➜</button>
          </div>
        </div>
        <img
          className="w-full md:w-auto md:ml-5 mt-6 md:mt-0 lg:-mt-56"
          src="image.png"
          alt="N9 Solution"
        />
      </div>

      {/* Our Mission Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-[#D7E4FE] max-w-full h-auto rounded-r-[30px] mx-auto mt-[80px] ml-0 md:ml-[120px] mb-8 shadow-lg p-6 md:w-[1250px]">
        <div className="absolute hidden md:flex items-center justify-center">
          <img
            src="About1.png"
            alt="Mission Icon"
            className="h-[280px] w-[380px] -ml-[230px] "
          />
        </div>
        <div className="px-8 mt-6 md:mt-0">
          <div className="flex justify-center items-center">
            <img
              className="h-[52px] w-[60px] mr-2"
              src="icon1.png"
              alt="Icon"
            />
            <h3 className="text-[#001D6E] font-Quicksand text-[20px] sm:text-[25px] text-center leading-[30px] font-semibold mb-2">
              Our Mission
            </h3>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-Quicksand font-semibold">
            At N9 Solution, we are driven by a singular mission - to empower
            innovation. We believe in harnessing the power of technology to
            drive positive change and unlock new possibilities. Through our
            comprehensive training programs and strategic consultancy services,
            we aim to catalyze growth, foster innovation, and elevate success.
          </p>
        </div>
      </div>

      {/* Our Promise Section */}
      <div className="relative flex flex-col md:flex-row items-center bg-[#D7E4FE] max-w-full h-auto rounded-[30px] mx-auto mt-[80px] mb-8 px-8 py-6 ml-0 md:ml-[60px] mr-0 md:mr-[115px] md:w-[1200px] ">
        <div className="flex-1">
          <div className="flex justify-center items-center mb-4">
            <img src="icon2.png" className="mr-3" alt="Icon" />
            <h3 className="text-[#001D6E] font-Quicksand text-[20px] sm:text-[24px] leading-[30px] font-semibold">
              Our Promise
            </h3>
          </div>
          <p className="text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] font-Quicksand font-semibold pl-[20px] md:w-[1150px]">
            When you choose N9 Solution, you're not just investing in training
            or consultancy services - you're investing in your future. We are
            committed to delivering excellence in everything we do, providing
            unparalleled expertise, personalized support, and tangible results.
            With N9 Solution by your side, the possibilities are endless.
          </p>
        </div>
        <div className="absolute hidden md:flex right-[-170px] items-center justify-end">
          <img
            src="About2.png"
            alt="Promise Icon"
            className="h-[320px] w-[300px]"
          />
        </div>
      </div>

      {/* Join Us Section */}
      <div className="relative bg-[#D7E4FE] w-full flex justify-center p-[20px] sm:p-[37px] mx-auto mt-[80px] rounded-md ">
        <div className="relative flex flex-col md:flex-row items-center">
          {/* Image Container */}
          <div className="relative z-10 flex-shrink-0 mb-6 md:mb-0 md:mr-[100px]">
            <img
              src="About3.png"
              alt="Join Us Image"
              className="w-[300px] h-[320px] md:w-[333px] md:h-[357px] object-cover rounded-tl-[100px] rounded-br-[100px]"
            />
          </div>
          <div className="relative z-0 bg-[#F2EEEE] w-full md:w-[900px] h-auto p-6 sm:p-10 pl-[20px] md:pl-[150px] rounded-md">
            {/* Centered Join Us and Icon3 */}
            <div className="flex justify-center items-center mb-2">
              <img
                className="h-[40px] sm:h-[60px] w-[50px] sm:w-[80px] ml-3"
                src="icon3.png"
                alt="Icon"
              />
              <div className="text-[#001D6E] text-xl sm:text-2xl font-bold">
                Join Us
              </div>
            </div>
            {/* Left-Aligned Paragraph */}
            <p className="text-md sm:text-lg text-left font-Quicksand font-semibold">
              Ready to embark on a journey of innovation and growth? Contact N9
              Solution today to learn more about our training programs and
              consultancy services. Together, let's unlock the full potential of
              technology and achieve greatness.
            </p>
          </div>
        </div>
      </div>

      {/* Our Focus Areas Section */}
      <h2 className="text-2xl sm:text-3xl font-bold text-black text-center p-6 sm:p-11 ">
        Our Focus Areas
      </h2>

      <div className="p-4 sm:p-6 bg-[#D7E4FE] h-auto">
        <div className="flex flex-wrap justify-center gap-[20px] sm:gap-[30px]">
          <div className="w-[180px] sm:w-[240px] h-[220px] sm:h-[260px] bg-white p-4 rounded-[15px] flex flex-col items-center justify-center">
            <img
              src="/im1.png"
              alt="Game Development Expertise"
              className="mb-4 -mt-10"
            />
            <h4 className="text-md sm:text-lg font-semibold text-center mt-2">
              Game Development Expertise
            </h4>
          </div>
          <div className="w-[180px] sm:w-[240px] h-[220px] sm:h-[260px] bg-white p-4 rounded-[15px] flex flex-col items-center justify-center">
            <img
              src="/im2.png"
              alt="DevOps Excellence"
              className="mb-4 -mt-14"
            />
            <h4 className="text-md sm:text-lg font-semibold text-center mt-2">
              DevOps Excellence
            </h4>
          </div>
          <div className="w-[180px] sm:w-[240px] h-[220px] sm:h-[260px] bg-white p-4 rounded-[15px] flex flex-col items-center justify-center">
            <img src="/im3.png" alt="AWS Mastery" className="mb-4 -mt-10" />
            <h4 className="text-md sm:text-lg font-semibold text-center mt-2">
              AWS Mastery
            </h4>
          </div>
          <div className="w-[180px] sm:w-[240px] h-[220px] sm:h-[260px] bg-white p-4 rounded-[15px] flex flex-col items-center justify-center">
            <img
              src="/im4.png"
              alt="Blockchain Innovation"
              className="mb-4 -mt-10"
            />
            <h4 className="text-md sm:text-lg font-semibold text-center mt-2">
              Blockchain Innovation
            </h4>
          </div>
          <div className="w-[180px] sm:w-[240px] h-[220px] sm:h-[260px] bg-white p-4 rounded-[15px] flex flex-col items-center justify-center">
            <img
              src="/im5.png"
              alt="Training Services for Students"
              className="mb-4 -mt-10"
            />
            <h4 className="text-md sm:text-lg font-semibold text-center mt-2">
              Training Services for Students
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
