const jsonInput = [
    {
        data: "A",
        type: {
            color: "Red",
            size: "Small"
        },
    },
    {
        data: "B",
        type: {
            color: "Green",
            size: "Medium"
        },
    },
    {
        data: "C",
        type: {
            color: "White",
            size: "Small"
        }
    }
];

let id =1;

for(let i =0; i<jsonInput.length; i++){
    if(jsonInput[i].type.size == 'Small'){
       jsonInput[i].id = id;
    }
    id++;
    
}
console.log(jsonInput);

