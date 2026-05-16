import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech - CSE</h4>
                <h5>JIET, Jodhpur</h5>
              </div>
              <h3>2028</h3>
            </div>
            <p>
              Current CGPA: 9.41. Pursuing undergraduate degree specializing in Data Science and Data Analytics. Active participant in coding and gaming events related to computer science. GATE Qualified (2026) Score: 343.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary & Senior Secondary</h4>
                <h5>CCA, Reengus / Saint SN Pub</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Senior Secondary Education in PCM (83.80%) at CCA, Reengus (2023). Secondary Education at Saint S N Pub Sr Sec Sch, Ajeetgarh (94%) (2021).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
