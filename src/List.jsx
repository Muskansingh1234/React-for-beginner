
function List(){

const fruits = ["apple","orange","banana","pineapple"];

fruits.sort()

const listitem = fruits.map(fruit => <li>{fruit}</li>)

return (<ol>{listitem}</ol>);
  
}
export default List;