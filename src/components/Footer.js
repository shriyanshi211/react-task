
import "./Footer2.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="left">
        <li className="LiveChat">
          <i class="fa-regular fa-message"> Live Chat </i>
        </li>
        <li className="SupportEmail">
          <i class="fa-regular fa-envelope"> Support Email</i>
        </li>
        <li className="HelpCenter">
          <i class="fa-regular fa-book"> Help Center </i>
        </li>
        <li className="VideoCall">
          <i class="fa-regular fa-calendar"> Video Call</i>
        </li>
      </div>
      <div className="center">
        <li>Pages</li>
        <li>Home</li>
        <li>Pricing</li>
        <li>Blogs</li>
        <li>About us</li>
      </div>
      <div className="right">
        <li>Products</li>
        <li>Form approval</li>
        <li>Signature</li>
        <li>Sheetgod</li>
        <li>Google Form</li>
      </div>
    </div>
  );
};
export default Footer;
