function ListItem(props){
    const {icon,text} = props
    return(
        <div
        style={{
            width:"500px",
            justifyContent:"space-between",
            alignItems:"center",
            height:"60px",
            borderBottom:"2px gray solid"

        }}>
            <img src={icon} alt = "" style={{width:"40px",height:"40px"}}/>
            {text ? text : "neki tekst"}
        </div>       
    )
}
export default ListItem