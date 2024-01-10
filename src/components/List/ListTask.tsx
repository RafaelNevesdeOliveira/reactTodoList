import { Check, Trash } from "phosphor-react";
import styles from "./ListTask.module.css";
import { ITask } from "../../App";

interface ListTaskProps {
  data: ITask;
  removeTask: (id: string) => void;
  toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void;
}

export function ListTask({
  data,
  removeTask,
  toggleTaskStatus,
}: ListTaskProps) {
  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove(){
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
  ? styles['checkbox-checked']
  : styles['checkbox-unchecked']
  const paragraphCheckedClassname = data.isChecked
  ? styles['paragraph-checked']
  : ''


  return (
    <div className={styles.container}>
      <div>
        <label htmlFor="checkbox" onClick={handleTaskToggle}>
          <input readOnly type="checkbox" checked={data.isChecked} />
          <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
            {data.isChecked && <Check size={12} />}
          </span>

          <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
            {data.text}
          </p>
        </label>
      </div>

      <button onClick={handleRemove}>
        <Trash size={16} color="#808080" />
      </button>
    </div>
  );
}
