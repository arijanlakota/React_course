import "../App.css";
function Table({ columns, dataSource }) {
  const dataCol = columns;
  const tableData = dataSource;
  return (
    <table className="forTable">
      <tr className="forTd">
        {dataCol.map((value) => {
          return <th key={value.key}>{value.title}</th>;
        })}
      </tr>
      {tableData.map((value, index) => {
        return <tr>
        {dataCol.map((el) => { 
          return  <td key={index}>{value[el.dataIndex]}</td>
        })}
        </tr>})}
    </table>
  );
}
export default Table;
