function List(props){
    const {children,justify} = props
    return (
        <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            height:"600px",
            width:"500px",
            justifyContent: justify ? justify : "start",
            border: "2px gray solid",

        }}>
            {children}
        </div>
    )
}
export default List