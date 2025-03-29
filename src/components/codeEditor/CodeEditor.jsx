import React, { useEffect, useMemo } from "react"
import CodeMirror from "@uiw/react-codemirror"
import { sql } from "@codemirror/lang-sql"

const QueryEditor = ({ query, setQuery, height }) => {
  // Memoize CodeMirror instance to prevent unnecessary re-renders
  const codeMirrorInstance = useMemo(
    () => (
      <CodeMirror
        value={query}
        extensions={[sql()]}
        // height ={`${height}px`}
        onChange={(value) => setQuery(value)}
        options={{
          mode: "sql",
          theme: "dracula",
          lineNumbers: true,
        }}
      />
    ),
    [query, setQuery, height]
  ) // Recreate only when `query`, `setQuery`, or `height` changes

  return (
    <div>
      <h3>SQL Query Editor</h3>
      {codeMirrorInstance}
    </div>
  )
}

export default QueryEditor
