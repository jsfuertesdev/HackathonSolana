import "./welcomeBanner.scss";
import Link from "next/link";

function WelcomeBanner() {
  return (
    <div className="welcome-banner__container">
      <div className="banner__container">
        {/* <video class="welcome-video" loop autoplay volume="0" muted>
          <source src="/welcome-banner.mp4" type="video/mp4" />
          Your browser does not support this video
        </video> */}
        <img className="banner" src="./banner.jpg" alt="Banner" />
      </div>
      <div className="content">
        <img className="logo" src="/logo.png" alt="Logo" />
        <div className="buttons">
          <Link className="btn-container" href={`/upload-exercise`}>
            <button className="btn">I'm an ally</button>
          </Link>
          <Link className="btn-container" href={`/exercises-gallery`}>
            <button className="btn">I'm an user</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WelcomeBanner;
