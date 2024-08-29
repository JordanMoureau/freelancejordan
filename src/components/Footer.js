import "./footer.css";
import { FaFacebookF, FaInstagram, FaBehance, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="interior">
        <h2>
          Freelance Jordan is a one-woman-run design and web developing
          operation out of Liberty Lake Washington. She tirelessly works to
          bring your projects to life. Day. Night. Weekend (sometimes).
        </h2>
        <h3>Don't underestimate her.</h3>
        <h3>She is small of stature, but fierce of heart.</h3>
        <div className="social">
          <h2>check her out on social if that's your vibe</h2>
          <div className="social-links">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF style={{ width: "30px", height: "30px" }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram style={{ width: "40px", height: "40px" }} />
            </a>
            <a
              href="https://www.behance.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaBehance style={{ width: "40px", height: "40px" }} />
            </a>
            <a
              href="https://www.github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub style={{ width: "40px", height: "40px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
