//Declare the function
function solution(S) {
    //Get the number of strings and the length of each string 
    const N = S.length; //Number of string
    const M = S[0].length; //Length of each string

    //Creare an array of Sets to track the positions of the letters encountered so far
    const letterPositions = Array.from({length: 26}, () => new Set());

    //iterate through each position in the strings
    for (let j = 0; j < M; j++) {
        //Iterate through each string in the array
        for (let i = 0; i < N; i++) {
            const letter = S[i][j];
            const index = letter.charCodeAt(0) - 'a' .charCodeAt(0);
            //check if this letter has been seen before at this position
            if (letterPositions[index].size > 0) {
                //If the letter has been seen before, iterate through the positions where it was seen
                for (const postns of letterPositions[index]){
                    //check if the current letter matches any of the previous occurences in the same string
                    if (S[postns][j] === letter) {
                        //If match is found, return the coordinates[postns, i, j] indicating the positions of the repeated
                        return [postns, i, j];
                    }
                }
                
            }
            //Add the current position (i) to the set corresponding to the letter's index in letterPositions
            letterPositions[index].add(i);
        }
        //clear the positions for the next position in the strings
        for (const set of letterPositions) {
            set.clear();
        }
    }
    //If no repeated characters are found, return an empty array
    return [];
}

//Test example
const S1 = ["bda", "sdc", "agf"];
console.log(solution(S1));