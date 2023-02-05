import { Link } from "react-router-dom";

export default function DsaCard(props) {
  return (
    <div className="text-4xl text-center border bg-white rounded-xl overflow-hidden mb-4">
      <div className="">
        <h3 className="h3 p-2">{props.title}</h3>
        <p className="p py-2 px-4">{props.content}</p>
      </div>
      <Link to={`/${props.link}`}>
        <div className="bg-white hover:bg-gray-100 text-green-500 font-semibold text-sm p-5 border-t border-gray-200 cursor-pointer">
          Code Editor
        </div>
      </Link>
    </div>
  );
}
