import { useContext } from 'react'
import { PriorityContext } from '../store/Priority/context'
import Button from 'react-bootstrap/Button'
import { removeFromPriority } from '../store/Priority/actions'
import styles from '../pages/priority.module.css'

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
              <h3 className={styles.h4}>{chore.title}</h3>
              <Button
                variant='danger'
                onClick={() => handleRemoveChore(chore.id)}
              >
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}