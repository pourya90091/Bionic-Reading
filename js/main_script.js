function boldFirstLetters() {
    let text = textInput.value

    const symbols = " . , - \\ / & \n @ % # * $ \" ' ~ ! ? ( ) [ ] { } < > : + _ = ’ "

    const re = /(\w+) *| *\. *| *\, *| *\- *| *\\ *| *\/ *| *\& *| *\n *| *\@ *| *\% *| *\# *| *\* *| *\$ *| *\" *| *\' *| *\~ *| *\! *| *\? *| *\( *| *\) *| *\[ *| *\] *| *\{ *| *\} *| *\< *| *\> *| *\: *| *\+ *| *\_ *| *\= *| *\’ */g
    const hits = [];
    // Iterate hits
    let match = null;
    do {
        match = re.exec(text);
        if(match) {
            hits.push(match[0]);
        }
    } while (match);

    var para = document.querySelector('.text');
    for (let i = 0; i < hits.length; i++) {
        if (symbols.includes(hits[i])) {
            if (hits[i] === "\n") {
                para.innerHTML += "<br>"
            }
            para.innerHTML += hits[i]
            continue;
        }   

        let whiteSpaces = hits[i].split(" ").length - 1
        let maxIndex =  Math.floor(hits[i].length / 2)

        if (hits[i].length - whiteSpaces % 2 == 1)
            maxIndex++
        if (hits[i].length - whiteSpaces == 3)
            maxIndex--
        if (hits[i].length - whiteSpaces == 1)
            maxIndex++

        let boldSection = ""
        let normalSection = ""
        for (let j = 0; j < hits[i].length; j++) {
            if (hits[i][j] === " ")
                maxIndex++
            if (j < maxIndex)
                boldSection += hits[i][j]
            else
                normalSection += hits[i][j]
        }

        para.innerHTML += `<b>${boldSection}</b>${normalSection}`
    }
}
function saveText() {
    let textLabel = document.querySelector(".text");

    textLabel.innerText = ""

    boldFirstLetters()
}

const textInput = document.querySelector("[name=text-input]");
textInput.focus();

if (textInput) {
    textInput.addEventListener("keydown", function (key_data) {        
        if (key_data.key === "Enter") {
            saveText()
        }
    });
}
