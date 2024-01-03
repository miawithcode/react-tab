const ButtonContainer = ({jobs}) => {
  return (
    <div>
      {jobs.map((job) => {
        return <button key={job.id}>
          {job.company}
        </button>
      })}
    </div>
  )
}
export default ButtonContainer