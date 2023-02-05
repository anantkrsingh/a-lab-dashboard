import React from "react";
import CourseCard from "../components/Cards/Course";
import csIcon from "../assets/icons/cs.png";
import bioTechIcon from "../assets/icons/biotech.png";
import chemicalIcon from "../assets/icons/chemical.png";
import civilIcon from "../assets/icons/civil.png";
import electronicsIcon from "../assets/icons/electronics.png";
import mechanicalIcon from "../assets/icons/mechanical.png";

export default function Course() {
  return (
    <>
      <h1 className="h1 text-green-500 mb-5">My Courses</h1>
      <div className="w-full mx-auto text-center mt-5">
        <div className="flex flex-wrap justify-between mx-auto">
          <CourseCard
            iconSrc={csIcon}
            heading="Computer Science & Engineering"
            subHeading="Computer science is the study of algorithmic processes, computational machines and computation itself. It spans a range of topics from theoretical studies of algorithms, computation and information to the practical issues of implementing computational systems in hardware and software."
            link="/course/cse"
          />
          <CourseCard
            iconSrc={bioTechIcon}
            heading="Biotech Engineering"
            subHeading="Biotechnology Engineering is a part of engineering that involves the technology and biological science for development in the field of medical, agriculture, security and bio-research. It applies in the field of animal husbandry, agriculture, and research and development of medicines, vaccines, fertilizers and insecticides."
            link="/"
          />
          <CourseCard
            iconSrc={civilIcon}
            heading="Civil Engineering"
            subHeading="Civil engineering, the profession of designing and executing structural works that serve the general public, such as dams, bridges, aqueducts, canals, highways, power plants, sewerage systems, and other infrastructure. Civil engineering is everything you see that’s been built around us."
            link="/"
          />
          <CourseCard
            iconSrc={mechanicalIcon}
            heading="Mechanical Engineering"
            subHeading="Mechanical engineering is an engineering branch that combines engineering physics and mathematics principles with materials science to design, analyze, manufacture, and maintain mechanical systems. It is the branch of engineering that involves the design, production, and operation of machinery."
            link="/"
          />
          <CourseCard
            iconSrc={electronicsIcon}
            heading="	Electronics & Communications"
            subHeading="Electronics and Communications Engineering (ECE) involves researching, designing, developing and testing of electronic equipment used in various systems. Electronics and Communications engineers also conceptualize and oversee the manufacturing of communications and broadcast systems."
            link="/"
          />
          <CourseCard
            iconSrc={chemicalIcon}
            heading="Chemical Engineering"
            subHeading="Chemical engineering is a certain type of engineering which deals with the study of operation and design of chemical plants as well as methods of improving production. Chemical engineers develop economical commercial processes to convert raw material into useful products."
            link="/"
          />
        </div>
      </div>
    </>
  );
}