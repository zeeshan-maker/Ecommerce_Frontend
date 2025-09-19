import "./Loader.css"

function Loader() {
  return (
    <div className="d-flex justify-content-center align-items-center loader-container">
      <div className="spinner-border spinner" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Loader
