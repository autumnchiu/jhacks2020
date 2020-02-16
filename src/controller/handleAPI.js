const https = require("https");

function parseGenEds(courseList, weirdClassThings) {
    let result = {};
    for (const x in courseList) {
        var url = 'https://api.umd.io/v0/courses?course_id=' + x
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                result += parseGenEdsHelper(data, weirdClassThings)
            })
        })
    }

    return result;
}

function parseGenEdsHelper(data, weirdClassThings) {
    var name = data.name;
    var gen_ed = data.gen_ed;
    var toTake = weirdClassThings.find(name);
    var regex = new RegExp(toTake.gen_ed, "g");
    var result = [];
    for (var x in gen_ed) {
        if ((x.match(/FSAW|FSPW|FSOC|FSMA|FSAR|DSNL|DSNS|DSHS|DSHU|DSSP|SCIS|DVUP|DVCC/)).length() > 1 && x.match(regex)) {
            result.push(toTake.gen_ed);
        } else {
            result.push(x)
        }
    }

    return result;
}

export default parseGenEds;