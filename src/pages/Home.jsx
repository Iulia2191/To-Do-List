import { Parent } from '../components/Parent'
import styles from './home.module.css'
import imagine from '../imagine.png'
export function Home () {
  return (
    <div className={styles.background}>
      <Parent />
      <h2 className={styles.welcome}>Welcome to ChoreMaster</h2>
      <h4 className='text-center'>Conquer Your To-Do List</h4>
      <div className={styles.container}>
        <div>
          <p className={styles.paragraf}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <p className={styles.paragraf}>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
          <p className={styles.paragraf}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
        </div>
        <div>
          <img className={styles.imagine} src={imagine} />
        </div>
      </div>
    </div>
  )
}
