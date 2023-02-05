
import { Link } from "react-router-dom";

export default function CourseCard(props) {
  return (
    <div className="text-center rounded-xl w-[30%] mb-12 pt-5 overflow-hidden bg-white border border-gray-200">
    <div className="w-[100px] mx-auto">
      <img src={`${props.iconSrc}`} alt="course" />
    </div>
    <div className="p-5">
      <h1
        className={`text-base tracking-tight font-semibold text-custom-text-blue mb-3 truncate	`}>
        {props.heading}
      </h1>
      <p className={`text-sm text-gray-700`}>{props.subHeading}</p>
    </div>
    <Link to={`${props.link}`}>
      <div className="bg-white hover:bg-gray-100 text-green-500 font-semibold text-sm p-5 border-t border-gray-200 cursor-pointer">
        EXPLORE MORE
      </div>
    </Link>
  </div>
  );
}
