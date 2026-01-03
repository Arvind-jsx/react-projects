const Card = (props) => {
  return (
    <div className="card">
      <div className="top">
        <img
          src={props.logo}
          alt=""
        />
        <h2>{props.name}</h2>
        <p>{props.posted} </p>
      </div>
      <div className="center">
        <h1>{props.jobRole} </h1>
        <div className="center-tags">
          <p>Mid Level</p>
          <p>{props.jobType} </p>
        </div>
      </div>
      <div className="bottam">
        <h4>{props.location} </h4>
        <button>Apply Now</button>
      </div>
    </div>
  );
};

export default Card;
