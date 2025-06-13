import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { BrowserRouter as Router } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import bgVideo from "../assets/img/background.mp4";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line
  const [index, setIndex] = useState(1);
  // const toRotate = ["Video Game Developer", "Video Editor", "Graphic Designer"];
  const toRotate = ["Video Edit", "Graphic Design"];
  const period = 350;

  useEffect(
    () => {
      let ticker = setInterval(() => {
        tick();
      }, delta);

      return () => {
        clearInterval(ticker);
      };
    },
    // eslint-disable-next-line
    [text]
  );

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Router>
      <section className="banner" id="home">
        {/* <video className="video-bg" autoPlay loop muted playsInline>
          <source src={bgVideo} type="video/mp4" />
        </video> */}

        {/* <video className="video-bg" autoPlay loop muted playsInline>
          <source src="/PortfolioBackground.mp4" type="video/mp4" />
        </video> */}

        <video className="video-bg" autoPlay loop muted playsInline>
          <source
            src={`${process.env.PUBLIC_URL}/PortfolioBackground.mp4`}
            type="video/mp4"
          />
        </video>

        <Container>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                {/* {`I'm A Freelance `}
                <br /> */}
                {`I have learn to do `}
                <br />
                <span className="wrap">{text}</span>
              </h1>
              <div className="bannerLinks">
                <HashLink to="#projects">
                  <br />
                  <button>
                    {/* Take a looks at projects <ArrowRightCircle size={25} />{" "} */}
                    Take a looks at my works <ArrowRightCircle size={25} />{" "}
                  </button>
                </HashLink>
                {/* <HashLink to="#connect">
                  <button>
                    Start making a project <ArrowRightCircle size={25} />{" "}
                  </button>
                </HashLink> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
