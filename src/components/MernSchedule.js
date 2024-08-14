import MernForm from './MernForm';

const MernSchedule = () => {
  return (
    <div className="w-[40%] flex flex-col gap-12 items-start font-poppins ">
      <div className="mr-4 p-[10px] h-[166px] w-[430px] bg-[#F6F9ED] rounded-xl shadow-bottom ml-1"> 
        <div>
          <h1 className='text-xl font-poppins text-center text-[#000080] mb-[20px] font-medium'>UPCOMING SCHEDULE</h1> 
        </div>
        
        <div className='flex justify-between mb-[20px] font-semibold '>
          <div className="flex items-center ml-4">
            <img src="/calender.svg" alt="" className='p-2' />
            <span className='ml-1 '>28 July</span> 
          </div>
          <div className="flex items-center ">
            <img src="/time.svg" alt="" className='p-2' />
            <span className='ml-1 mr-4'>4:00 pm - 5:00 pm</span> 
          </div>
        </div>

        <div className='flex justify-between font-semibold'>
          <div className="flex items-center ml-4">
            <img src="/calender.svg" alt="" className='p-2' />
            <span className='ml-1'>29 July</span> 
          </div>
          <div className="flex items-center">
            <img src="/time.svg" alt="" className='p-2' />
            <span className='ml-1 mr-4'>5:00 pm - 6:00 pm</span> 
          </div>
        </div>
      </div>
     <MernForm/>
    </div>
  );
}

export default MernSchedule;