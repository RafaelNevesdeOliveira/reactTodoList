import { Header } from "./components/Header";
import styles from "./App.module.css";
import { Input } from "./components/Input";
import { Button } from "./components/Button";
import { PlusCircle } from "phosphor-react";
import { ListTask } from "./components/List/ListTask";

export function App() {
  return (
    <div>
      <Header />
      <section className={styles.wrapper}>
        <div className={styles.taskInfoText}>
          <Input type="text" placeholder="Adicione uma nova tarefa" />
          <Button>
            Criar
            <PlusCircle size={16} color="#f2f2f2" weight="bold" />
          </Button>
        </div>
        <div className={styles.taskList}>
          <ListTask/>
        </div>
      </section>
    </div>
  );
}
