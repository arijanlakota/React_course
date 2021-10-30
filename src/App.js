import { useContext } from "react";
import "./App.css";
import { AppContext } from "./classComponents/Context";
import Table  from "./classComponents/Table";
const forTable = [
  {title:"Dessert (100g serving)",
  key:1,
  dataIndex:"dessert"
},
{title:"Calories",
  key:2,
  dataIndex:"calories"
},
{title:"Fat(g)",
  key:3,
  dataIndex:"fat"
},
{title:"Carbs (g)",
  key:4,
  dataIndex:"carbs"
},
{title:"Protein (g)",
  key:5,
  dataIndex:"protein"
}
]
const dorCol=[{
  dessert:"Frozen youghurt",
  calories:159,
  fat:6,
  carbs:24,
  protein:4
},
{
  dessert:"Frozen youghurt",
  calories:159,
  fat:6,
  carbs:24,
  protein:4
},
{
  dessert:"Frozen youghurt",
  calories:159,
  fat:6,
  carbs:24,
  protein:4
},
{
  dessert:"Frozen youghurt",
  calories:159,
  fat:6,
  carbs:24,
  protein:4
},
{
  dessert:"Frozen youghurt",
  calories:159,
  fat:6,
  carbs:24,
  protein:4
}
]

function App() {
  return (
    <Table columns={forTable} dataSource={dorCol}></Table>
  )
      
}

export default App;