function button({ onClick, text, color }) {

    return (
        <button
            className="btn"
            onClick={onClick}
            style={{ backgroundColor: `${color}` }}
        >
            {text}
        </button>
    )
}

export default button