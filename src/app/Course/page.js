import React from 'react';
import CourseMarkdown from '../src/app/markdown/CourseMarkdown';
import Footer from '@/components/Footer';

const CoursePage = () => {
  return (
    <div>
      <h1>Courses</h1>
      <CourseMarkdown />
      <Footer/>
    </div>
  );
};

export default CoursePage;
