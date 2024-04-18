import ListItem from '@mui/material/ListItem';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import DeleteIcon from '@mui/icons-material/Delete';



export default function Card({ tasks, onDelete }: { tasks: string[], onDelete: (task: string) => void }) {

   return (
      <>
         {tasks.map((task: string, index: number) => (
            <ListItem key={index}
            secondaryAction={
               <IconButton edge="end" aria-label="comments" onClick={() => onDelete(task)}>
                  <DeleteIcon />
               </IconButton>
            } disablePadding>
      
               <ListItemButton role={undefined} dense>
               <ListItemIcon>
                  <input type="checkbox" name="checkItem" id="checkItem" />
               </ListItemIcon>
               <ListItemText primary={task}/>
               </ListItemButton>
            </ListItem>
         ))}
      </>
   )
}