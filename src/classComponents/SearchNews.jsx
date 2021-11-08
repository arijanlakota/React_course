import { useEffect, useState } from "react";
import { searchApi } from "../api/newApi";
import Kartica from "./Malakarica";

function SearchNews(props) {
  const [search, setSearch] = useState("");
  const [searchRes,setSearchRes] = useState([])
  const [lang,setLang] = useState("")
  function onSearchChange(e) {
    setSearch(e.target.value);
  }
  function onFinish(e) {
    if (e.key === "Enter") {
      //fetch data
      searchApi
        .get(`everything?q=${search}&language=${lang}&apiKey=bacbe26a9e9c405c979c5245b7644fb9`)
        .then((result) => {
          setSearchRes(result.data.articles);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
  function selectChange(e){
    setLang(e.target.value)
    searchApi
    .get(`everything?language=${lang}&apiKey=bacbe26a9e9c405c979c5245b7644fb9`)
    .then((result) => {
      setSearchRes(result.data.articles);
    })
    .catch((error) => {
      console.log(error);
    });
    
  }
  return (
    <div>
      <input value={search} onChange={onSearchChange} onKeyPress={onFinish} />
      <select onChange={selectChange} defaultValue={lang}>
          <option value="ar">ar</option>
          <option value="en" >en</option>
          <option value="de">de</option>
          <option value="es">es</option>
          <option value="he">he</option>
          <option value="no">no</option>
          <option value="nl">nl</option>
          <option value="pt">pt</option>
          <option value="ud">ud</option>
          
      </select>
      <div>
          {searchRes.map((article,index) => {
              return <div>
                  <Kartica author={article.author} content={article.title} keyVal={index}/>
              </div>
          })}
      </div>
    </div>
  );
}
export default SearchNews
