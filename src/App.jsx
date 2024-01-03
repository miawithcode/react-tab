import { useEffect, useState } from "react";
import JobInfo from "./components/JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

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
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  );
}
export default App