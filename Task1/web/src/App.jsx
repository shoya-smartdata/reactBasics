import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks, addTask, deleteTask, updateTask } from './redux/action';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'; // Filter Icon

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  // State for task input fields
  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editTaskState, setEditTaskState] = useState(null);

  // State for the search input
  const [searchQuery, setSearchQuery] = useState('');

  // Fetch tasks on initial load
  useEffect(() => {
    axios
      .get('http://localhost:5000/api/tasks')
      .then((response) => {
        dispatch(setTasks(response.data));
      })
      .catch((error) => {
        console.error('Error fetching tasks:', error);
      });
  }, [dispatch]);

  // Handle task submission
  const handleSubmit = () => {
    if (newTask.trim() && taskDescription.trim()) {
      const task = { title: newTask, description: taskDescription };
      axios
        .post('http://localhost:5000/api/tasks', task)
        .then((response) => {
          dispatch(addTask(response.data));
          setNewTask('');
          setTaskDescription('');
        })
        .catch((error) => {
          console.error('Error creating task:', error);
        });
    }
  };

  // Handle task deletion
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/tasks/${id}`)
      .then(() => {
        dispatch(deleteTask(id));
      })
      .catch((error) => {
        console.error('Error deleting task:', error);
      });
  };

  // Handle task edit
  const handleEdit = (task) => {
    setEditTaskState(task);
    setNewTask(task.title);
    setTaskDescription(task.description);
  };

  // Handle task update
  const handleUpdate = () => {
    if (newTask.trim() && taskDescription.trim() && editTaskState) {
      const updatedTask = { ...editTaskState, title: newTask, description: taskDescription };
      axios
        .put(`http://localhost:5000/api/tasks/${updatedTask.id}`, updatedTask)
        .then((response) => {
          dispatch(updateTask(response.data));
          setEditTaskState(null);
          setNewTask('');
          setTaskDescription('');
        })
        .catch((error) => {
          console.error('Error updating task:', error);
        });
    }
  };

  // Filter tasks based on the search query
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-blue-500 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">Task Manager</h1>

        {/* Search box */}
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Search tasks by title"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-600" />
        </div>

        {/* Task input fields */}
        <div className="mt-8">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Enter task title"
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
            placeholder="Enter task description"
            rows="4"
          />
          <button
            onClick={editTaskState ? handleUpdate : handleSubmit}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-200 ease-in-out"
          >
            {editTaskState ? 'Update Task' : 'Add Task'}
          </button>
        </div>

        {/* Task list */}
        <ul className="mt-8 space-y-4">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200 ease-in-out"
            >
              <div className="space-y-2">
                <p className="text-xl font-semibold text-gray-800">{task.title}</p>
                <p className="text-gray-600">{task.description}</p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={() => handleEdit(task)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition duration-200 ease-in-out"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(task.id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition duration-200 ease-in-out"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
