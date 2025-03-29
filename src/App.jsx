import Layout from "./containers/layout"
import "./App.css"
import { useState } from "react"

const predefinedQueriesDropDownOptions = [
  { label: "Select all users", value: "SELECT * FROM users;" },
  {
    label: "Get orders above $100",
    value: "SELECT * FROM orders WHERE amount > 100;",
  },
]
export default function App() {
  const [queriesDropDownOptions, setQueriesDropDownOptions] = useState(
    predefinedQueriesDropDownOptions
  )
  return (
    <div className="App" id="app">
      <h1>SQL Query Runner</h1>
      <Layout />
    </div>
  )
}
