import React, { useEffect, useState } from "react"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-alpine.css"
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community"
import { CSV_FILE_PATH } from "../../config/config"
import { readCSV } from "../../utils/csvReader"
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule])
const getColumnDefs = (csvData) => {
  const columns = Object.keys(csvData[0]).map((key) => ({
    headerName: key,
    field: key,
    flex: 1,
    sortable: true,
    filter: true,
  }))
  return columns
}
const ResultsTable = ({ loading, showTable }) => {
  const [columnDefs, setColumnDefs] = useState(getColumnDefs([{}]))
  const [rowData, setRowData] = useState([])
  // console.log("data", csvData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await readCSV(CSV_FILE_PATH)
        setRowData(data)
        setColumnDefs(getColumnDefs(data)) // Set column definitions based on fetched data
      } catch (error) {
        console.error("Error fetching CSV data:", error)
      }
    }
    fetchData()
  }, [])
  return (
    <div className="result-table">
      {!loading && !showTable && (
        <div className="primary-text">
          Enter the Query Above to see the results.!!!
        </div>
      )}
      {loading && <div className="loader"></div>}
      {!loading && showTable && (
        <div className="ag-theme-alpine" style={{ height: 300, width: "100%" }}>
          <h3>Query Results</h3>
          <AgGridReact
            rowData={rowData}
            rowHeight={40}
            columnDefs={columnDefs}
            defaultColDef={{
              resizable: true,
              sortable: true,
              cellStyle: { padding: "10px 20px" }, // Padding inside cells
            }}
            pagination={true} // ✅ Enable pagination
            paginationPageSize={10} // ✅ Number of rows per page
            paginationPageSizeSelector={[10, 20, 50]} // ✅ Page size options
          />
        </div>
      )}
    </div>
  )
}

export default ResultsTable
