const websiteData = require("./websiteData");

module.exports = {
  getCounty: function(id, key) {
    return websiteData.counties[("" + id)[0]][key] 
  },
  getIcon : function(id, index) {
    return websiteData.counties[("" + id)[0]].icons[index]
  },
  getIconText : function(id, index) {
    return websiteData.iconText[("" + id)[2]][index]
  },
  getNavHTML : function(id) {
    let navId = ("" + id)[1]
    switch (navId) 
    {
      case '0' :
      return `<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[0]} style="width: 20px; margin-right: 10px;">
          ${websiteData.iconText[("" + id)[2]][0]}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[1]} style="width: 20px; margin-right: 10px;  margin-left: 20px">
          ${websiteData.iconText[("" + id)[2]][1]}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[2]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
          ${websiteData.iconText[("" + id)[2]][2]}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[3]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
          ${websiteData.iconText[("" + id)[2]][3]}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[4]} style="width: 20px; margin-right: 10px;  margin-left: 20px">
          ${websiteData.iconText[("" + id)[2]][4]}</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[5]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
          ${websiteData.iconText[("" + id)[2]][5]}</a>
        </li>
      </ul>
    </div>`
      break;
      case '1':
      return `<div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Menu
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[0]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[1]][0]}</a>
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[1]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[1]][1]}</a>
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[2]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[1]][2]}</a>
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[3]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[1]][3]}</a>
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[4]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[1]][4]}</a>
        <a class="dropdown-item" href="#"><img src=${websiteData.counties[("" + id)[1]].icons[5]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[1]][5]}</a>
      </div>
    </li>
      </ul>
    </div>`
    break;
    case '2' :
    return `<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[0]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[2]][0]}</a>
      </button
      </li>
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[1]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[2]][1]}</a>
        </button> 
      </li>
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[2]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[2]][2]}</a>
      </button>
      </li>
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[3]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[2]][3]}</a>
      </button>
      </li>
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[4]} style="width: 20px; margin-right: 10px;">
        ${websiteData.iconText[("" + id)[2]][4]}</a>
      </button
      </li>
      <li class="nav-item">
      <button class="btn btn-sm btn-outline-secondary"> 
        <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[5]} style="width: 20px; margin-right: 10px;"> 
        ${websiteData.iconText[("" + id)[2]][5]}</a>
      </button
      </li>
    </ul>
  </div>`
  break;
  default: return `<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[0]} style="width: 20px; margin-right: 10px;">
      ${websiteData.iconText[("" + id)[2]][0]}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[1]} style="width: 20px; margin-right: 10px;  margin-left: 20px">
      ${websiteData.iconText[("" + id)[2]][1]}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[2]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
      ${websiteData.iconText[("" + id)[2]][2]}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[3]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
      ${websiteData.iconText[("" + id)[2]][3]}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[4]} style="width: 20px; margin-right: 10px;  margin-left: 20px">
      ${websiteData.iconText[("" + id)[2]][4]}</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about"> <img src=${websiteData.counties[("" + id)[0]].icons[5]} style="width: 20px; margin-right: 10px;  margin-left: 20px"> 
      ${websiteData.iconText[("" + id)[2]][5]}</a>
    </li>
  </ul>
</div>`
  }
}
}