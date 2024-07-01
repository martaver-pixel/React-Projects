import {
  StyledDeleteTaskButton,
  StyledEditTaskButton,
  StyledTask,
  StyledTaskButtonContainer,
  StyledTaskContainer,
} from '../styles';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

interface TaskProps {
  task: string;
  id: number;
  setTaskToEdit: (task: { id: number; task: string }) => void;
  setTaskToDelete: (task: { task: string }) => void;
}
const Task = ({ task, id, setTaskToEdit, setTaskToDelete }: TaskProps) => {
  const handleOnClickEdit = () => {
    setTaskToEdit({ id, task });
  };
  const handleOnClickDelete = () => {
    setTaskToDelete({ task });
  };

  return (
    <StyledTaskContainer>
      <StyledTask>{task}</StyledTask>
      <StyledTaskButtonContainer>
        <StyledEditTaskButton onClick={handleOnClickEdit}>
          <EditNoteIcon />
        </StyledEditTaskButton>
        <StyledDeleteTaskButton onClick={handleOnClickDelete}>
          <DeleteIcon />
        </StyledDeleteTaskButton>
      </StyledTaskButtonContainer>
    </StyledTaskContainer>
  );
};

export default Task;
