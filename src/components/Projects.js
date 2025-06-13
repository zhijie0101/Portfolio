import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import MYVideo from "../assets/videos/Malaysia.mp4";
import AudiVideo from "../assets/videos/Audi R8.mp4";
import PortfolioBackgroundVideo from "../assets/graphic/PortfolioBackground.mp4";
import PortfolioBackground from "../assets/graphic/PortfolioBackground.png";
import AudiR8Thumbnail from "../assets/graphic/AudiR8Thumbnail.png";
import TiktokProfilePicture from "../assets/graphic/TiktokProfilePicture.png";
import Iframe from "react-iframe";

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>
            {/* <p>Project examples here, click to view it</p> */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Video Edit</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Graphic Design</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Menu Design</Nav.Link>
                </Nav.Item> */}
              </Nav>
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <div className="video-container">
                    <Iframe
                      url="https://drive.google.com/file/d/1-ElRt-FjdxntIKqEyBVY8IvFDvafwqcW/preview"
                      width="640px"
                      height="360px"
                      className="videos"
                      display="initial"
                      position="relative"
                    />
                    {/* <video controls className="videos">
                      <source
                        src="https://drive.google.com/uc?export=download&id=1-ElRt-FjdxntIKqEyBVY8IvFDvafwqcW"
                        type="video/mp4"
                      />
                    </video> */}
                    {/* {MYVideo} */}
                    {/* <video controls className="videos">
                      <source src={AudiVideo} type="video/mp4" />
                    </video> */}
                    <Iframe
                      src="https://drive.google.com/file/d/1Qgg9GzYCG2Ypb5eZ0pX1kinhHr2Iaq3u/preview"
                      width="640px"
                      height="360px"
                      className="videos"
                      display="initial"
                      position="relative"
                    />
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="graphic-container">
                    {/* <video controls className="graphics">
                      <source src={PortfolioBackground} type="video/mp4" />
                    </video> */}
                    {/* <Iframe
                      src="https://drive.google.com/file/d/1wNiWyrVVNXFBLOvFZKCmsn9qrpK1CZng/preview"
                      className="graphics"
                      display="initial"
                      position="relative"
                    /> */}
                    <img
                      src={PortfolioBackground}
                      alt="Thumbnails"
                      className="graphics"
                    />
                    <img
                      src={AudiR8Thumbnail}
                      alt="Audi R8"
                      className="graphics"
                    />
                    <img
                      src={TiktokProfilePicture}
                      alt="Thumbnails"
                      className="graphics"
                    />
                  </div>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="third">
                  <p>changes</p>
                </Tab.Pane> */}
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
