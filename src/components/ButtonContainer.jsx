const ButtonContainer = ({ jobs, currentJob, setCurrentJob }) => {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return <button key={job.id} onClick={() => setCurrentJob(index)} className={index === currentJob ? 'job-btn active' : 'job-btn'}>{job.company}</button>;
      })}
    </div>
  );
};
export default ButtonContainer