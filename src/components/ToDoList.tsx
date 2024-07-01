import { useEffect, useState } from 'react';
import {
  StyledTDL,
  StyledTDLAddButton,
  StyledTDLContainer,
  StyledTDLErrorMsg,
  StyledTDLInput,
  StyledTDLInputContainer,
  StyledTDLInputWrapper,
  StyledTDLTitle,
  StyledTasksContainer,
} from '../styles';
import Task from './Task';

// interface TaskToEdit {
//   id: number;
//   task: string;
// }

const ToDoList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [errMsg, setErrMsg] = useState<string>('');
  const [taskToEdit, setTaskToEdit] = useState('');
  const [taskToDelete, setTaskToDelete] = useState('');
  const [isNewValue, setIsNewValue] = useState(false);
  useEffect(() => {
    editTask();
  }, [taskToEdit]);

  useEffect(() => {
    deleteTask();
  }, [taskToDelete]);

  const handleOnClick = () => {
    const taskInput = document.getElementById('taskId') as HTMLInputElement;
    let taskValue = taskInput.value;

    if (taskValue === '') {
      setErrMsg('Please enter a task');
      return;
    }
    if (tasks.includes(taskValue)) {
      setErrMsg('Task already added');
      return;
    }
    if (!isNewValue) {
      setTasks([...tasks, taskValue]);
    }
    if (isNewValue) {
      const newArr = tasks;
      const index = newArr.indexOf(taskToEdit.task);
      newArr[index] = taskValue;
      setTasks(newArr);
      setIsNewValue(false);
    }
    setErrMsg('');
    taskInput.value = '';
  };

  const editTask = () => {
    const input = document.getElementById('taskId');
    if (taskToEdit.task != null) {
      input.value = taskToEdit.task;
      setIsNewValue(true);
    }
  };

  const deleteTask = () => {
    if (taskToDelete != undefined) {
      setIsNewValue(false);
      const newArr = tasks.filter((task) => task !== taskToDelete.task);
      setTasks(newArr);
    }
  };
  return (
    <StyledTDLContainer id='todolist'>
      <StyledTDL>
        <StyledTDLTitle>To Do List</StyledTDLTitle>
        <StyledTDLInputWrapper>
          <StyledTDLInputContainer>
            <StyledTDLInput
              type='text'
              name='addItem'
              id='taskId'
              placeholder='Add task..'
            />
            <StyledTDLAddButton onClick={handleOnClick}>Add</StyledTDLAddButton>
          </StyledTDLInputContainer>
          <StyledTDLErrorMsg>{errMsg}</StyledTDLErrorMsg>
        </StyledTDLInputWrapper>
        <StyledTasksContainer>
          {tasks &&
            tasks.map((value, i) => {
              return (
                <Task
                  key={i}
                  id={i}
                  task={value}
                  setTaskToEdit={setTaskToEdit}
                  setTaskToDelete={setTaskToDelete}
                />
              );
            })}
        </StyledTasksContainer>
      </StyledTDL>
    </StyledTDLContainer>
  );
};

export default ToDoList;
