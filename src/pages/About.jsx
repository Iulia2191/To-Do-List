import styles from './about.module.css'
import imagine from '../imagine.png'
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
          qui ratione voluptatem sequi nesciunt. <br></br>Duis autem vel eum
          iriure dolor in hendrerit in vulputate velit esse molestie consequat,
          vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan
          et iusto odio dignissim qui blandit praesent luptatum zzril delenit
          augue duis dolore te feugait nulla facilisi.
        </p>

        <img src={imagine} alt='Lady' className={styles.imagine}></img>
      </div>
    </div>
  )
}
