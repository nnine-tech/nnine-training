import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const CourseMarkdown = () => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('/markdown/course-list.md')
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, []);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default CourseMarkdown;
