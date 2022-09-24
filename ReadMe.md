# Javascript Array Methods

- ### array.map()
    - get array of all names 
    - get array of all heights
    - get array of all objects with only name & height
    - get array of all first names
- ### array.filter()
    - get data with mass greater than 70
    - get data with height less than 100
    - get all male data
    - get all female data
- ### array.reduce()
    - get total mass of the array
    - get total number of persons by eye color
    - get total number of characters in all person names
- ### array.some()
    - is there at least one female person
    - is there at least one person with red eye color
    - is there at least one person taller than 200
    - is there at least one person with mass less than 40
    - is there at least one person with gray eye color
- ### array.every()
    - does every person have blue eyes
    - does every person weigh below 40
    - is every person shorter than 200
    - is every person male
- ### array.sort()
    - sort by mass
    - sort height by desc order
    - sort by name
    - sort by gender

```
let data = [
    {
        name: "john doe",
        height: 175,
        mass: 77,
        eye_color: "black",
        gender: "male",
        type: "human",
    },
    {
        name: "lucy henry",
        height: 95,
        mass: 60,
        eye_color: "blue",
        gender: "female",
        type: "human",
    },
    {
        name: "russel arnold",
        height: 85,
        mass: 110,
        eye_color: "black",
        gender: "male",
        type: "human",
    },
    {
        name: "morris johnson",
        height: 125,
        mass: 74,
        eye_color: "gray",
        gender: "male",
        type: "human",
    },
    {
        name: "tom latham",
        height: 115,
        mass: 54,
        eye_color: "brown",
        gender: "male",
        type: "human",
    },
];
