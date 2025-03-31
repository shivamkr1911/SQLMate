import CodeEditor from "./CodeEditor"
import Button from "../Buttons/Button"
export default function ({ query, setQuery, buttonList, height }) {
  return (
    <div className="code-editor-container">
      <CodeEditor query={query} setQuery={setQuery} height={height} />
      <div className="buttons">
        {buttonList.map((button, index) => (
          <Button
            key={index}
            className="button"
            onClick={button.onClick}
            disabled={button.disabled}
          >
            {button.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
