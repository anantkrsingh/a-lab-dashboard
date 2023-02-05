import React, { useContext, useEffect } from 'react'
import { Calendar } from 'react-modern-calendar-datepicker';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import DataStructureCard from '../components/card/dataStructure/DataStructureCard';
import PraticeQuestions from '../components/card/dataStructure/PraticeQuestions';
import ShowExpeiment from '../components/card/experimentUpload/ShowExpeiment';
import { BottomNav } from '../components/SidebarStudent/bottomNav/BottomNav';
import Sidebar from '../components/SidebarStudent/Sidebar';
import Cse from '../components/Subjects/cse';
import { TabSection } from '../components/Tabs/TabSection';
import { ExperimentsContext } from '../context/experimentContext';
import Code from '../layout/Code';
import Course from '../layout/Course';
import DashBoard from '../layout/DashBoard';
import Experiment from '../layout/Experiment';
import SendExperiment from '../layout/SendExperiment';
import StudentMessage from '../layout/StudentMessage';
import ExperimentRoutes from '../pages';


export default function UserDash() {
  const { dropdown } = useContext(ExperimentsContext);
  const user = localStorage.getItem("userAuthenticated");

  return (
    <Routes>
      <Route exact path="/admin-dashboard" />
      <Route exact path="/submitted-experiment/submitExpriment" element={<ShowExpeiment />} />
      <Route exact path="/code" element={<DataStructureCard />} />
      <Route exact path="/code/pratice-questions" element={<PraticeQuestions />} />
      <Route exact path="/code/pratice-questions/code-editor"
        element={<Code />}
      />
      <Route path="/calendar" element={<Calendar />} />
      <Route path="/courses" element={<Course />} />
      <Route path="/course/cse" element={<Cse />} />
      <Route exact path="/experiment" element={<Experiment />} />
      <Route path="/submitions" element={<SendExperiment />} />
      <Route path="/message" element={<StudentMessage />} />
      <Route exact path={`/sem-${dropdown}/tab/:nameOfExperiment`} element={<TabSection />} />
      {ExperimentRoutes.map((page, index) => {
        return (
          <Route key={index} exact path={page.link} element={page.component} />
        );
      })}
      <Route path="/dashboard" element={<DashBoard />} />
      <Route exact path="/" element={<Navigate replace to="/dashboard" />} />
    </Routes>
  )
}
