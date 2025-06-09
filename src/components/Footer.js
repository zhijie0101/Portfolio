import { Container } from "react-bootstrap";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import { ReactComponent as WhatsaapIcon } from "../assets/icons/whatsapp.svg";
import { ReactComponent as InstagramIcon } from "../assets/icons/instagram.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="social-icon">
          <a
            onClick={() =>
              alert(
                "Facebook page isn't ready yet, please use Whatsapp for now, apologies for your inconvenience."
              )
            }
            className="social-link"
          >
            {/* href="https://www.facebook.com/zhi.jie.90"> */}
            <FacebookIcon className="social-icon" />
          </a>
          <a
            href="https://wa.me/60167109816?text=Hello, I'm interested in your services and want to know more about them."
            target="_blank"
            className="social-link"
          >
            <WhatsaapIcon className="social-icon" />
          </a>
          <a
            onClick={() =>
              alert(
                "Instagram page isn't ready yet, please use Whatsapp for now, apologies for your inconvenience."
              )
            }
            className="social-link"
          >
            <InstagramIcon className="social-icon" />
          </a>
        </div>
        <p>Copyright 2025. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};
