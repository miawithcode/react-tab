const JobInfo = ({jobs}) => {
  const {company, dates, duties, title} = jobs[0];

  return (
    <article>
      <h3>{title}</h3>
      <span>{company}</span>
      <p>{dates}</p>
    </article>
  )
}
export default JobInfo