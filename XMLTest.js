let xmlStr = '<prod><name>drill</name><prx>99</prx><qty>5</qty></prod>,<prod><name>hammer</name><prx>10</prx><qty>50</qty></prod>,<prod><name>screwdriver</name><prx>5</prx><qty>51</qty></prod>,<prod><name>table saw</name><prx>1099.99</prx><qty>5</qty></prod>,<prod><name>saw</name><prx>9</prx><qty>10</qty></prod>';

let catalogArray = stringToArray(xmlStr);
let tagArray = ['name', 'prx', 'qty'];

console.log (catalogArray);



// Строка в массив
function stringToArray(catalogStr){
    return catalogStr.split(',');
}

// Парсинг
function parseXmlToDOM(xmlStr){
    let parser = new DOMParser(); // создаём объект парсера xml
    return parser.parseFromString(xmlStr, "text/xml"); //возвращаем объект
}

// Получение параметра по тегу
function getByTag(parseXmlStr, tagName){
    return parseXmlStr.getElementsByTagName(tagName)[0].childNodes[0].nodeValue
}

// Поиск в масиве по имени
function findByTagName (catalogArray, article) {
    let findStr = "";
    for (let i = 0; i < catalogArray.length(); i++){
        findStr = catalogArray[i];
        let parseFindStr = parseXmlToDOM(findStr);
        if (article === getByTag(parseFindStr, 'name')){
            return catalogArray[i];
        }
    }
}

// Вывод всех параметров объекта в консоль
function writeResultToConsole (parseXml, tags){
    let 
    for (let i = 0; i < tags.length(); i++){
        console.log(parseXml.getElementsByTagName(tags[i])[0].childNodes[0].nodeValue);
    }
}
