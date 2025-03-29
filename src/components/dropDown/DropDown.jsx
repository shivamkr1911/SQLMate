import React from "react"
import Select from "react-select"

const predefinedQueries = [
  { label: "Select all users", value: "SELECT * FROM users;" },
  {
    label: "Get orders above $100",
    value: "SELECT * FROM orders WHERE amount > 100;",
  },
]

const QuerySelector = ({ setQuery }) => {
  return (
    <div>
      <h3>Select a Query</h3>
      <Select
        options={predefinedQueries}
        onChange={(selected) => setQuery(selected.value)}
      />
    </div>
  )
}

export default QuerySelector
