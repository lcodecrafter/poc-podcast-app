import styles from "./loadingPulse.module.css";
import { loadingContext } from "../../contexts/loading-context";
import { useContext } from "react";

export default function LoadingPulse() {
  const ctx = useContext(loadingContext);

  return <>{ctx.isLoading ? <div className={styles.pulse}></div> : null}</>;
}
