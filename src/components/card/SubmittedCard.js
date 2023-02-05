import { Link } from "react-router-dom";

export const SubmittedCard = ({ name, img, Class, enroll, subject }) => {
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
        <img
          className="rounded-full"
          height="100px"
          width="100px"
          src={img}
          alt=""
        />
      </div>
      <div className="w-72">
        <h3 className="text-center h3 p-2">{name}</h3>
        <h4 className="text-center text-blue-800 yellow py-2 px-4">
          {subject}{" "}
        </h4>

        <h4 className="text-center p py-2 px-4">{Class} </h4>

        <h4 className="text-center p py-2 px-4">{enroll} </h4>

        <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
          <h4 className="h4 text-green-500">Submitted Files</h4>
        </div>
      </div>
    </div>
  );
};

export const ExperimentList = ({ experimentName, experimentNo }) => {
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
      <div className="w-72">
        <h3 className="text-center h3 p-2">
          Experiment Name : {experimentName}
        </h3>
        <h4 className="text-center h3  yellow py-2 px-4">
          Experiment No : {experimentNo}{" "}
        </h4>
      </div>
    </div>
  );
};
export const CodeLab = ({ question, language }) => {
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
      <div className="w-72">
        <h3 className="text-center h3 p-2">Question : {question}</h3>
        <h4 className="text-center h3  yellow py-2 px-4">
          Language : {language}{" "}
        </h4>
      </div>
    </div>
  );
};
export const MessageCard = ({ name, img, Class, enroll, question }) => {
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
        <img
          className="rounded-full"
          height="100px"
          width="100px"
          src={img}
          alt=""
        />
      </div>
      <div className="w-72">
        <h3 className="text-center h3 p-2">{name}</h3>
      

        <h4 className="text-center p py-2 px-4">{Class} </h4>

        <h4 className="text-center p py-2 px-4">{enroll} </h4>
        <h4 className="text-center text-blue-800 yellow py-2 px-4">Q:{" "}  
          { question}
        </h4>
        <div className="w-full cursor-pointer p-3 flex align-middle justify-center bg-white hover:bg-gray-100 border-t border-custom-gray">
          <h4 className="h4 text-green-500">Click here to answer</h4>
        </div>
      </div>
    </div>
  );
};