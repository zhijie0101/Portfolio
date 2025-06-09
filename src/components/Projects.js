import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import MYVideo from "../assets/videos/Malaysia.mp4";
import AudiVideo from "../assets/videos/Audi R8.mp4";
import PortfolioBackground from "../assets/graphic/PortfolioBackground.mp4";
import AudiR8Thumbnail from "../assets/graphic/AudiR8Thumbnail.png";
import TiktokProfilePicture from "../assets/graphic/TiktokProfilePicture.png";

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
                    <video controls className="videos">
                      <source src={MYVideo} type="video/mp4" />
                    </video>
                    <video controls className="videos">
                      <source src={AudiVideo} type="video/mp4" />
                    </video>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="graphic-container">
                    <video controls className="graphics">
                      <source src={PortfolioBackground} type="video/mp4" />
                    </video>
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
