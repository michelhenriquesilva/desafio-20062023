import { CiInstagram, CiFacebook, CiTwitter } from "react-icons/ci";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__logo">
        <p>Kenai</p>
      </div>
      <div className="footer__socialMedia">
        <span>
          <CiInstagram></CiInstagram>
        </span>
        <span>
          <CiFacebook></CiFacebook>
        </span>
        <span>
          <CiTwitter></CiTwitter>
        </span>
      </div>
    </footer>
  );
}
