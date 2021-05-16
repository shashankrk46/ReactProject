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

  const {title, company, duties, dates} = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>Experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {item.company}
              </button>
            );
          })}
        </div>
      </div>
      <article className="job-info">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p className="job-date">{dates}</p>
        {duties.map((duty, index) => {
          return (
            <div key={index} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>

              <p key={index}>{duty}</p>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default App;
