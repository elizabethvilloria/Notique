import React from "react";
import CalendarComponent from "../components/CalendarComponent";
import NotesComponent from "../components/NotesComponent";
import TaskManager from "../components/TaskManager";
import PriorityList from "../components/PriorityList";

const Dashboard = () => {
  return (
    <div>
      <h1>Notiq Dashboard</h1>
      <CalendarComponent />
      <NotesComponent />
      <TaskManager />
      <PriorityList />
    </div>
  );
};

export default Dashboard;
