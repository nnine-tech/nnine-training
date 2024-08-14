import React from 'react'

const DeveopsIntro = () => {
  return (
    
    <div className="flex flex-col md:flex-row w-full ">
    <div className="flex flex-col w-full">
      <h1 className="mt-24 text-center font-bold text-[#000080] text-4xl md:text-5xl">
       DEVOPS
      </h1>
      <div className="flex flex-col md:flex-row mt-2 w-full flex-grow">
        {/* Image Section */}
        <div className="flex justify-center md:w-[36%] mb-4 md:mb-0 flex-grow">
          <img
            src="/deveops.jpg"
            alt="deveops"
            className="w-full max-w-[507px] h-[340px]"
          />
        </div>
        {/* Text Section */}
        <div className=" ml-11 flex flex-col gap-5 items-center md:items-start mt-10 md:w-[64%] flex-grow">
          <h2 className="text-[24px] md:text-[36px] ml-4 md:ml-0 font-poppins">
            Enhance your devops skill
          </h2>
          <p className="text-lg md:text-xl font-poppins mx-4 md:mx-0">
            Develop your deveops skills which
            includes Ducker, gitlab,grafana,azure and aws. DevOps is the combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity.
          </p>

          {/* Flex container for the four images */}
          <div className="flex items-center justify-center w-full max-w-[755px] mx-auto h-[54px] mt-4">
            <div className="flex flex-row items-center gap-5">
              <img
                src="/docker.png"
                alt="Docker"
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
              />
              <img
                src="/aws.png"
                alt="aws"
                className="w-[60px] h-[50px] md:w-[90px] md:h-[70px]"
              />
              <img
                src="/azure.png"
                alt="azure"
                className="w-[40px] h-[40px] md:w-[80px] md:h-[60px]"
              />
              <img
                src="/grafana.png"
                alt="grafana"
                className="w-[60px] h-[40px] md:w-[100px] md:h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  )
}

export default DeveopsIntro