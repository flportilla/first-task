function button() {

    function onClick() {
        console.log('clicked')
    }

    return (
        <button
            onClick={onClick}
            className="btn"
        >
            Add
        </button>
    )
}

export default button