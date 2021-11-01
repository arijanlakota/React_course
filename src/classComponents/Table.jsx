import { useState } from "react/cjs/react.development";
import "../App.css";
function Table({ columns, dataSource }) {
  const [dataCol, setDataCol] = useState(columns);
  const [tableData, setTableData] = useState(dataSource);
  function rowDelete(id) {
    
    let [...newTable] = tableData
    newTable.splice(id,1)
    setTableData(newTable);
  }

  return (
    <table className="forTable">
      <tr className="forTd">
        {dataCol.map((value) => {
          return <th key={value.key}>{value.title}</th>;
        })}
      </tr>
      {tableData.map((value, index) => {
        return (
          <tr>
            {dataCol.map((el) => {
              return <td key={index}>{value[el.dataIndex]}</td>;
            })}
            <td>
              <button onClick={() => rowDelete(index)}>delete</button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}
export default Table;
