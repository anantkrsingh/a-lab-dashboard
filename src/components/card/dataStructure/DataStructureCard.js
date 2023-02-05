import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="text-center rounded-xl w-[30%] mt-[20px]  overflow-hidden bg-white border border-gray-200">
      <div className="w-[100px] mx-auto">
        <img src={`${props.iconSrc}`} alt="course" />
      </div>
      <div className="p-5">
        <h1
          className='text-base tracking-tight font-semibold text-custom-text-blue mb-3 truncate'	>
          {props.heading}
        </h1>
        <p className={`text-sm text-gray-700`}>{props.subHeading}</p>
      </div>
      <Link to={`/${props.link}`}>
        <div className="bg-white hover:bg-gray-100 text-green-500 font-semibold text-sm p-5 border-t border-gray-200 cursor-pointer">
         SOLVE QUESTIONS
        </div>
      </Link>
    </div>
  );
}

export default function DataStructureCard() {
  return (
    <div className="w-full  text-center ">
      <div className="flex flex-wrap justify-between">
        <Card
          iconSrc={'https://res.cloudinary.com/a-lab/image/upload/v1629640213/computerScienceEngineering/dbms_mi1fdn.png'}
          heading="Data Science And Algorithm"
          subHeading="Pratice and sharp your DSA concepts here"
          link="code/pratice-questions"
        />
       
      </div>
    </div>
  );
}
