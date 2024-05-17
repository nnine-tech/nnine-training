import React from 'react';
import TrainerProfile from '@/components/TrainersProfile'

const TrainersPage = () => {
  const trainersData = [
    {
      imageUrl: process.env.PUBLIC_URL + '/deepak.png',
      imageAlt: 'deepak.jpg',
      name: 'Deepak Bomjan',
      description: 'Mr. Bomjan is a highly regarded Certified DevOps trainer, boasting over 15 years of invaluable industry experience. His expertise stems from years of hands-on work as a system engineer at prestigious firms such as CAS and Logpoint. Renowned for his adeptness in enterprise training, Mr. Bomjan brings a wealth of practical knowledge and real-world insights to his teaching.',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/jaya.png',
      imageAlt: 'jaya.jpg',
      name: 'Jaya Kumar Neupane',
      description: 'Meet our Oracle-Certified trainer, boasting an impressive 15-year tenure in the field. With a wealth of experience under their belt, they bring unparalleled expertise and insight to every session.',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/kumar.jpg',
      imageAlt: 'kumar.jpg',
      name: 'Kumar Lamichhane',
      description: 'Presenting our Java-Certified trainer, bringing a decade of extensive experience to the table. With a strong foundation in Java development and training, they offer unparalleled expertise and guidance to learners at every level',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/saurav.jpg',
      imageAlt: 'saurav',
      name: 'Saurav Gautam',
      description: 'Introducing our Python/Django-Certified trainer, equipped with a decade of invaluable experience in the field. With a solid background in Python and Django, they offer comprehensive training backed by years of practical expertise.',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/niresh.jpg',
      imageAlt: 'niresh',
      name: 'Niresh Dhakal',
      description: 'Mr Dhakal holds Master degree from Otto-von-Guericke university, Germany. He is a RHEL Certified trainer and Full Stack Developer with more than 10 years of Academic/professional experience',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/sudan.jpg',
      imageAlt: 'sudan',
      name: 'Sudan Pudasaini',
      description: 'Meet our certified .NET trainer, backed by a decade of hands-on experience. With a profound understanding of .NET technologies, they deliver expert training and mentorship to empower learners in mastering the intricacies of the platform.',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/raj.png',
      imageAlt: 'Raj',
      name: 'Raj Kamal Thapa',
      description: 'Introducing our seasoned Network Engineer, boasting over 15 years of extensive industry experience. With a proven track record of success, they bring a wealth of knowledge and expertise to every project, ensuring robust and efficient network solutions',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/gyan.png',
      imageAlt: 'Gyan',
      name: 'Gyan Bahadur Tamang',
      description: '"Meet our Oracle Certified trainer, equipped with over a decade of comprehensive industry experience. With a proven track record of success, they offer invaluable insights and expertise to guide learners towards mastery in Oracle technologies.',
    },
    {
      imageUrl: process.env.PUBLIC_URL + '/pradeep.jpg',
      imageAlt: 'Pradeep',
      name: 'Pradeep Aryal',
      description: 'Mr Aryal holds a Master degree from Germany in Machine Learning and Data Science. He is working as data analyst and Machine learning engineer since last decade.',
    },


    
    // Add more trainer profiles as needed
  ];


  return (
    <>
      <br></br>
      <br></br>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {trainersData.map((trainer, index) => (
            <div key={index} className="flex items-center justify-center">
              <TrainerProfile {...trainer} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrainersPage;
