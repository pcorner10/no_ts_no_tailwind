import Link from 'next/link'
import styles from '../page.module.css'
import { formularios } from './formularios'

export default function Formularios() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Carga todos los formularios desde localStorage
    const allForms = Array.from({ length: 14 }, (_, i) => JSON.parse(localStorage.getItem('formulario' + i)));

    const response = await fetch('/api/encuesta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(allForms),
    });

    const data = await response.json();
    console.log(data);
  };

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

          // send all formularies stored on Local Storage


          
        ))}
        <form onSubmit={handleSubmit}>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </main >
  )
}
