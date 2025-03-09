export default function Skills() {
  return (
    <section className="skills-container">
      <h1 className="skills-title">Keahlian Saya</h1>
      
      
      <div className="skills-list">
        <div className="skill">
          <span>Web Development</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "85%" }}>85%</div>
          </div>
        </div>

        <div className="skill">
          <span>Database Management</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "80%" }}>80%</div>
          </div>
        </div>

        <div className="skill">
          <span>UI/UX Design</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "55%" }}>75%</div>
          </div>
        </div>

        <div className="skill">
          <span>Data Analysis</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "70%" }}>70%</div>
          </div>
        </div>

        <div className="skill">
          <span>Accounting Software</span>
          <div className="progress-bar">
            <div className="progress" style={{ width: "90%" }}>90%</div>
          </div>
        </div>
      </div>
    </section>
  );
}
