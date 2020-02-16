const https = require("https");

function parseGenEds(courseList, weirdClassThings, dumbCallBack) {
    let result = {};
    for (const x in courseList) {
        var url = 'https://api.umd.io/v0/courses?course_id=' + courseList[x]
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                result += parseGenEdsHelper(JSON.parse(data), weirdClassThings)
            })

                .on('error', (err) => {
                alert("could not find course " + courseList[x])
            })
        })
    }

    dumbCallBack(result)
}

function parseGenEdsHelper(data, weirdClassThings) {
    console.log(weirdClassThings[0])
    var name = data[0].course_id;
    var gen_ed = data[0].gen_ed;
    var toTake = weirdClassThings.find(x => x.name === name);
    if (!toTake) {
        return [];
    }
    var result = [];

    for (var x in toTake.gen_ed) {
        var regex = new RegExp(toTake.gen_ed[x], 'g');
        for (var y in gen_ed) {
            console.log(gen_ed[y])
            if ((gen_ed[y].match(/(FSAW|FSPW|FSOC|FSMA|FSAR|DSNL|DSNS|DSHS|DSHU|DSSP|SCIS|DVUP|DVCC)(FSAW|FSPW|FSOC|FSMA|FSAR|DSNL|DSNS|DSHS|DSHU|DSSP|SCIS|DVUP|DVCC)/)) && gen_ed[y].match(regex)) {
                alert("here")
                result.push(toTake.gen_ed[x]);
            } else {
                result.push(gen_ed[y]);
            }
        }
    }

    console.log(result)
    

    return result;
}

export default parseGenEds;