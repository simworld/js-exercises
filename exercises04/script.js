(function(){
    'use strict'


    const names = ["paul wHiTe", "sArah loPez", "tom sawYer", "saM cARle"]
    const fruits = ["banana", "cherry", "strawberry", "orange"]



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

    function listToFileNames(fruits){

        let newFruits = []

        for(let fruit of fruits){

            newFruits.push(stringToFilename(fruit))
        }

        return newFruits

        // callback(newFruits)
    }

    function stringToFilename(string){

        return `../img/${string}.jpg`
    }

    function imageToHTML(image){

        return `<img src="${image}" alt="">`

    }

    function toHTMLImg(images){
        let newImages = listToFileNames(images)

        // console.log(x)
        let htmlImg = []
        for(let image of newImages){

            htmlImg.push(imageToHTML(image))
        }

        // console.log(htmlImg)
        return htmlImg
    }
    
    function toDisplay(content, tagName){

        let tag = document.querySelector(`${tagName}`)
        
        tag.innerHTML = content
        
        // return tag
    }

    // Exercise01
    console.log(toHTML(names))
    toDisplay(toHTML(names), '.numberOne')
    // toDisplay(toHTML(names), '.numberOne')
    // document.querySelector(".numberOne").innerHTML = toHTML(names);


    // Exercise02
    let singleImage = toHTMLImg(fruits);
    console.log(singleImage)

    toDisplay(singleImage.join(""), ".numberTwo");

})();
