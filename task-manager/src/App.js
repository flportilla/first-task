import Header from './Header';
import Tasks from './Tasks';
import AddTask from './AddTask';
import React, { useState, useEffect } from 'react'
import Footer from './Footer';
function App() {

  const [tasks, setTasks] = useState([]);
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromSever = await fetchTasks();
      setTasks(tasksFromSever);
    }
    getTasks();

  }, []);

  //Fetch tasks from server
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:3001/tasks');
    const data = await response.json();
    return data
  }
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:3001/tasks/${id}`);
    const data = await response.json();
    return data
  }

  //Delete task
  async function deleteTask(id) {

    await fetch(`http://localhost:3001/tasks/${id}`,
      {
        method: 'DELETE',
      })
    setTasks(tasks.filter(task => task.id !== id));
  }

  //Toggle reminder
  async function toggleReminder(id) {
    const taskToToggle = await fetchTask(id);
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const response = await fetch(`http://localhost:3001/tasks/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });

    const data = await response.json();

    setTasks(tasks.map(
      task => task.id === id ? data : task
    ));


  }

  //Add task
  async function addTask(task) {

    const response = await fetch('http://localhost:3001/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    const data = await response.json();
    setTasks([...tasks, data]);

  }

  return (
    <div className='container'>
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {
        tasks.length > 0 ?
          <Tasks
            tasks={tasks}
            onDelete={deleteTask}
            onToggle={toggleReminder}
          /> : 'No tasks'
      }
      <Footer />
    </div>

  );
}

export default App;
