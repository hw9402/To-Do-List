import { useState } from "react";

function Todolist() {
    const [todolist, setTodolist] = useState(0);
    const Counter = () => {
        setTodolist(todolist+1);
        console.log(todolist);
    }
    return (
        <div>
            <h1>{todolist}</h1>
            <div onClick={() => Counter()}>눌러보셈</div>
        </div>
    );
}

export default Todolist;