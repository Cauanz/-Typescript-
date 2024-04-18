// import { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Card from './Card';
import { useState } from 'react';
import './App.css'

function App() {
  
  const [tasks, setTasks] = useState<string[]>([]);
  const [value, setValue] = useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };


  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    setTasks((prevItems: string[]) => [...prevItems, value]);
    setValue('')
  };

  const handleDelete = (task: string) => {
    setTasks(tasks.filter((item => item !== task)))
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

      {/* //TODO Talvez adicionar outra lista acima de concluidos e quando marcar ela sobe para ela (apaga dessa e é adicionada na outra, caso voce não consiga elaborar a lógica) */}

        <Box className='ContainerList'>
          <Card tasks={tasks} onDelete={handleDelete} />
        </Box>
      </Container>
    </>
  )
}

export default App
