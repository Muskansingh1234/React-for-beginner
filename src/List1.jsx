
function List(){

const fruits = [{id:1,name: "apple",calories:95},
                {id:2,name: "orange",calories:45},
                {id:3,name: "coconut",calories:450},
                {id:4,name: "pineapple",calories:45}
];

// it sort alphabet in ascending and descending order.
//fruits.sort((a,b) => a.name.localeCompare(b.name));
//fruits.sort((a,b) => b.name.localeCompare(a.name));
//fruits.sort((a,b) => a.calories-b.calories);//Numeric order
fruits.sort((a,b) => b.calories-a.calories); // Reverse Numeric order




const listitem = fruits.map(fruits =><li key={fruits.id}>
                                      {fruits.name}:&nbsp;
                                      <b>{fruits.calories}</b>
</li>);

return (<ol>{listitem}</ol>)





}

export default List;
