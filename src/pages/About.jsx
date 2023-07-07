import styles from './about.module.css'
import lady from '../lady.png'
export function About () {
  return (
    <div>
      <h1 className={styles.title}>About</h1>
      <div className={styles.container}>
        <p className={styles.paragraf}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </p>

        <img src={lady} alt='Lady' className={styles.imagine}></img>
      </div>
    </div>
  )
}
