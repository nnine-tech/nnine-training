import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const SyllabusMarkdown = ({ course }) => {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(`/markdown/syllabus/${course}.md`)
      .then(response => response.text())
      .then(text => setMarkdown(text));
  }, [course]);

  return <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>;
};

export default SyllabusMarkdown;
