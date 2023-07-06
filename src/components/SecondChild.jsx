import styles from './secondChild.module.css'

export function SecondChild (props) {
  const { setInputText } = props
  function handleInputChange (event) {
    let value = event.target.value
    setInputText(value)
  }
  return (
    <div>
      <label>
        Please insert your name here:
        <input
          className={styles.input}
          type='text'
          name='txt'
          onChange={handleInputChange}
        />
      </label>
    </div>
  )
}
