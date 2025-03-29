import React, { useState } from "react"
import QueryEditor from "../components/codeEditor/index"
import QuerySelector from "../components/dropDown/DropDown"
import ResultsTable from "../components/table/ReactTable"
import VerticalSplitter from "./splitter/verticalSplitter/VerticalSplitter"
function Layout({ options, setOptions }) {
  const [query, setQuery] = useState("")
  const butonList = [
    {
      label: "Run Query",
      onClick: () => {
        console.log("Running query:", query)
        // Add logic to run the query and fetch results
      },
    },
    {
      label: "Save Query",
      onClick: () => {
        if (!query) {
          alert("Please enter a query before saving.")
          return
        }
        const isQueryExists = options.some((option) => option.value === query)
        if (isQueryExists) {
          alert("Query already exists.")
          return
        }
        const key = prompt("Enter a name for the query:")

        if (!key) {
          alert("Query name cannot be empty.")
          return
        }

        const newOption = {
          label: key,
          value: query,
        }
        setOptions((prev) => [...prev, newOption])
        // Add logic to save the query
        alert("Query saved successfully.")
      },
    },
  ]
  return (
    <div className="layout" id="layout">
      <div className="left">
        <QuerySelector options={options} setQuery={setQuery} />
      </div>
      <VerticalSplitter>
        <QueryEditor query={query} setQuery={setQuery} buttonList={butonList} />
        <ResultsTable />
      </VerticalSplitter>
    </div>
  )
}

export default Layout
