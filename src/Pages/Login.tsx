function Login() {
  return (
    <div className="p-10 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form className="space-y-4">
        <input className="w-full p-2 border rounded" type="email" placeholder="Email" />
        <input className="w-full p-2 border rounded" type="password" placeholder="Password" />
        <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Log In</button>
      </form>
    </div>
  );
}

export default Login