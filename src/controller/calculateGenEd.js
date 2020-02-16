function genEdNeeded(genEdTaken){
    // Taken from https://www.cs.umd.edu/~nelson/advising/docs/DegreeRequirementsGenEd.pdf
    var needed = ["FSAW", "FSPW", "FSOC", "FSMA", "FSAR", "DSNL", "DSNS", "DSNL", "DSHU", "DSHU", "DSHS", "DSHS", "DSSP", "DSSP", "SCIS", "SCIS", "DVUP", "DVUP", "DVCC"];
    var counter = 0;
    for (const y in needed){
        if (genEdTaken.includes(y)) {
            needed.splice(counter, 1);
        }
        counter++;
    }
    return needed;
}

function coreNeeded(coreTaken, upperLevel){
    var coreTaken2 = [].concat(coreTaken);
    var needed = [];
    var coreUpperLevels = ("CMSC411", "CMSC412",
    "CMSC414", "CMSC417", "CMSC420", "CMSC422", "CMSC423", 
    "CMSC424", "CMSC426", "CMSC427", "CMSC430", "CMSC433",
    "CMSC434", "CMSC435", "CMSC436", "CMSC451", "CMSC452",
    "CMSC456", "CMSC460", "CMSC466")
    var core = ["CMSC131", "CMSC132", "CMSC216", "CMSC250", 
    "CMSC330", "CMSC351"]
    var stat = "STAT4XX";
    var math = ["MATH140", "MATH141"];
    var mathHigher = ["MATHXXX", "AMSCXXX", "STATXXX"];
    var upperLevelCredits = 15;
    var upperLevelElectives = 6;
    var electives = 12;
    var statistics = true;
    var mathUpper = true;
    
    coreTaken2.forEach( function(z) {
        console.log(z)
        console.log("coursename: " +z.courseName)
        if (core.includes(z.courseName)) {
            var counterCore = 0;
            for (var a in core) {
                if (core[counterCore] === a.courseName){
                    core.splice(counterCore, 1);
                }
                counterCore++;
            }
        } else if (coreUpperLevels.includes(z.courseName)) {
            if (upperLevelCredits > 0){
                if (z.courseName == "CMSC412") {
                    upperLevelCredits -= 3;
                } else {
                    upperLevelCredits -= 3;
                }
            } else if (upperLevelCredits <= 0) {
                upperLevelElectives -= 3;
            }
        }  else if (math.includes(z.courseName)) {
            var counterMath = 0;
            for (var a in math) {
                if (math[counterMath] === a.courseName){
                    core.splice(counterMath, 1);
                }
                counterMath++;
            }
        } else if (z.courseName.charAt(0) === "S") {
            if (statistics == true) {
                if (z.courseName.charAt(1) === "T" && z.courseName.charAt(2) === "A" && z.courseName.charAt(3) === "T" && z.courseName.charAt(4) === "4") {
                    statistics = false;
                }
            } else if (statistics == false) {
                if (z.courseName.charAt(1) === "T" && z.courseName.charAt(2) === "A" && z.courseName.charAt(3) === "T") {
                    mathUpper = false;
                }
            } else if (mathUpper == false && upperLevel === "STAT") {
                if (z.courseName.charAt(1) === "T" && z.courseName.charAt(2) === "A" && z.courseName.charAt(3) === "T" && (z.courseName.charAt(4) === "4" || z.courseName.charAt(4) === "3")) {
                    electives -= 3;
                }
            }
        } else if ((z.courseName.charAt(0) === "M" && z.courseName.charAt(1) === "A" && z.courseName.charAt(2) && "T", z.courseName.charAt(3) && "H")
         || (z.courseName.charAt(0) === "A" && z.courseName.charAt(1) === "M" && z.courseName.charAt(2) === "S" && z.courseName.charAt(3) === "C")) {
             mathUpper == false;
        } else if (upperLevel === "ASTR" && z.courseName.charAt(0) === "A" && z.courseName.charAt(1) === "S" && z.courseName.charAt(2) === "T" && z.courseName.charAt(3) === "R" && (z.courseName.charAt(4) === "4" || z.charAt(4) === "3")) {
        } else if ((z.charAt(0) === "M" && z.charAt(1) === "A" && z.charAt(2) && "T", z.charAt(3) && "H")
        || (z.charAt(0) === "A" && z.charAt(1) === "M" && z.charAt(2) === "S" && z.charAt(3) === "C")) {
            mathUpper = false;
       } else if (z.charAt(0) === "A" && z.charAt(1) === "S" && z.charAt(2) === "T" && z.charAt(3) === "R" && (z.charAt(4) === "4" || z.charAt(4) === "3")) {
             electives -= 3;
        } else if (upperLevel === "LING" && z.courseName.charAt(0) === "L" && z.courseName.charAt(1) === "I" && z.courseName.charAt(2) === "N" && z.courseName.charAt(3) === "G" && (z.courseName.charAt(4) === "4" || z.courseName.charAt(4) === "3")) {
            electives -= 3;
        } else if (!(coreUpperLevels.includes(z)) && (z.courseName.charAt(0) === "C" && z.courseName.charAt(1) === "M" && z.courseName.charAt(2) && "S", z.courseName.charAt(3) === "C") && (z.courseName.charAt(4) === "4" || z.courseName.charAt(4) === "3")){
            electives -= z.credits;
        }
    })
    needed.push(core);
    needed.push(math);
    if (statistics === true){
        needed.push(stat);
    }
    if (mathUpper === true){
        needed.push({courseName: "MATHXXX"});
    }
    var checker = false;
    if (upperLevelCredits > 0) {
        upperLevelCreditsArray = Array.from(coreUpperLevels);
        while (checker === false) {
            course = upperLevelCreditsArray[Math.floor(Math.random() * upperLevelCreditsArray.length)];
            if (!(coreUpperLevels.includes(course))) {
                needed.add(course);
                upperLevelCredits -= 3;
                if (upperLevelCredits < 1){
                    checker = false;
                }
            }
        }
    }
    if (upperLevelElectives > 0) {
        if (upperLevelElectives % 3 != 0) {
            if (upperLevelElectives < 4) {
                for (upperLevelElectives; upperLevelElectives > 0; upperLevelElectives--){
                    needed.add({courseName: "CMSCXXX", credits: 1});
                }
            } else {
                for (upperLevelElectives; upperLevelElectives > 3; upperLevelElectives--){
                    needed.add({courseName: "CMSCXXX", credits: 1});
                } 
            }
        } else {
            for (upperLevelElectives; upperLevelElectives > 0; upperLevelElectives -= 3){
                needed.add({courseName: "CMSCXXX", credits: 3});    
            }
       }
    }
    if (upperLevel === ASTR){
        while(electives > 0){
            needed.add({courseName: "ASTRXXX", credits: 3});
            electives -= 3;
        }
    }
    if (upperLevel === STAT){
        while(electives > 0){
            needed.add({courseName: "STATXXX", credits: 3});
            electives -= 3;
        }
    }
    if (upperLevel === LING){
        while(electives > 0){
            needed.add({courseName: "LINGXXX", credits: 3});
            electives -= 3;
        }
    }

    return needed;
}

var me1 = new Object();
me1.courseName = "CMSC131"
me1.credits = 2;
var arr = [];
arr.push(me1.courseName);

console.log(coreNeeded(me1,"LING"))


// export { genEdNeeded, coreNeeded };