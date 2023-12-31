function SubmitButton() {
  return(
    <button className="bg-gray-900 text-white p-2 w-20 rounded-lg">Submit</button>
  )
}

export default function ReservationsForm() {


  return (
    <form className='flex flex-col items-center p-4 gap-4' action="">
      <label className='font-bold' htmlFor="name">Name for Reservation:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="name" name='name' required />
      <label className='font-bold' htmlFor="email">Email Address:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="email" id="email" name='email' required />
      <label className='font-bold' htmlFor="number">Phone Number:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="text" id="number" name='number' required />
      <label className='font-bold' htmlFor="size">Party Size:</label>
      <input className='border-gray-900 border-solid border-2 rounded-lg p-2' type="number" id="size" name='size' min='0' max='20' required />
      <SubmitButton/>
    </form>
  )
}