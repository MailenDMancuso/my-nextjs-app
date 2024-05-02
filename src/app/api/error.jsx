'use client';

const error = ({ error, reset}) => {
  return(
    <div>
      <h2>
        Error! {error}
      </h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
};

export default error;