import { useContext } from 'react'
import { PriorityContext } from '../store/Priority/context'
import Button from 'react-bootstrap/Button'
import { removeFromPriority } from '../store/Priority/actions'
import styles from '../pages/priority.module.css'
import { Link } from 'react-router-dom'

export function Priority () {
  const { priorityState, priorityDispatch } = useContext(PriorityContext)

  function handleRemoveChore (choreId) {
    const actionResult = removeFromPriority(choreId)
    priorityDispatch(actionResult)
  }

  return (
    <div className={styles.priority}>
      {priorityState.chores.length === 0 ? (
        <p>You don't have chores in Priority.</p>
      ) : (
        <div>
          <h4>Your Chores:</h4>
          {priorityState.chores.map(chore => (
            <div key={chore.id}>
              <div className={styles.container}>
                <Link className={styles.link} to={`/chores/${chore.id}`}>
                  {chore.title}
                </Link>
                <br></br>
                <Button
                  className={styles.button}
                  variant='danger'
                  onClick={() => handleRemoveChore(chore.id)}
                >
                  Delete from Priority
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
