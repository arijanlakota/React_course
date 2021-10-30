function Col(props){
    const {children ,border ,justify} = props
    return(
        <div
        style={{
            height:"100%",
            display:"flex",
            alignItems:"center",
            justifyContent:justify ? justify : "center",
            flexDirection:"column",
            border: border ? "2ps solid gray" : ""
        }} 
        >
            {children}
        </div>
    )

}
export default Col