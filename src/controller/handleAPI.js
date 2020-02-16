const https = require("https");

function parseGenEds(courseList, weirdClassThings) {
    console.log(JSON.stringify(weirdClassThings))
    let result = {};
    for (const x in courseList) {
        var url = 'https://api.umd.io/v0/courses?course_id=' + courseList[x]
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                data = JSON.parse(JSON.stringify(data))
                result += parseGenEdsHelper(data, weirdClassThings)
            })

                .on('error', (err) => {
                alert("could not find course " + courseList[x])
            })
        })
    }

    return result;
}

function parseGenEdsHelper(data, weirdClassThings) {
    var name = data.course_id;
    alert("name: " + name)
    var gen_ed = data.gen_ed;
    var toTake = weirdClassThings.find(x => x === name);
    if (!toTake) {
        return [];
    }
    alert("here")
    var result = [];

    for (var x in toTake.gen_ed) {
        var regex = new RegExp(toTake.gen_ed[x], 'g');
        for (var y in gen_ed) {
            if ((gen_ed[y].match(/FSAW|FSPW|FSOC|FSMA|FSAR|DSNL|DSNS|DSHS|DSHU|DSSP|SCIS|DVUP|DVCC/)).length() > 1 && gen_ed[y].match(regex)) {
                alert("here")
                result.push(toTake.gen_ed[x]);
            } else {
                result.push(gen_ed[y]);
            }
        }
    }
    

    return result;
}

export default parseGenEds;