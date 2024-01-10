import * as Progress from "@radix-ui/react-progress";
import { useEffect, useState } from "react";
import styles from "./ListHeader.module.css";

interface ProgressBarProps {
  progress: number;
}

export function ListHeader(props: ProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(progress), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.progressBar}>
      <span>Progresso</span>
      <Progress.Root className={styles.progressRoot} value={props.progress}>
        <Progress.Indicator
          className={styles.progressIndicator}
          style={{ transform: `translateX(-${100 - props.progress}%)` }}
        />
      </Progress.Root>
    </div>
  );
}
