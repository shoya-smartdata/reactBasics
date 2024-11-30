const Task = require('../model/task')

export const  addTask = async(req, res)=>{
     
        try {
          const task = await Task.create(req.body);
          res.status(201).json(task);
        } catch (err) {
          res.status(500).json({ error: 'Failed to create task' });
        }
      
}

// get 

export const getData = async (req, res )=>{
   
        try {
          const tasks = await Task.findAll();
          res.status(200).json(tasks);
        } catch (err) {
          res.status(500).json({ error: 'Failed to fetch tasks' });
        }
      
}

// update 

export const updateTask = async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.update(req.body);
        res.status(200).json(task);
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to update task' });
    }
  }


  // update 


  export const deleteTask = async (req, res) => {
    try {
      const task = await Task.findByPk(req.params.id);
      if (task) {
        await task.destroy();
        res.status(200).json({ message: 'Task deleted' });
      } else {
        res.status(404).json({ error: 'Task not found' });
      }
    } catch (err) {
      res.status(500).json({ error: 'Failed to delete task' });
    }
  }