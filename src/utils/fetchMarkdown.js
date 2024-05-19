// src/utils/fetchMarkdown.js
import matter from 'gray-matter';

export async function fetchMarkdownFile(filePath) {
  const response = await fetch(filePath);
  if (!response.ok) {
    throw new Error(`Failed to fetch the file at ${filePath}`);
  }
  const fileContents = await response.text();

  // Parse the markdown file and extract the data
  const { data } = matter(fileContents);

  // Assuming data contains the necessary course details
  return data.courses;
}
