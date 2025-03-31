import React from "react"
import Select from "react-select"

const QuerySelector = ({ options, setQuery }) => {
  return (
    <div className="query-selector">
      <h3>Select a Query</h3>
      <Select
        options={options}
        placeholder="Select a query..."
        onChange={(selected) => setQuery(selected.value)}
      />
    </div>
  )
}

export default QuerySelector
