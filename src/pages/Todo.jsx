import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './todo.module.css'

export function Todo () {
  const [chores, setChores] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(data => {
        setChores(data)
      })
  }, [])

  return (
    <div className={styles.aligment}>
      <h1 className={styles.title}>To do List</h1>
      {chores.map(chore => (
        <div key={chore.id} className={styles.list}>
          <Link className={styles.link} to={`/chores/${chore.id}`}>
            {chore.title}
          </Link>
        </div>
      ))}
    </div>
  )
}
