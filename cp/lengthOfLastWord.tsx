// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

function lengthOfLastWord(s: string): number {
    let len=0;

    for(let characters of s.trim()){
            characters === ' ' ? len = 0 : len++
        }

    return len;
    
};