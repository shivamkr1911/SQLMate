import React from "react"
import CodeMirror from "@uiw/react-codemirror"
import { sql } from "@codemirror/lang-sql"

const QueryEditor = ({ query, setQuery }) => {
  return (
    <div>
      <h3>SQL Query Editor</h3>
      <CodeMirror
        value={query}
        extensions={[sql()]}
        onChange={(value) => setQuery(value)}
        options={{
          mode: "sql",
          theme: "dracula",
          lineNumbers: true,
        }}
      />
    </div>
  )
}

export default QueryEditor
