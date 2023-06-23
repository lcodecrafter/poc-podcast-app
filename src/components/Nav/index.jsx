import styles from "./nav.module.css";
import Link from "../UI/Link";
import LoadingPulse from "../UI/LoadingPulse";

export default function Nav() {
  return (
    <header>
      <nav className={styles.nav}>
        <h1>
          <Link to='/'>Poadcaster</Link>
        </h1>
        <LoadingPulse />
      </nav>
    </header>
  );
}
