import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        <a
          href="/auth/login"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            LogIn <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="/auth/register"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Register <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="/formularios"
          className={styles.card}
          //target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

      </div>
    </main>
  )
}
