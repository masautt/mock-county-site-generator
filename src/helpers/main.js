const websiteData = require("../static/websiteData");
const parameterData =require("../static/parameterData");
const navHelper = require("./navHelper");
const dataHelper = require("./dataHelper")
const searchHelper = require("./searchHelper");

module.exports = {
  getCounty: function(id, key) {
    return websiteData.counties[("" + id)[parameterData.COUNTY_CONTENT]][key];
  },
  getIcon: function(id, index) {
    return websiteData.counties[("" + id)[parameterData.ICON_CONTENT]].icons[index];
  },
  getLinkText: function(id, index) {
    return websiteData.iconText[("" + id)[parameterData.LINKTEXT_CONTENT]][index];
  },
  
  getNavHTML: navHelper.getNav,
  getDataHTML: dataHelper.getData,
  getSearchHTML : searchHelper.getSearch,
}
