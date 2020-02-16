const https = require("https");

function parseGenEds(courseList, weirdClassThings, dumbCallBack) {
    let asyncCalls = [];
    let finalResult = [];
    for (const x in courseList) {
        var url = 'https://api.umd.io/v0/courses?course_id=' + courseList[x]
        console.log("adding async call to URL " + url)
        asyncCalls.push(asyncFunctionCall(url))
    }

    Promise.all(asyncCalls)
        .then(result => {
            console.log("hi2")
            console.log(JSON.parse(result[0])[0])
            finalResult.push(parseGenEdsHelper(JSON.parse(result[0]), weirdClassThings))
            console.log(finalResult.flat())
            dumbCallBack(finalResult.flat())
        })
        .catch(err => {
            console.log("couldn't find class")
        })


}

function asyncFunctionCall(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                console.log("hi")
                resolve(data)
            })

                .on('error', (err) => {
                    reject("could not find course")
                })
        })
    })
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
                result.push(toTake.gen_ed[x]);
            } else {
                result.push(gen_ed[y]);
            }
        }
    }

    console.log(result)
    
    if (result) {
        return result
    } else {
        return null
    }
}

export default parseGenEds;