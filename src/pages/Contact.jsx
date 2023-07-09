import { useForm } from 'react-hook-form'
import styles from './contact.module.css'

export default function Contact () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)
  console.log(errors)

  return (
    <div className='container-fluid d-flex justify-content-center'>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.title}>Contact Us</h1>
        <h5 className='text-center my-5'>
          If you have questions or you want to leave us a message, please fill
          out our form.
        </h5>
        <input
          className={styles.input}
          type='text'
          placeholder='First name'
          {...register('firstName', { required: true, maxLength: 80 })}
        />
        {errors.firstName && <span>This field is required.</span>}

        <input
          className={styles.input}
          type='text'
          placeholder='Last name'
          {...register('lastName', { required: true, maxLength: 100 })}
        />
        {errors.lastName && <span>This field is required.</span>}

        <input
          className={styles.input}
          type='text'
          placeholder='Email'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.email && <span>Please enter a valid email address.</span>}

        <textarea className={styles.input} {...register('message')} />

        <input className={styles.button} type='submit' />
      </form>
    </div>
  )
}
