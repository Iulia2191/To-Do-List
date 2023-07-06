import { FirstChild } from './FirstChild'
import { SecondChild } from './SecondChild'
import { useState } from 'react'
import styles from './parent.module.css'

export function Parent () {
  const [inputText, setInputText] = useState('')
  return (
    <div>
      <div className={styles.hello}>
        <FirstChild input={inputText} />
      </div>
      <div className={styles.input}>
        <SecondChild setInputText={setInputText} />
      </div>
    </div>
  )
}
export default Parent
