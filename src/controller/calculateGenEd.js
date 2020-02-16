
const https = use("https");

function genEdNeeded(genEdTaken){
    // Taken from https://www.cs.umd.edu/~nelson/advising/docs/DegreeRequirementsGenEd.pdf
    var needed = ["FSAW", "FSPW", "FSOC", "FSMA", "FSAR", "DSNL", "DSNS", "DSNL", "DSHU", "DSHU", "DSHS", "DSHS", "DSSP", "DSSP", "SCIS", "SCIS", "DVUP", "DVUP", "DVCC"];
    var counter = 0;
    for (y in needed){
        if (genEdTaken.includes(y)) {
            needed.splice(counter, 1);
        }
        counter++;
    }
    return needed;
}

function CoreNeeded(coreTaken, upperLevel){
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
    var electives = 0;
    var statistics = true;
    var mathUpper = true;
    for (z in CoreTaken){
        if (core.includes(z)) {
            var counterCore = 0;
            for (a in core) {
                if (core[counterCore] === a){
                    core.splice(counterCore, 1);
                }
                counterCore++;
            }
        } else if (coreUpperLevels.includes(z)) {
            if (upperLevelCredits > 0){
                upperLevelCredits -= 3;
            } else if (upperLevelElectives > 0) {
                upperLevelElectives -= 3;
            }
        }  else if (math.includes(z)) {
            var counterMath = 0;
            for (a in math) {
                if (math[counterMath] === a){
                    core.splice(counterMath, 1);
                }
                counterMath++;
            }
        } else if (z.charAt(0) === "S") {
            if (statistics == true) {
                if (z.charAt(1) === "T" && z.charAt(2) === "A" && z.charAt(3) === "T" && z.charAt(4) === "4") {
                    statistics == false;
                }
            } else if (statistics == false) {
                if (z.charAt(1) === "T" && z.charAt(2) === "A" && z.charAt(3) === "T") {
                    mathUpper == false;
                }
            } else if (mathUpper == false) {
                if (z.charAt(1) === "T" && z.charAt(2) === "A" && z.charAt(3) === "T" && (z.charAt(4) === "4" || z.charAt(4) === "3")) {
                    electives -= 3;
                }
            }
        } else if ((z.charAt(0) === "M" && z.charAt(1) === "A" && z.charAt(2) && "T", z.charAt(3) && "H")
         || (z.charAt(0) === "A" && z.charAt(1) === "M" && z.charAt(2) === "S" && z.charAt(3) === "C")) {
             mathUpper == false;
        } else if (z.charAt(0) === "A" && z.charAt(1) === "S" && z.charAt(2) === "T" && z.charAt(3) === "R" && (z.charAt(4) === "4" || z.charAt(4) === "3")) {
             electives -= 3;
        } else if (z.charAt(0) === "L" && z.charAt(1) === "I" && z.charAt(2) === "N" && z.charAt(3) === "G" && (z.charAt(4) === "4" || z.charAt(4) === "3")) {
            electives -= 3;
        }
    }


}