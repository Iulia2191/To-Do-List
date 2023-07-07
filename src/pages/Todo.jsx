import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from './todo.module.css'
import Button from 'react-bootstrap/Button'
import { PriorityContext } from '../store/Priority/context'
import { addToPriority } from '../store/Priority/actions'

export function Todo () {
  const [chores, setChores] = useState([])
  const { priorityDispatch } = useContext(PriorityContext)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setChores(data)
      })
  }, [])

  function handleAddToPriority (chore) {
    const actionResult = addToPriority(chore)
    priorityDispatch(actionResult)
  }

  return (
    <div className={styles.aligment}>
      <h1 className={styles.title}>To do List</h1>
      {chores.map(chore => (
        <div key={chore.id} className={styles.list}>
          <Link className={styles.link} to={`/chores/${chore.id}`}>
            {chore.title}
          </Link>
          <Button
            className={styles.button}
            variant='success'
            onClick={() => {
              handleAddToPriority({
                id: chore.id,
                name: chore.title
              })
            }}
          >
            Add to Priority
          </Button>
        </div>
      ))}
    </div>
  )
}
