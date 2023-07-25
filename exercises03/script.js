(function(){
    'use strict'


    let names = ["paul", "sarah", "tom", "sam"]

    let namesSurname = ["paul white", "sarah lopez", "tom sawyer", "sam carle"]


    // convert the first letter of the name to uppercase
    function convertUppercase(array){


        let namesFirstLetterUppercase = []

        for(let i = 0; i < array.length; i++){

            console.log(array[i])

            // capitalize the first letter of each name
            namesFirstLetterUppercase.push(array[i][0].toUpperCase() + array[i].substr(1))
            

        }

        return namesFirstLetterUppercase
    }

    // convert the first letter of the name and of the surname to uppercase
    function convertUppercase2(array){

        let newNameSurname = []
        let words = []

        for(let i = 0; i < array.length; i++){

            // split the array 
            let words = array[i].split(" ");
            
            // capitalize the letters in position 0 and 1, first letter for name and surname
            let capitalizedLetter = words[0].charAt(0).toUpperCase() + words[0].substr(1) + " " +words[1].charAt(0).toUpperCase() + words[1].substr(1)

            // push the letter in the array
            newNameSurname.push(capitalizedLetter)
            
        }

        
        return newNameSurname
    }


    // transform the array of names into a string separeted by ","
    function namesToString(array){

        let namesToString = ""

        for (let i in array){

            let words = array[i].split(" ")

            // console.log(words)

            namesToString += words + ","

        }

        //remove the last "," at the end of the string
        return namesToString.slice(0, -1)

    }


    // transform the array of names into a string with <ul> and <li> elements
    function namesToHTMLList(array){

        let namesToString = ""

        for (let i in array){

            let words = array[i].split(" ")

            // console.log(words)

            namesToString += "<li>" + words + "</li>"

        }

        namesToString =  "<ul>".concat(namesToString) + "</ul>"
        return namesToString
    }
    

    function namesLastnameToHTMLList(array){


        let namesSwapped = []
        let namesLastNameToString = ""
        let capitalized = convertUppercase2(array)

        // return capitalized

        for (let i in capitalized){

            let words = capitalized[i].split(" ")

            namesSwapped.push(words[1] + ", " + words[0])

            namesLastNameToString += "<li>" + namesSwapped[i] + "</li>"

            // console.log(words[1], words[0])
        }

        // console.log(namesLastNameToString)

        namesLastNameToString = "<ul>".concat(namesLastNameToString) + "</ul>"
        return namesLastNameToString
    }

    console.log("Names in capital letter: ", convertUppercase(names))
    document.querySelector(".numberOne").innerHTML = convertUppercase(names).join(", ");


    console.log("Names and surnames in capital letters: ", convertUppercase2(namesSurname))
    document.querySelector(".numberTwo").innerHTML = convertUppercase2(namesSurname).join(", ");


    console.log("Names to string: ", namesToString(names))
    document.querySelector(".numberThree").innerHTML = namesToString(names)


    console.log("Names to HTML list: ", namesToHTMLList(names))
    document.querySelector(".numberFour").innerHTML = namesToHTMLList(names)


    console.log("Names and Lastname to HTML list: ", namesLastnameToHTMLList(namesSurname))
    document.querySelector(".numberFive").innerHTML = namesLastnameToHTMLList(namesSurname)
    

})();
