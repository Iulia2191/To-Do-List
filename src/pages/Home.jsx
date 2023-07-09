import { Parent } from '../components/Parent'
import styles from './home.module.css'
import imagine from '../imagine.png'
export function Home () {
  return (
    <div className={styles.background}>
      <Parent />
      <h2 className={styles.welcome}>
        Welcome to <span className={styles.logo}>ChoreMaster</span>
      </h2>
      <h4 className='text-center'>Conquer Your To-Do List</h4>
      <div className={styles.container}>
        <div>
          <p className={styles.paragraf1}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <p className={styles.paragraf1}>
            Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse
            molestie consequat, vel illum dolore eu feugiat nulla facilisis at
            vero eros et accumsan et iusto odio dignissim qui blandit praesent
            luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
          </p>
          <p className={styles.paragraf1}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
        <div>
          <img className={styles.imagine} src={imagine} />
        </div>
      </div>
    </div>
  )
}
