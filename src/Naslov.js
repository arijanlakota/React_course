import './App.css';
function Naslov({header = "Nista niste uneli"}) {
    return(
        <div className="gornjiDiv">
        <h1>{header}</h1>
        <p className="maloP">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
    )
}
export default Naslov