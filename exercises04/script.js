(function(){
    'use strict'


    let names = ["paul wHiTe", "sArah loPez", "tom sawYer", "saM cARle"]


    function toHTML(array){

        let newArray = convertUppercase2(names)
        let row;
        let newString = ''

        for(let element of newArray){

            let firstname = nameToData(element.split(' ')[0])
            let lastName = nameToData(element.split(' ')[1])

            row = nameToRow(firstname + lastName)
            // console.log(firstname)
            // console.log(lastName)
            newString += row
        }

        return nameToHTMLTable(newString)
            // console.log(newArray[0].split(" "))


    }


    function nameToData(name){

        return  `\t\t<td> ${name} </td>\n`

    }

    function  nameToRow(name){

        return `\t<tr>\n ${name} \n\t </tr> \n`

    }


    function nameToHTMLTable (name)
    {

        return `<table> \n ${name} </table>`

    }

    console.log(toHTML(names))
    document.querySelector(".numberOne").innerHTML = toHTML(names);

    // console.log("Names and surnames in capital letters: ", convertUppercase2(namesSurname))
    // document.querySelector(".numberTwo").innerHTML = convertUppercase2(namesSurname).join(", ");


    // console.log("Names to string: ", namesToString(names))
    // document.querySelector(".numberThree").innerHTML = namesToString(names)


    // console.log("Names to HTML list: ", namesToHTMLList(names))
    // document.querySelector(".numberFour").innerHTML = namesToHTMLList(names)


    // console.log("Names and Lastname to HTML list: ", namesLastnameToHTMLList(namesSurname))
    // document.querySelector(".numberFive").innerHTML = namesLastnameToHTMLList(namesSurname)
    

})();
