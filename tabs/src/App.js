import React, {useState, useEffect} from "react";
import {FaAngleDoubleRight} from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useState(0);

  // const companyList = jobs.map(job => {
  //   return job.company;
  // });
  // console.log(companyList);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return <h1>Loading....</h1>;
  }

  const {title, id, duties, dates} = jobs[value];
  return (
    <div>
      <h1>Experience</h1>
      {jobs.map((item, index) => {
        return (
          <button key={item.id} onClick={() => setValue(index)}>
            {item.company}
          </button>
        );
      })}
      <h2>{title}</h2>
      <p>{dates}</p>
      {duties.map(duty => {
        return <p>{duty}</p>;
      })}
    </div>
  );
};

export default App;
