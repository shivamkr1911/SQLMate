import React, { Suspense, useState } from "react"
// import QueryEditor from "../components/codeEditor/index"
// import QuerySelector from "../components/dropDown/DropDown"
// import ResultsTable from "../components/table/ReactTable"

const QueryEditor = React.lazy(() => import("../components/codeEditor/index"))
const QuerySelector = React.lazy(
  () => import("../components/dropDown/DropDown")
)
const ResultsTable = React.lazy(() => import("../components/table/ReactTable"))

function Layout({ options, setOptions }) {
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false) // Loading state for query execution
  const [showTable, setShowTable] = useState(false) // State to control table visibility
  const butonList = [
    {
      label: "Run Query",
      onClick: () => {
        console.log("Running query:", query)
        // Add logic to run the query and fetch results
        if (!query) {
          alert("Please enter a query before running.")
          return
        }
        setLoading(true)
        // Simulate running the query
        setTimeout(() => {
          setLoading(false)
          setShowTable(true) // Show the table after query execution
          alert("Query executed successfully.")
        }, 2000)
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
      <Suspense fallback={<div className="loader"></div>}>
        <div className="left">
          <QuerySelector options={options} setQuery={setQuery} />
        </div>
        <div className="right">
          <QueryEditor
            query={query}
            setQuery={setQuery}
            buttonList={butonList}
          />
          <ResultsTable loading={loading} showTable={showTable} />
        </div>
      </Suspense>
    </div>
  )
}

export default Layout
