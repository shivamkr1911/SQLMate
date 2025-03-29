import React, { useState } from "react"
import QueryEditor from "./components/codeEditor/CodeEditor"
import QuerySelector from "./components/dropDown/DropDown"
import ResultsTable from "./components/table/ReactTable"

function App() {
  const [query, setQuery] = useState("")

  return (
    <div>
      <h1>SQL Query Runner</h1>
      <QuerySelector setQuery={setQuery} />
      <QueryEditor query={query} setQuery={setQuery} />
      <button style={{ margin: "10px", padding: "5px" }}>Run Query</button>
      <ResultsTable />
    </div>
  )
}

export default App
