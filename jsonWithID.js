const jsonInput = [
    {
        data: "A"
    },
    {
        data: "B"
    },
    {
        data: "C"
    }
];

let id =1;

for(let i =0; i<jsonInput.length; i++){
    jsonInput[i].id = id;
    id++;
}
console.log(jsonInput);

