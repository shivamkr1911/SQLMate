export const readCSV = async (fileUrl) => {
  try {
    const response = await fetch(fileUrl) // Fetch the CSV file
    if (!response.ok) throw new Error("Failed to load CSV file")

    const text = await response.text() // Read file content as text
    const rows = text.trim().split("\n") // Split by new lines
    const headers = rows[0].split(",") // First row as headers

    // Convert remaining rows into JSON
    const json = rows.slice(1).map((row) => {
      const values = row.split(",")
      return headers.reduce((acc, header, index) => {
        acc[header] = values[index]
        return acc
      }, {})
    })

    return json
  } catch (error) {
    console.error("Error converting CSV to JSON:", error)
    throw error
  }
}
