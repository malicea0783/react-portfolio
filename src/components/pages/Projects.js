import React from "react";
import Atlas from "../../images/atlas.png";
import Weather from "../../images/weather.png";
import Mother from "../../images/mother.png";

function Projects() {
  let container = "projects";
  let project = "container-first";
  let image = "first-project";

  return (
    <div>
      <div className={container}>
        <div className={project}>
          <a href="https://atlas-travel.herokuapp.com/login">
            <img className={image} src={Atlas} alt={"AtlasTravel"} />
          </a>
          <div className="overlay">Atlas Travel Group</div>
        </div>

        <div className={project}>
          <a href="https://malicea0783.github.io/weather_dashboard/">
            <img className={image} src={Weather} alt={"weather dashboard"} />
          </a>
          <div className="overlay">Weather Dashboard</div>
        </div>

        <div className={project}>
          <a href="https://minionsofthemothership.github.io/random_movie_selector/">
            <img className={image} src={Mother} alt="movie quiz" />
          </a>
          <div className="overlay">Mothership Movie Matinee</div>
        </div>
      </div>

      <div className="line-break"></div>

      <div className="repo-container">
        <h2>Repositories</h2>
        <p className="repo-ul">
          <a
            className="repo-li"
            href="https://github.com/atlas-travel-group/no-turning-back"
          >
            Atlas Travel Group
          </a>
          <a
            className="repo-li"
            href="https://github.com/malicea0783/weather_dashboard"
          >
            Weather Dashboard
          </a>
          <a
            className="repo-li"
            href="https://github.com/MinionsOfTheMothership/random_movie_selector"
          >
            Mothership Movie Matinee
          </a>{" "}
          
        </p>
      </div>
    </div>
  );
}

export default Projects;
