function parseTakenClasses(classes) {
    var classesList = classes.split(',').trim();
    var results = []

    for (x in classesList) {
        temp = x.split(" ") 
        if (temp.length() != 1) {
            results.push({
                name: temp.shift(),
                gen_ed: temp
            });
        }
    }
    return results;
}