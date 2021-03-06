import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }
  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    padding: "1rem",
    borderBottom: "",
    justifyContent:"space-between",
    alignItems:"center",
  }

  const myClass = (completed)?"striked": "";
  return (
    
   <li style={styles}>
    <span className={myClass}>{descripcion}</span>
    <span className="flex">
    <MdDone size="1.5em" onClick={onClick}></MdDone>
    <MdDelete size="1.5em" onClick={onDeleteClick}></MdDelete>
    </span>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
      key={o.id}
      descripcion={o.description}
      id={o.id}
      fb_id={o.fb_id}
      completed={o.completed}
      doneHandler={doneHandler}
      deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className=/*"px-5 py-e text-white bg-transparent"*/ "TodoList">
      <ul className="px-5 py-5 mx-2 my-2  font-bold">
         {todoItems}
      </ul>
      </section>
    
  );
}

export default TodoList;
