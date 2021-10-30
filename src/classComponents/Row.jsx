function Row(props) {

    const {children, justify, border} = props

    return <div
    style={{
        display: "flex",
        width: '100%',
        justifyContent: justify ? justify : 'center',
        border: border ? '2px solid gray' : ''
    }}>
        {children}
    </div>
}

export default Row