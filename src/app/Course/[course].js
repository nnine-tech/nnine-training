import React from 'react';
import { useRouter } from 'next/router';
import SyllabusMarkdown from '../../src/app/markdown/SyllabusMarkdown';

const SyllabusPage = () => {
  const router = useRouter();
  const { course } = router.query;

  return (
    <div>
      <h1>Syllabus</h1>
      {course ? <SyllabusMarkdown course={course} /> : <p>Select a course</p>}
    </div>
  );
};

export default SyllabusPage;
