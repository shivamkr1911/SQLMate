import React from "react"
import Select from "react-select"

const QuerySelector = ({ options, setQuery }) => {
  debugger
  return (
    <div>
      <h3>Select a Query</h3>
      <Select
        options={options}
        onChange={(selected) => setQuery(selected.value)}
      />
    </div>
  )
}

export default QuerySelector
