
import WebdevelopmentForm from './WebdevelopmentForm';

const WebdevelopmentSchedule= () => {
  const schedules = [
    { date: '28 July', time: '4:00 pm - 5:00 pm' },
    { date: '29 July', time: '5:00 pm - 6:00 pm' },
    { date: '28 July', time: '4:00 pm - 5:00 pm' },
    { date: '29 July', time: '5:00 pm - 6:00 pm' },
 
  ];

  return (
    <div className="w-[40%] flex flex-col gap-12 items-start font-poppins mt-4">
      <div className="mr-4 p-[10px] h-auto w-[390px] bg-[#F6F9ED] rounded-xl shadow-bottom ml-1">
        <div>
          <h1 className="text-xl font-poppins text-center text-[#000080] mb-[20px] font-medium">
            UPCOMING SCHEDULE
          </h1>
        </div>

        {schedules.map((schedule, index) => (
          <div key={index} className="flex justify-between mb-[20px] font-semibold">
            <div className="flex items-center ml-4">
              <img src="/calender.svg" alt="Calendar Icon" className="p-2" />
              <span className="ml-1">{schedule.date}</span>
            </div>
            <div className="flex items-center">
              <img src="/time.svg" alt="Time Icon" className="p-2" />
              <span className="ml-1 mr-4">{schedule.time}</span>
            </div>
          </div>
        ))}
      </div>
      <WebdevelopmentForm/>
    </div>
  );
};

export default WebdevelopmentSchedule;
