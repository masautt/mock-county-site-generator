const websiteData = require("../static/websiteData");
const parameterData = require("../static/parameterData")

module.exports = {
  getNav: function(id) {
    let navId = ("" + id)[parameterData.NAV_LAYOUT];
    let icons = websiteData.counties[("" + id)[parameterData.ICON_CONTENT]].icons;
    let linkTexts = websiteData.iconText[("" + id)[parameterData.LINKTEXT_CONTENT]];
    let iconLinks = websiteData.iconLinks;

    function getNavItems(start, end) {
      let html = "";
      for (let i = start; i < end; i++) {
        html += `
        <li class="nav-item">
          <a class="nav-link" href="/${iconLinks[i]}">
            <img src=${icons[i]} style="width: 20px; margin-right: 10px;">
            ${linkTexts[i]}
          </a>
        </li>`;
      }
      return html;
    }
    function getDropdownItems(start, end) {
      let html = "";
      for (let i = 0; i < 6; i++) {
        html += `
        <a class="dropdown-item" href="/${iconLinks[i]}">
        <img src=${icons[i]} style="width: 20px; margin-right: 10px;">
          ${linkTexts[i]}
        </a>`;
      }
      return html;
    }
    function getButtons(start, end) {
      let html = "";
      for (let i = start; i < end; i++) {
        html += `
        <li class="nav-item">
          <button class="btn btn-sm btn-outline-secondary"> 
            <a class="nav-link" href="/${iconLinks[i]}"> 
            <img src=${icons[i]} style="width: 20px; margin-right: 10px;">
            ${linkTexts[i]}</a>
          </button>
        </li>`;
      }
      return html;
    }

    switch (navId) {
      default:
      case "0":
      //Just rendering the property search item, easiest
        return `<div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          ${getNavItems(0,1)}
          </ul>
      </div>`

        break;
      case "1":
      //Rendering a dropdown menu on the left
        return `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown dropright">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              ${getDropdownItems(0,6)}
              </div>
            </li>
          </ul>
        </div>`;
        break;
      case "2":
      //Rendering a dropdown menu on the right
        return `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown dropleft">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              ${getDropdownItems(0,6)}
              </div>
            </li>
          </ul>
        </div>`;
        break;
      case "3":
      //Rendering a dropdown menu in the center
        return `
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent" >
          <ul class="navbar-nav">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              ${getDropdownItems(0,6)}
              </div>
            </li>
          </ul>
        </div>`;
        break;
      case "4":
      //Rendering a button array on the left
        return `
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            ${getButtons(0,6)}
            </ul>
          </div>`;
          break;
      case "5":
      //Rendering a button array on the right
        return `
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
            ${getButtons(0,6)}
            </ul>
          </div>`;
          break;
      case "6":
      //Rendering a button array in the center
        return `
          <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul class="navbar-nav">
            ${getButtons(0,6)}
            </ul>
          </div>`;
          break;
      case "7":
      //Rendering a nav items on the left
        return `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
          ${getNavItems(0,6)}
          </ul>
        </div>`;
        break;
      case "8":
      //Rendering a nav items on the right
        return `
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
          ${getNavItems(0,6)}
          </ul>
        </div>`;
      case "9":
      //Rendering a nav items in the center
        return `
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
          ${getNavItems(0,6)}
          </ul>
        </div>`;
    }
  }
}