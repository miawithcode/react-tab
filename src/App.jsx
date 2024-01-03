import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";
import ButtonContainer from "./components/ButtonContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [currentJob, setCurrentJob] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchJobs();
  }, [])

  if (isLoading) {
    return <section>
      <h2>Loading...</h2>
    </section>
  }

  return (
    <section>
      {/* button container */}
      <ButtonContainer jobs={jobs} currentJob={currentJob} setCurrentJob={setCurrentJob} />

      {/* job info */}
      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  );
}
export default App