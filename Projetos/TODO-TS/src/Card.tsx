import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';
import './Card.css';



interface Task {
   description: string,
   concluded: boolean
}

export default function Card({ tasks, onDelete, onCompleted }: { tasks: Task[], onDelete: (task: Task) => void, onCompleted: (task: Task) => void}) {

   return (
      <>
         {tasks.map((task: Task, index: number) => (
            <ListItem key={index}
            secondaryAction={
               <IconButton edge="end" aria-label="comments" onClick={() => onDelete(task)}>
                  <DeleteIcon />
               </IconButton>
            } disablePadding>
      
               <ListItemButton role={undefined} dense>
               <ListItemIcon>
                  <input type="checkbox" name="checkItem" id="checkItem" onChange={() => onCompleted(task)} checked={task.concluded}/>
               </ListItemIcon>
               <ListItemText className='listItem' primary={task.description}/>
               </ListItemButton>
            </ListItem>
         ))}
      </>
   )
}