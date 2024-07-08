"use client"
import { useForm } from 'react-hook-form';

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
 const onSubmit = async(data:any) => {
  const{name, email, community} = data
  const res = await fetch("/api/form",
    {method:"POST", body:JSON.stringify({name, email, community})})
 }
  return (
    <div>
        <form onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div>
      <input {...register('firstName')} className='border border-black mt-5'/>
      </div>
      <div>
      <input {...register('lastName', { required: true })} className='border border-black mt-5' />
      {errors.lastName && <p>Last name is required.</p>}
      </div>
      <div>
      <input {...register('age', { pattern: /\d+/ })} className='border border-black mt-5'/>
      {errors.age && <p>Please enter number for age.</p>}
      </div>
      <div>
      <input type="submit" />
      </div>
    </form>
    </div>
  )
}

export default Form