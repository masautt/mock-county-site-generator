const websiteData = require("../static/websiteData");
const parameterData = require("../static/parameterData")

module.exports = {
  getSearch : function(id) {
    let searchId = ("" + id)[parameterData.SEARCH_LAYOUT];
    let iconTexts = websiteData.iconText[("" + id)[parameterData.LINKTEXT_CONTENT]];
    switch (searchId) {
      default:
      case '0' : 
        return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form-inline my-2 my-lg-0" formAction="/data" >
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}" style="width: 300px">
            <button class="btn btn-outline-success my-2 my-sm-0"  ><a href="/data">Search</a></button>
          </form>
        </div>
          `
        break;
        case '1' : 
        return `
          <div class="mx-auto" style="width: 400px;">
            <form class="form-inline my-2 my-lg-0" formAction="/data"  >
              <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}" style="width: 300px">
              <button   class="btn  btn-outline-success my-2 my-sm-0"   ><a href="/data">🔍</a></button>
            </form>
          </div>
          `
        
      case '2' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form-inline my-2 my-lg-0" formAction="/data"  >
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="margin-right: 5px"><a href="/data">Search</a></button>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 300px">
          </form>
        </div>
      `
      break;
      case '3' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form-inline my-2 my-lg-0" formAction="/data"  >
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="margin-right: 5px"   ><a href="/data">🔍</a></button>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 300px">
          </form>
        </div>
        `
      case '4' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%"><br><br>
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="width: 100%;"   ><a href="/data">Search</a></button>
          </form>
        </div>
      `
      case '5' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%"><br><br>
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="width: 100%;"  ><a href="/data">🔍</a></button>
          </form>
        </div>
      `

      case '6' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="width: 100%;"   ><a href="/data">Search</a></button><br><br>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%">
          </form>
        </div>
      `
      case '7' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
            <button   class="btn  btn-outline-success my-2 my-sm-0"  style="width: 100%;"  ><a href="/data">🔍</a></button><br><br>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%">
          </form>
        </div>
      ` 
      case '8' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
          <div class="mx-auto" style="width: 70px;">
            <button class="btn  btn-outline-success my-2 my-sm-0" ><a href="/data">Search</a></button><br><br>
          </div>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%">
          </form>
        </div>
      `
      case '9' : 
      return `
        <div class="mx-auto" style="width: 400px;">
          <form class="form my-2 my-lg-0" formAction="/data"  >
            <div class="mx-auto" style="width: 70px;">
              <button class="btn  btn-outline-success my-2 my-sm-0"    ><a href="/data">🔍</a></button><br><br>
            </div>
            <input class="form-control mr-sm-2" type="search" placeholder="${iconTexts[0]}" aria-label="${iconTexts[0]}"  style="width: 100%">
          </form>
        </div>
      ` 
    }
  }
}