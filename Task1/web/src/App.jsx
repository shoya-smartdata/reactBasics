import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks, addTask, deleteTask, updateTask } from './redux/action';
import axios from 'axios';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const [newTask, setNewTask] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [editTaskState, setEditTaskState] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const handleEdit = (task) => {
    setEditTaskState(task);
    setNewTask(task.title);
    setTaskDescription(task.description);
  };

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

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-500 to-indigo-500 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-10">
        <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-8">Task Manager</h1>

        <div className="relative mb-8">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-4 focus:ring-indigo-500 shadow-md"
            placeholder="Search tasks by title"
          />
          <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-600" />
        </div>

        <div className="mb-10">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-indigo-500 shadow-md"
            placeholder="Enter task title"
          />
          <textarea
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-4 focus:ring-indigo-500 shadow-md"
            placeholder="Enter task description"
            rows="4"
          />
          <button
            onClick={editTaskState ? handleUpdate : handleSubmit}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 ease-in-out"
          >
            {editTaskState ? 'Update Task' : 'Add Task'}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filteredTasks.map((task) => (
            <div
              key={task.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{task.title}</h2>
              <p className="text-gray-600 mb-4">{task.description}</p>
              <div className="flex justify-end space-x-3">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
