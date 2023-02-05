import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminCalendar from '../layout/AdminCalendar'
import AdminCode from '../layout/AdminCode'
import AdminMessages from '../layout/AdminMessages'
import AdminSubmittedExperiment from '../layout/AdminSubmittedExperiment'
import DashBoardAdmin from '../layout/DashBoardAdmin'
import ReceivedCode from '../layout/ReceivedCode'
import ReceivedExperiment from '../layout/ReceivedExperiment'

export default function AdminDash() {
  return (
    <Routes>
      <Route exact path="/admin-dashboard" element={<DashBoardAdmin />} />
      <Route exact path="/admin-code" element={<AdminCode />} />
      <Route exact path="/admin-message" element={<AdminMessages />} />

      <Route exact path="/admin-Submitted-experiment" element={<AdminSubmittedExperiment />} />
      <Route path="/experiment-received/:experimentId" element={<ReceivedExperiment />} />
      <Route path="/coding-received/:codeId" element={<ReceivedCode />} />


      <Route path="/admin-calendar" element={<AdminCalendar />} />

      <Route exact path="/" element={<DashBoardAdmin />} />
    </Routes>
  )
}
