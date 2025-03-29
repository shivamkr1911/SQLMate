import React, { useEffect, useRef, useState } from "react"
import Split from "split-grid"

const SplitGridComponent = ({ children }) => {
  const gridRef = useRef(null)
  const [childHeights, setChildHeights] = useState([])
  useEffect(() => {
    if (!gridRef.current) return

    // Generate row gutters dynamically based on children count
    const rowGutters = []
    for (let i = 1; i < children.length; i++) {
      rowGutters.push({
        track: i * 2 - 1,
        element: gridRef.current.children[i * 2 - 1],
      })
    }
    // Initialize Split.js with the row gutters
    const splitInstance = Split({
      rowGutters,
      //   onDrag: (e) => {
      //     const heights = Array.from(gridRef.current.children)
      //       .filter((_, index) => index % 2 === 0)
      //       .map((child) => child.getBoundingClientRect().height)
      //     debugger
      //     // 🔥 Use functional update to avoid stacking heights incorrectly
      //     setChildHeights((prevHeights) => [...heights])
      //   },
    })
    return () => {
      // Cleanup Split.js instance on unmount
      splitInstance.destroy()
    }
  }, [children])

  // Creating grid rows dynamically
  const gridTemplateRows = Array(children.length * 2 - 1)
    .fill()
    .map((_, i) => (i % 2 === 0 ? "1fr" : "5px")) // Alternating between content and gutter
    .join(" ")

  return (
    <div
      ref={gridRef}
      className="grid-container"
      style={{
        display: "grid",
        gridTemplateRows,
      }}
    >
      {children.map((child, index) => (
        <React.Fragment key={index}>
          <div
            style={{
              padding: "10px",
              background: index % 2 === 0 ? "lightblue" : "lightgreen",
            }}
          >
            {React.cloneElement(child, {
              height: childHeights[index] || "auto",
            })}
          </div>
          {index < children.length - 1 && (
            <div
              className="gutter-row"
              style={{
                background: "gray",
                cursor: "ns-resize",
                height: "5px",
              }}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default SplitGridComponent
