import React from "react";

function Experience({ experience: { year, degree, content, bullets } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0">{degree}</h4>
        <p>{content}</p>
        {bullets && (
          <ul style={{ marginBottom: 0 }}>
            {bullets.map((ele, indx) => {
              return <li key={indx + degree}>{ele}</li>;
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Experience;
