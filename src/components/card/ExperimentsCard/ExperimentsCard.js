import { Link } from "react-router-dom";

export const ExperimentsCard = ({
  title,
  link,
  img,
  numberofExperiments,
  experimentDescription,
}) => {
  return (
    //   <div className="bg-white w-[320px] p-[10px] rounded-[10px] mx-10 my-5 flex flex-col items-center">
    //   <div className="">
    //     <h3 className="h3 p-2">{title}</h3>
    //     <p className="p py-2 px-4">{experimentDescription}</p>
    //   </div>
    //   <Link to={`/${link}`}>
    //     <div className="bg-white hover:bg-gray-100 text-green-500 font-semibold text-sm p-5 border-t border-gray-200 cursor-pointer">
    //       Code Editor
    //     </div>
    //   </Link>
    // </div>
    <div className="bg-white w-[320px] p-[10px] rounded-[10px] mx-10 my-5 flex flex-col items-center">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div className="w-72">
        <h3 className="h3 p-2">{title}</h3>
        <p className="p py-2 px-4">{experimentDescription} </p>
        <Link to={`/${link}`}>
          <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
            <h4 className="h4 text-green-500"> Go to lab</h4>
          </div>
        </Link>
      </div>
    </div>
  );
};
