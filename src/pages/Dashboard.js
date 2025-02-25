import React from "react";
import CalendarComponent from "../Components/CalendarComponent";
import NotesComponent from "../Components/NotesComponent";
import TaskManager from "../Components/TaskManager";
import PriorityList from "../Components/PriorityList";

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Notiq Dashboard</h1>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
        <CalendarComponent />
        <NotesComponent />
        <TaskManager />
        <PriorityList />
      </div>
    </div>
  );
};

export default Dashboard;
