export default function LoginForm() {
  return(
    <form action="" className="grid shadow-2xl bg-white p-12 rounded-lg">
      <label htmlFor="username">Username:</label>
      <input className="border-solid border-gray-900 border-2 p-2 rounded-sm" type="text" id="username" name="username"/>
      <label htmlFor="password">Password:</label>
      <input className="border-solid border-gray-900 border-2 p-2 rounded-sm" type="password" id="password" name="password"/>
    </form>
  )
}