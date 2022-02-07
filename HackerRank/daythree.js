function vowelsAndConsonants(s) {
    for (var i = 0; i < s.length; i++) {
        if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u') {
            console.log(s[i])
        }
    }
     for (var j = 0; j < s.length; j++) {
         if (s[j] !== 'a' && s[j] !== 'e' && s[j] !== 'i' && s[j] !== 'o' && s[j] !== 'u') { console.log(s[j]) }
    }
    
}
vowelsAndConsonants('javascriptloops');