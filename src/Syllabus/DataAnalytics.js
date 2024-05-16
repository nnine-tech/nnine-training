import React from 'react';
import NavBar from '../components/Navbar/NavBar';

const DataAnalytics = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <br />
      <div className="bg-blue-300 min-h-screen p-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
       <div>
        <h1 className="text-blue-900 text-3xl font-bold mb-4 text-justify">Data Analysis and Machine Learning with Python</h1>
        <h2 className="text-xl text-red-500 font-bold mb-4">1. Introduction to Programming with Python</h2>
          <h3 className="text-lg text-blue-500 font-semibold mb-2">1.1 Variable and Data Types </h3>
          <ul className="list-disc text-black ml-8">
            <li>Numbers</li>
            <li>Strings</li>
            <li>Variable and memory</li>
            <li>List</li>
            <li>Tuple</li>
            <li>Dictionary</li>
            <li>Sets</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">1.2 Decision and loops</h3>
          <ul className="list-disc ttext-black  ml-8">
            <li>If, elif, else</li>
            <li>For and while loops</li>
            <li>Break and Continue</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">1.3 Function and Recursion</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Need of using function</li>
            <li>Difference between for loops and recursion</li>
            <li>Writing Quality codes</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">1.4 File and exception handling</h3>
          <ul className="list-disc text-black ml-8">
            <li>Streams with file operation</li>
            <li>Interrupts</li>
            <li>Exception handling</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">1.5 Object Oriented Programming (OOP)</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Procedural vs Object Oriented Programming</li>
            <li>Introduction to Classes</li>
            <li>Inheritance, Encapsulation, Polymorphism, Abstraction</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl text-red-500 font-bold mb-4">2. Basics to Data Science</h2>
          <h3 className="text-lg text-blue-500 font-semibold mb-2">2.1 Numerical computation with numpy</h3>
          <ul className="list-disc text-black  ml-8">
            <li>List revisited</li>
            <li>Need of alternative data structure</li>
            <li>Multidimensional array</li>
            <li>Numpy introduction</li>
            <li>Array operation and functions</li>
            <li>Numpy arithmetic</li>
            <li>Random module with numpy</li>
            <li>Indexing and slicing</li>
            <li>Mathematical operations</li>
            <li>Boolean and sorting</li>
            <li>Advanced array techniques</li>
            <li>Concatenation</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">2.2 Data analysis with pandas</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Introduction to pandas</li>
            <li>Series</li>
            <li>Dictionary revisited</li>
            <li>Data Frame</li>
            <li>Index and reindex</li>
            <li>Sorting and filtering</li>
            <li>GroupBy mechanisms</li>
            <li>Exploring datasets</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">2.3 Data visualization</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Matplotlib introduction</li>
            <li>Figure and subplots</li>
            <li>Line plots</li>
            <li>Bar plot</li>
            <li>Scatter plots</li>
            <li>Histogram</li>
            <li>Data visualization with pandas</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">2.4 Essential mathematics for Data Science</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Matrix Operations</li>
            <li>Random Variable and Probability Distributions</li>
            <li>Probability</li>
            <li>Properties of Probability Distributions</li>
            <li>Mean, Median, Mode</li>
            <li>Variance, Skewness, Kurtosis</li>
            <li>Multivariate Normal Distribution</li>
            <li>Co-Variance, Correlation</li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-xl text-red-500 font-bold mb-4">3. Machine Learning</h2>
          <h3 className="text-lg text-blue-500 font-semibold mb-2">3.1 Introduction to machine learning</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Introduction and application of machine learning</li>
            <li>Challenges of Machine Learning</li>
            <li>Introduction to scikit-learn library</li>
            <li>Data Preprocessing</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">3.2 Supervised Learning algorithms</h3>
          <ul className="list-disc text-black  ml-8">
            <li>Linear Regression</li>
            <li>Logistic Regression</li>
            <li>Naive Bayes</li>
            <li>Decision Trees</li>
            <li>Support Vector Machines</li>
            <li>Evaluating and improving machine learning models</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-lg text-blue-500 font-semibold mb-2">3.3 Unsupervised Learning</h3>
          <ul className="list-disc text-black  ml-8">
            <li>K-means clustering</li>
            <li>Agglomerative clustering</li>
            <li>Dbscan</li>
            <li>Principal Component Analysis</li>
            <li>Improving the efficiency of clustering algorithms</li>
          </ul>
        </div>
        </div>
      </div>
    </>
  );
};
export default DataAnalytics;
