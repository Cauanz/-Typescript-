// import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from './Card';
import { useState } from 'react';
import './App.css'

interface Task {
  description: string,
  concluded: boolean
}


function App() {
  
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState('');
  const [dones, setDone] = useState<Task[]>([]);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const task: Task = {
      description: value,
      concluded: false
    }

    setTasks((prevTasks) => [...prevTasks, task]);
    setValue('')
  };

  const handleDelete = (task: Task) => {
    if(tasks.includes(task)){
      setTasks(tasks.filter(item => item !== task))
    } else {
      setDone(dones.filter(item => item != task));
    }
  }
  
  const handleCompleted = (task: Task) => {

    if(task.concluded){
      setDone(dones.filter((item) => item !== task))
      setTasks((prevTasks) => [...prevTasks, task]);
      task.concluded = false;
    } else {
      setTasks(tasks.filter((item) => item !== task))
      setDone((prevDones) => [...prevDones, task]);
      task.concluded = true;
    }
  }


  return (
    <>
      <h1>TODO LIST TS</h1>
      <Container fixed className='container' sx={{ display: 'flex', flexDirection: 'column'}}>
        
        <Box className='box'>
          <form className='form'>
            <TextField id="outlined-basic" label="Tarefa" value={value} variant="outlined" onChange={handleChange} />
            <Button variant="contained" onClick={handleAdd}>Adicionar</Button>
          </form>
        </Box>

      <Box className='ContainerListDone'>
          <h2>Tarefas concluidas</h2>
          <Card tasks={dones} onDelete={handleDelete} onCompleted={handleCompleted} />
        </Box>

        <Box className='ContainerList'>
          <h2>Tarefas</h2>
          <Card tasks={tasks} onDelete={handleDelete} onCompleted={handleCompleted} />
        </Box>
      </Container>
    </>
  )
}

export default App
