const ButtonContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div>
      {jobs.map((job, index) => {
        return <button key={job.id} onClick={() => setCurrentJob(index)} className={index === currentJob ? 'active' : ''}>{job.company}</button>;
      })}
    </div>
  );
};
export default ButtonContainer