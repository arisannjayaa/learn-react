import React from "react"

const Button = (props) => {
  return (
    <button type="button" className={`px-4 py-2 ${props.variant} text-slate-50 rounded-lg`}>{props.children}</button>
  );
}
export default function App() {
  return (
    <div>
      <Button variant="bg-blue-500">Login</Button>
      <Button variant="bg-red-500">Logout</Button>
    </div>
  )
}
