import pageNotFoundSVG from "../assets/svg/page-not-found.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const NotFound = () => {
  return (
    <div>
      <LazyLoadImage
        src={pageNotFoundSVG}
        alt="pageNotFoundSVG"
      />

    </div>
  );
};

export default NotFound;
