/* eslint-disable @typescript-eslint/no-unused-vars */
import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import styles from "./ListHeader.module.css";

interface ProgressBarProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function ListHeader({
  tasksCounter,
  checkedTasksCounter,
}: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 500);
    return () => clearTimeout(timer);
  }, []);

  const percentCompleted =
    tasksCounter === 0 ? 0 : (checkedTasksCounter / tasksCounter) * 100;

  const labelPercentValue = `${percentCompleted}%`

  return (
    <div className={styles.progressBar}>
      <section className={styles.progressInfo}>
        <span>Progresso</span>
        <div className={styles.progressFinishCard}>
          <span>Concluídas</span>
          <span>{labelPercentValue}</span>
        </div>
      </section>
      <Progress.Root
        className={styles.progressRoot}
        value={
          tasksCounter === 0 ? 0 : (checkedTasksCounter / tasksCounter) * 100
        }
      >
        <Progress.Indicator
          className={styles.progressIndicator}
          style={{
            transform: `translateX(-${
              100 - (checkedTasksCounter / tasksCounter) * 100
            }%)`,
          }}
        />
      </Progress.Root>
    </div>
  );
}
