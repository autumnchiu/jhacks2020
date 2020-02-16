function listGenEds(classes) {
    var classesList = classes.split(',').map(x => x.trim());
    var results = [];

    alert(classesList)

    for (var x in classesList) {
        var temp = classesList[x].split(" ");
        alert(temp);
        if (temp.length !== 1) {
            results.push({
                name: temp.shift(),
                gen_ed: temp
            });
        }
    }
    return results;
}

function listAll(classes) {
    var classesList = classes.split(',').map(x => x.trim());
    var results = [];

    for (let x in classesList) {
        var temp = classesList[x].split(" ");
        results.push(temp[0]);
    }

    return results
}

export default { listGenEds, listAll };