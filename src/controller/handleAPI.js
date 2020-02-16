const https = require("https");

function parseGenEds(courseList) {
    var result = {};
    for (x in courseList) {
        url = 'https://api.umd.io/v0/courses?course_id=' + x
        https.get('https://api.umd.io/v0/courses', (res) => {
            let data = '';

            res.on('data', (chunk) => {
                data += chunk;
            })

            res.on('end', () => {
                result += data.gen_ed
            })
        })
    }
}

function parseGenEdsHelper(gen_eds) {
    
}




[
    {
        name: "blah",
        gen_ed: [
            ["DSHS", "DSHU", "DSSP"], ["SCIS"]
        ]
    }
]
