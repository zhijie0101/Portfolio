import { ReactComponent as WebsiteDevIcon } from "../assets/icons/website_dev.svg";
import { ReactComponent as MobileAppIcon } from "../assets/icons/mobile_app.svg";
import { ReactComponent as MenuDesignIcon } from "../assets/icons/menu.svg";
import { ReactComponent as VideoIcon } from "../assets/icons/video.svg";

export const About = () => {
  return (
    <section className="aboutMe" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="aboutMe-bx wow zoomIn">
              {/* <h2>My services</h2> */}
              <h2>About Me</h2>
              {/* <p>Take a look at my services</p> */}
              {/* <div className="aboutMe-desc">
                <p>
                  <WebsiteDevIcon className="aboutMe-icon" />
                  Website Dev
                </p>
                <div>
                  <p>
                    Build your website, based on the preferences of design and
                    requirement.
                    <br />
                    <ul>
                      <li>UI design, Functions created</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="aboutMe-desc">
                <p>
                  A dream app created on mobile to follow up the world trend.
                  <br />
                  <ul>
                    <li>Design of app</li>
                  </ul>
                </p>
                <p>
                  <MobileAppIcon className="aboutMe-icon" />
                  Mobile App
                </p>
              </div>
              <div className="aboutMe-desc">
                <p>
                  <MenuDesignIcon className="aboutMe-icon" />
                  Menu Design
                </p>
                <div>
                  <p>
                    Ready to make a outstanding digital menu for your business?
                    Take a look here.
                    <br />
                    <ul>
                      <li>Design it based on your styles</li>
                      <li>Easy to manage and change the design</li>
                    </ul>
                  </p>
                </div>
              </div> */}
              <div className="aboutMe-desc">
                <p>
                  {/* <WebsiteDevIcon className="aboutMe-icon" /> */}
                  <VideoIcon className="aboutMe-icon" />
                  Video Editing
                </p>
                <div>
                  <p>
                    Edit your video based on your preference, with the
                    professional Davinci Resolve editing software.
                    <br />
                    <ul>
                      <li>Vlog, TikTok, Product Video etc</li>
                    </ul>
                  </p>
                </div>
              </div>
              <div className="aboutMe-desc">
                <p>
                  A combination of digital art and planning into a visualize
                  content by Canva.
                  <br />
                  <ul>
                    <li>Thumbnail, Poster etc </li>
                  </ul>
                </p>
                <p>
                  {/* <MobileAppIcon className="aboutMe-icon" /> */}
                  <WebsiteDevIcon className="aboutMe-icon" />
                  Graphic Design
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
