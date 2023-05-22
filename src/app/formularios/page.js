import Link from 'next/link'
import styles from '../page.module.css'
import { formularios } from './formularios'

export default function Formularios() {
  return (
    <main className={styles.main}>
      <h1>Formularios</h1>
      <div className={styles.grid}>

        {formularios.map((formulario) => (
          <Link
            key={formulario.path}
            href={formulario.path}
            className={styles.card}

            rel="noopener noreferrer"
          >
            <h2>
              {formulario.title} <span>-&gt;</span>
            </h2>
            <p>
              {formulario.description}
            </p>
          </Link>

        ))}

      </div>
    </main >
  )
}
