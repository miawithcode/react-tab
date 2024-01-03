import Duties from "./Duties";

const JobInfo = ({jobs, currentJob}) => {
  const {company, dates, duties, title} = jobs[currentJob];

  return (
    <article>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
      <Duties duties={duties} />
    </article>
  );
}
export default JobInfo