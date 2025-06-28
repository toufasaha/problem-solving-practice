//Search 'date' property in json array & inserted 'id' not initialized manually.

const jsonInput = [
    {
        data: "A",
        type: {
            color: "Red",
            size: "Small",
            date: "10/05/2025"
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
            size: "Small",
            date: "11/05/2025"
        }
    }
];


for (let i = 0; i < jsonInput.length; i++) {
    if ("date" in jsonInput[i].type) {
        jsonInput[i].id = i+1;
    }
}
console.log(jsonInput);

