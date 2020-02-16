// This is a database of the order which cs classes are taken
// 
function makeDB(){
    let map = new Map();
    let set0 = new Queue(["CMSC131","MATH140","ENGL101"]);
    let set1 = new Queue(["CMSC132","MATH141"]);
    let set2 = new Queue(["CMSC216","CMSC250","MATH240"]);
    let set3 = new Queue(["CMSC330","CMSC351"]);


    map.set(0,set0);
    map.set(1,set1);
    map.set(2,set2);
    map.set(3,set3);

    
    return map;
}