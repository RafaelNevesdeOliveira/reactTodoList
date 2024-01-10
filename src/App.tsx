import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import { ListHeader } from "./components/List/ListHeader";
import { ListTask } from "./components/List/ListTask";
import { ChangeEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Empty } from "./components/List/Empty";

export interface ITask{
  id: string;
  text: string;
  isChecked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState('');

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask)=>{
    if(currentTask.isChecked){
      return prevValue + 1
    }

    return prevValue
  },0)

  function handleAddTask(){
    if(!inputValue){
      return
    }

    const newTask: ITask = {
      id: uuidv4(),
      text: inputValue,
      isChecked: false,
    }

    setTasks((state)=> [...state, newTask])
    setInputValue('')
  }

  function handleRemoveTask(id: string){
    const filteredTasks = tasks.filter((task) => task.id !== id)
    
    if(!confirm('Deseja mesmo apagar essa tarefa?')){
      return 
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({id, value}: {id:string, value:boolean}){
    const updatedTasks = tasks.map((task)=>{
      if(task.id === id){
        return {...task, isChecked:value}
      }
      return {...task}
    })

    setTasks(updatedTasks)
  }

  function handleSetInputValue(event: ChangeEvent<HTMLInputElement>){
    setInputValue(event.target.value)
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }


  return (
    <div>
      <Header />
      <section className={styles.wrapper}>
        <div className={styles.taskInfoText}>
          <Input 
            type="text" 
            value={inputValue}
            placeholder="Adicione uma nova tarefa"
            onChange={handleSetInputValue}
            onInvalid={handleNewCommentInvalid}
            />
          <Button onClick={handleAddTask}>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.taskList}>
          <header>
          <ListHeader 
            checkedTasksCounter={checkedTasksCounter}
            tasksCounter={tasks.length} />
          </header>
          <main>
            {tasks.length > 0 ? (
              <div>
                {tasks.map((task)=>(
                  <ListTask
                    key={task.id}
                    data={task}
                    removeTask={handleRemoveTask}
                    toggleTaskStatus={handleToggleTask}
                  />
                ))}
              </div>
            ): (
              <Empty/>
            )}
          </main>
        </div>
      </section>
    </div>
  );
}
