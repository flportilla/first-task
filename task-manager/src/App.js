import Header from './Header';
import Tasks from './Tasks';
import React, { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": false
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "Feb 28th at 12:30pm",
      "reminder": false
    }
  ]);

  //Delete task
  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  //Toggle reminder
  function toggleReminder(id) {
    console.log(id);
  }

  return (
    <div className='container'>
      <Header />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
      />
    </div>
  );
}

export default App;
