import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

const CreateTodo = () => {

  const { register, handleSubmit } = useForm()
  const history = useHistory()
  
  const onSubmit = handleSubmit(data => {
    alert(JSON.stringify(data))
    history.push('/')
  })

  return (
    <div className='container'>
      <div className='mt-3'>
        <h3>Create Todo Item</h3>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='todo'>Text:</label>
            <input className='form-control' ref={register} type='text' name='todo' id='todo' />
          </div>
          <div className="form-group">
            <button className="btn btn-primary">create todo</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateTodo
