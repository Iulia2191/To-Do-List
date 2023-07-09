import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import styles from './chores.module.css'
import family from '../family.png'
import Button from 'react-bootstrap/Button'
import { PriorityContext } from '../store/Priority/context'
import { addToPriority } from '../store/Priority/actions'

export function Chores () {
  const { id } = useParams()
  const [chore, setChore] = useState({})
  const { priorityDispatch } = useContext(PriorityContext)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(data => {
        setChore(data)
      })
  }, [id])

  function handleAddToPriority (chore) {
    const actionResult = addToPriority(chore)
    priorityDispatch(actionResult)
  }

  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <h4 className={styles.chore}>{chore.title}</h4>
        <p className='mx-5 my-5 text-center h4'>
          {chore.completed ? (
            <div>
              <span className='text-primary'>
                This chore is complete &#128077;
              </span>
            </div>
          ) : (
            <div>
              <span className='text-danger'>
                This chore is not complete &#128078;
              </span>
              <br></br>
              <Button
                className={styles.button}
                variant='success'
                onClick={() => {
                  handleAddToPriority({
                    id: chore.id,
                    title: chore.title
                  })
                }}
              >
                Add to Priority
              </Button>
            </div>
          )}
        </p>
      </div>
      <div className='text-center'>
        <img className={styles.family} src={family} alt='Family' />
      </div>
    </div>
  )
}
