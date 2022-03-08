import Task from './Task';
const Tasks = ({ tasks, onDelete, onToggel }) => {
  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onDelete={onDelete} onToggel={onToggel} />
      ))}
    </>
  );
};

export default Tasks;
