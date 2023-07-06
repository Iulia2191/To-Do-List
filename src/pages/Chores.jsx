import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styles from './chores.module.css'
import family from '../family.png'

export function Chores () {
  const { id } = useParams()
  const [chore, setChore] = useState({})

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(response => response.json())
      .then(data => {
        setChore(data)
      })
  }, [id])

  return (
    <div>
      <div className={styles.border}>
        <h4 className={styles.chore}>{chore.title}</h4>
        <p className='mx-5 my-5 text-center h4'>
          {chore.completed ? (
            <span className='text-primary'>
              This chore is complete &#128077;
            </span>
          ) : (
            <span className='text-danger'>
              This chore is not complete &#128078;
            </span>
          )}
        </p>
      </div>
      <div className='text-center'>
        <img className={styles.family} src={family} alt='Family'></img>
      </div>
    </div>
  )
}
