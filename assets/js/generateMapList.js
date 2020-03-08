var currentRegion = "All"
var currentType = "All"


function generateMapList() {
  console.log(currentRegion, currentType)
  var result = ""

  for (item in testMapList) {

    let regions = testMapList[item].region
    let types = testMapList[item].type

    if (currentRegion == 'All' || regions.includes(currentRegion) || regions.includes('World')) {

      if (currentType == 'All' || types.includes(currentType)) {
        console.log(testMapList[item].name)
        result = result + testMapList[item].name + "<br>"
      }
      
    } 
  }

  document.getElementsByClassName('replacing_div')[0].innerHTML = result
}