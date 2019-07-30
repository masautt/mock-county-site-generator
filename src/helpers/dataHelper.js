const websiteData = require("../static/websiteData");
const parameterData = require("../static/parameterData")

module.exports = {
  getData : function(id) {
    let dataId = ("" + id)[parameterData.DATA_LAYOUT];
    let countyInfo = websiteData.counties[("" + id)[parameterData.COUNTY_CONTENT]];
    switch (dataId) {
      default: 
      case '0' : 
        return `
        <div style="width: 20%; margin: auto;">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ownerName</th>
              <td>${countyInfo.ownerName}</td>
            </tr>
            <tr>
              <th scope="row">siteAddress</th>
              <td>${countyInfo.siteAddress}</td>
            </tr>
            <tr>
              <th scope="row">mailAddress</th>
              <td>${countyInfo.mailAddress}</td>
            </tr>
            <tr>
              <th scope="row">useDesc</th>
              <td>${countyInfo.useDesc}</td>
            </tr>
            <tr>
              <th scope="row">neighborhood</th>
              <td>${countyInfo.neighborhood}</td>
            </tr>
            <tr>
              <th scope="row">taxDistrict</th>
              <td>${countyInfo.taxDistrict}</td>
            </tr>
            <tr>
              <th scope="row">totalLandArea</th>
              <td>${countyInfo.totalLandArea}</td>
            </tr>
            <tr>
              <th scope="row">description</th>
              <td>${countyInfo.description}</td>
            </tr>
            <tr>
              <th scope="row">mkLandValue</th>
              <td>${countyInfo.mkLandValue}</td>
            </tr>
            <tr>
              <th scope="row">agLandValue</th>
              <td>${countyInfo.agLandValue}</td>
            </tr>
            <tr>
              <th scope="row">buildingValue</th>
              <td>${countyInfo.buildingValue}</td>
            </tr>
            <tr>
              <th scope="row">XFOBValue</th>
              <td>${countyInfo.XFOBValue}</td>
            </tr>
            <tr>
              <th scope="row">totalAppraisedValue</th>
              <td>${countyInfo.totalAppraisedValue}</td>
            </tr>
            <tr>
              <th scope="row">justValue</th>
              <td>${countyInfo.justValue}</td>
            </tr>
            <tr>
              <th scope="row">classValue</th>
              <td>${countyInfo.classValue}</td>
            </tr>
            <tr>
              <th scope="row">assessedValue</th>
              <td>${countyInfo.assessedValue}</td>
            </tr>
            <tr>
              <th scope="row">exemptions</th>
              <td>${countyInfo.exemptions}</td>
            </tr>
            <tr>
              <th scope="row">totalTaxableValue</th>
              <td>${countyInfo.totalTaxableValue}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `
        break;
      case '1' : 
        return `
        <div style="width: 20%; margin: auto;">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Variable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${countyInfo.ownerName}</td>
              <th scope="row">ownerName</th>
            </tr>
            <tr>
              <td>${countyInfo.siteAddress}</td>
              <th scope="row">siteAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.mailAddress}</td>
              <th scope="row">mailAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.useDesc}</td>
              <th scope="row">useDesc</th>
            </tr>
            <tr>
              <td>${countyInfo.neighborhood}</td>
              <th scope="row">neighborhood</th>
            </tr>
            <tr>
              <td>${countyInfo.taxDistrict}</td>
              <th scope="row">taxDistrict</th>
            </tr>
            <tr>
              <td>${countyInfo.totalLandArea}</td> 
              <th scope="row">totalLandArea</th>
            </tr>
            <tr>
              <td>${countyInfo.description}</td>    
              <th scope="row">description</th>
            </tr>
            <tr>
              <td>${countyInfo.mkLandValue}</td>
              <th scope="row">mkLandValue</th>
            </tr>
            <tr>
              <td>${countyInfo.agLandValue}</td>     
              <th scope="row">agLandValue</th>
            </tr>
            <tr>
              <td>${countyInfo.buildingValue}</td>
              <th scope="row">buildingValue</th>
            </tr>
            <tr>
              <td>${countyInfo.XFOBValue}</td>    
              <th scope="row">XFOBValue</th>
            </tr>
            <tr>
              <td>${countyInfo.totalAppraisedValue}</td>
              <th scope="row">totalAppraisedValue</th>
            </tr>
            <tr>
              <td>${countyInfo.justValue}</td>       
              <th scope="row">justValue</th>
            </tr>
            <tr>
              <td>${countyInfo.classValue}</td>      
              <th scope="row">classValue</th>
            </tr>
            <tr>
              <td>${countyInfo.assessedValue}</td>      
              <th scope="row">assessedValue</th>
            </tr>
            <tr>
              <td>${countyInfo.exemptions}</td>     
              <th scope="row">exemptions</th>
            </tr>
            <tr>
              <td>${countyInfo.totalTaxableValue}</td>    
              <th scope="row">totalTaxableValue</th>
            </tr>
          </tbody>
        </table>
        </div>
        `
        break;
      case '2':
      return `
        <div style="width: 50%; margin: auto;">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">ownerName</th>
              <td>${countyInfo.ownerName}</td>
            </tr>
            <tr>
              <th scope="row">siteAddress</th>
              <td>${countyInfo.siteAddress}</td>
            </tr>
            <tr>
              <th scope="row">mailAddress</th>
              <td>${countyInfo.mailAddress}</td>
            </tr>
            <tr>
              <th scope="row">useDesc</th>
              <td>${countyInfo.useDesc}</td>
            </tr>
            <tr>
              <th scope="row">neighborhood</th>
              <td>${countyInfo.neighborhood}</td>
            </tr>
            <tr>
              <th scope="row">taxDistrict</th>
              <td>${countyInfo.taxDistrict}</td>
            </tr>
            <tr>
              <th scope="row">totalLandArea</th>
              <td>${countyInfo.totalLandArea}</td>
            </tr>
            <tr>
              <th scope="row">description</th>
              <td>${countyInfo.description}</td>
            </tr>
            <tr>
              <th scope="row">mkLandValue</th>
              <td>${countyInfo.mkLandValue}</td>
            </tr>
          </tbody>
        </table>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">agLandValue</th>
              <td>${countyInfo.agLandValue}</td>
            </tr>
            <tr>
              <th scope="row">buildingValue</th>
              <td>${countyInfo.buildingValue}</td>
            </tr>
            <tr>
              <th scope="row">XFOBValue</th>
              <td>${countyInfo.XFOBValue}</td>
            </tr>
            <tr>
              <th scope="row">totalAppraisedValue</th>
              <td>${countyInfo.totalAppraisedValue}</td>
            </tr>
            <tr>
              <th scope="row">justValue</th>
              <td>${countyInfo.justValue}</td>
            </tr>
            <tr>
              <th scope="row">classValue</th>
              <td>${countyInfo.classValue}</td>
            </tr>
            <tr>
              <th scope="row">assessedValue</th>
              <td>${countyInfo.assessedValue}</td>
            </tr>
            <tr>
              <th scope="row">exemptions</th>
              <td>${countyInfo.exemptions}</td>
            </tr>
            <tr>
              <th scope="row">totalTaxableValue</th>
              <td>${countyInfo.totalTaxableValue}</td>
            </tr>
          </tbody>
        </table>
        </div>
        `
      break;
      case '3':
      return `
        <div style="width: 50%; margin: auto;">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${countyInfo.ownerName}</td>
              <th scope="row">ownerName</th>
            </tr>
            <tr>
              <td>${countyInfo.siteAddress}</td>
              <th scope="row">siteAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.mailAddress}</td>
              <th scope="row">mailAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.useDesc}</td>
              <th scope="row">useDesc</th>
            </tr>
            <tr>
              <td>${countyInfo.neighborhood}</td>
              <th scope="row">neighborhood</th>
            </tr>
            <tr>
              <td>${countyInfo.taxDistrict}</td>
              <th scope="row">taxDistrict</th>
            </tr>
            <tr>
              <td>${countyInfo.totalLandArea}</td> 
              <th scope="row">totalLandArea</th>
            </tr>
            <tr>
              <td>${countyInfo.description}</td>    
              <th scope="row">description</th>
            </tr>
            <tr>
              <td>${countyInfo.mkLandValue}</td>
              <th scope="row">mkLandValue</th>
            </tr>
          </tbody>
        </table>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Variable</th>
              <th scope="col">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${countyInfo.agLandValue}</td>     
              <th scope="row">agLandValue</th>
            </tr>
            <tr>
              <td>${countyInfo.buildingValue}</td>
              <th scope="row">buildingValue</th>
            </tr>
            <tr>
              <td>${countyInfo.XFOBValue}</td>    
              <th scope="row">XFOBValue</th>
            </tr>
            <tr>
              <td>${countyInfo.totalAppraisedValue}</td>
              <th scope="row">totalAppraisedValue</th>
            </tr>
            <tr>
              <td>${countyInfo.justValue}</td>       
              <th scope="row">justValue</th>
            </tr>
            <tr>
              <td>${countyInfo.classValue}</td>      
              <th scope="row">classValue</th>
            </tr>
            <tr>
              <td>${countyInfo.assessedValue}</td>      
              <th scope="row">assessedValue</th>
            </tr>
            <tr>
              <td>${countyInfo.exemptions}</td>     
              <th scope="row">exemptions</th>
            </tr>
            <tr>
              <td>${countyInfo.totalTaxableValue}</td>    
              <th scope="row">totalTaxableValue</th>
            </tr>
          </tbody>
        </table>
        </div>
        `
      break;
      case '4':
      return `
        <div style="overflow: hidden">
          <div style="width: 50%; float: left;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">ownerName</th>
                  <td>${countyInfo.ownerName}</td>
                </tr>
                <tr>
                  <th scope="row">siteAddress</th>
                  <td>${countyInfo.siteAddress}</td>
                </tr>
                <tr>
                  <th scope="row">mailAddress</th>
                  <td>${countyInfo.mailAddress}</td>
                </tr>
                <tr>
                  <th scope="row">useDesc</th>
                  <td>${countyInfo.useDesc}</td>
                </tr>
                <tr>
                  <th scope="row">neighborhood</th>
                  <td>${countyInfo.neighborhood}</td>
                </tr>
                <tr>
                  <th scope="row">taxDistrict</th>
                  <td>${countyInfo.taxDistrict}</td>
                </tr>
                <tr>
                  <th scope="row">totalLandArea</th>
                  <td>${countyInfo.totalLandArea}</td>
                </tr>
                <tr>
                  <th scope="row">description</th>
                  <td>${countyInfo.description}</td>
                </tr>
                <tr>
                  <th scope="row">mkLandValue</th>
                  <td>${countyInfo.mkLandValue}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style="width: 50%; float: right;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">agLandValue</th>
                  <td>${countyInfo.agLandValue}</td>
                </tr>
                <tr>
                  <th scope="row">buildingValue</th>
                  <td>${countyInfo.buildingValue}</td>
                </tr>
                <tr>
                  <th scope="row">XFOBValue</th>
                  <td>${countyInfo.XFOBValue}</td>
                </tr>
                <tr>
                  <th scope="row">totalAppraisedValue</th>
                  <td>${countyInfo.totalAppraisedValue}</td>
                </tr>
                <tr>
                  <th scope="row">justValue</th>
                  <td>${countyInfo.justValue}</td>
                </tr>
                <tr>
                  <th scope="row">classValue</th>
                  <td>${countyInfo.classValue}</td>
                </tr>
                <tr>
                  <th scope="row">assessedValue</th>
                  <td>${countyInfo.assessedValue}</td>
                </tr>
                <tr>
                  <th scope="row">exemptions</th>
                  <td>${countyInfo.exemptions}</td>
                </tr>
                <tr>
                  <th scope="row">totalTaxableValue</th>
                  <td>${countyInfo.totalTaxableValue}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        `
      break;
      case '5':
      return `
        <div style="overflow: hidden">
        <div style="width: 50%; float: left;">
          <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">Value</th>
              <th scope="col">Variable</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${countyInfo.ownerName}</td>
              <th scope="row">ownerName</th>
            </tr>
            <tr>
              <td>${countyInfo.siteAddress}</td>
              <th scope="row">siteAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.mailAddress}</td>
              <th scope="row">mailAddress</th>
            </tr>
            <tr>
              <td>${countyInfo.useDesc}</td>
              <th scope="row">useDesc</th>
            </tr>
            <tr>
              <td>${countyInfo.neighborhood}</td>
              <th scope="row">neighborhood</th>
            </tr>
            <tr>
              <td>${countyInfo.taxDistrict}</td>
              <th scope="row">taxDistrict</th>
            </tr>
            <tr>
              <td>${countyInfo.totalLandArea}</td> 
              <th scope="row">totalLandArea</th>
            </tr>
            <tr>
              <td>${countyInfo.description}</td>    
              <th scope="row">description</th>
            </tr>
            <tr>
              <td>${countyInfo.mkLandValue}</td>
              <th scope="row">mkLandValue</th>
            </tr>
          </tbody>
        </table>
        </div>
        <div style="width: 50%; float: right;">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Value</th>
                <th scope="col">Variable</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${countyInfo.agLandValue}</td>     
                <th scope="row">agLandValue</th>
              </tr>
              <tr>
                <td>${countyInfo.buildingValue}</td>
                <th scope="row">buildingValue</th>
              </tr>
              <tr>
                <td>${countyInfo.XFOBValue}</td>    
                <th scope="row">XFOBValue</th>
              </tr>
              <tr>
                <td>${countyInfo.totalAppraisedValue}</td>
                <th scope="row">totalAppraisedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.justValue}</td>       
                <th scope="row">justValue</th>
              </tr>
              <tr>
                <td>${countyInfo.classValue}</td>      
                <th scope="row">classValue</th>
              </tr>
              <tr>
                <td>${countyInfo.assessedValue}</td>      
                <th scope="row">assessedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.exemptions}</td>     
                <th scope="row">exemptions</th>
              </tr>
              <tr>
                <td>${countyInfo.totalTaxableValue}</td>    
                <th scope="row">totalTaxableValue</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
        `
      break;
      case '6':
      return `
        <div style="display: flex; width: 100%; margin: auto">
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">ownerName</th>
                <td>${countyInfo.ownerName}</td>
              </tr>
              <tr>
                <th scope="row">siteAddress</th>
                <td>${countyInfo.siteAddress}</td>
              </tr>
              <tr>
                <th scope="row">mailAddress</th>
                <td>${countyInfo.mailAddress}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">useDesc</th>
                <td>${countyInfo.useDesc}</td>
              </tr>
              <tr>
                <th scope="row">neighborhood</th>
                <td>${countyInfo.neighborhood}</td>
              </tr>
              <tr>
                <th scope="row">taxDistrict</th>
                <td>${countyInfo.taxDistrict}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">totalLandArea</th>
                <td>${countyInfo.totalLandArea}</td>
              </tr>
              <tr>
                <th scope="row">description</th>
                <td>${countyInfo.description}</td>
              </tr>
              <tr>
                <th scope="row">mkLandValue</th>
                <td>${countyInfo.mkLandValue}</td>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">agLandValue</th>
                <td>${countyInfo.agLandValue}</td>
              </tr>
              <tr>
                <th scope="row">buildingValue</th>
                <td>${countyInfo.buildingValue}</td>
              </tr>
              <tr>
                <th scope="row">XFOBValue</th>
                <td>${countyInfo.XFOBValue}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">totalAppraisedValue</th>
                <td>${countyInfo.totalAppraisedValue}</td>
              </tr>
              <tr>
                <th scope="row">justValue</th>
                <td>${countyInfo.justValue}</td>
              </tr>
              <tr>
                <th scope="row">classValue</th>
                <td>${countyInfo.classValue}</td>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">assessedValue</th>
                <td>${countyInfo.assessedValue}</td>
              </tr>
              <tr>
                <th scope="row">exemptions</th>
                <td>${countyInfo.exemptions}</td>
              </tr>
              <tr>
                <th scope="row">totalTaxableValue</th>
                <td>${countyInfo.totalTaxableValue}</td>
              </tr>
            </table>
          </div>
        </div>
        `
      break;

      case '7':
      return `
        <div style="display: flex; width: 100%; margin: auto">
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.ownerName}</td>
                <th scope="row">ownerName</th>
              </tr>
              <tr>
                <td>${countyInfo.siteAddress}</td>
                <th scope="row">siteAddress</th>
              </tr>
              <tr>
                <td>${countyInfo.mailAddress}</td>
                <th scope="row">mailAddress</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.useDesc}</td>
                <th scope="row">useDesc</th>
              </tr>
              <tr>
                <td>${countyInfo.neighborhood}</td>
                <th scope="row">neighborhood</th>
              </tr>
              <tr>
                <td>${countyInfo.taxDistrict}</td>
                <th scope="row">taxDistrict</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.totalLandArea}</td>
                <th scope="row">totalLandArea</th>
              </tr>
              <tr>
                <td>${countyInfo.description}</td>
                <th scope="row">description</th>
              </tr>
              <tr>
                <td>${countyInfo.mkLandValue}</td>
                <th scope="row">mkLandValue</th>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.agLandValue}</td>
                <th scope="row">agLandValue</th>
              </tr>
              <tr>
                <td>${countyInfo.buildingValue}</td>
                <th scope="row">buildingValue</th>
              </tr>
              <tr>
                <td>${countyInfo.XFOBValue}</td>
                <th scope="row">XFOBValue</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.totalAppraisedValue}</td>
                <th scope="row">totalAppraisedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.justValue}</td>
                <th scope="row">justValue</th>
              </tr>
              <tr>
                <td>${countyInfo.classValue}</td>
                <th scope="row">classValue</th>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.assessedValue}</td> 
                <th scope="row">assessedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.exemptions}</td>
                <th scope="row">exemptions</th>
              </tr>
              <tr>
                <td>${countyInfo.totalTaxableValue}</td>
                <th scope="row">totalTaxableValue</th>
              </tr>
            </table>
          </div>
        </div>
        `
      break;
      case '8':
      return `
        <div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">ownerName</th>
                <td>${countyInfo.ownerName}</td>
              </tr>
              <tr>
                <th scope="row">siteAddress</th>
                <td>${countyInfo.siteAddress}</td>
              </tr>
              <tr>
                <th scope="row">mailAddress</th>
                <td>${countyInfo.mailAddress}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">useDesc</th>
                <td>${countyInfo.useDesc}</td>
              </tr>
              <tr>
                <th scope="row">neighborhood</th>
                <td>${countyInfo.neighborhood}</td>
              </tr>
              <tr>
                <th scope="row">taxDistrict</th>
                <td>${countyInfo.taxDistrict}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">totalLandArea</th>
                <td>${countyInfo.totalLandArea}</td>
              </tr>
              <tr>
                <th scope="row">description</th>
                <td>${countyInfo.description}</td>
              </tr>
              <tr>
                <th scope="row">mkLandValue</th>
                <td>${countyInfo.mkLandValue}</td>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">agLandValue</th>
                <td>${countyInfo.agLandValue}</td>
              </tr>
              <tr>
                <th scope="row">buildingValue</th>
                <td>${countyInfo.buildingValue}</td>
              </tr>
              <tr>
                <th scope="row">XFOBValue</th>
                <td>${countyInfo.XFOBValue}</td>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">totalAppraisedValue</th>
                <td>${countyInfo.totalAppraisedValue}</td>
              </tr>
              <tr>
                <th scope="row">justValue</th>
                <td>${countyInfo.justValue}</td>
              </tr>
              <tr>
                <th scope="row">classValue</th>
                <td>${countyInfo.classValue}</td>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Variable</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tr>
                <th scope="row">assessedValue</th>
                <td>${countyInfo.assessedValue}</td>
              </tr>
              <tr>
                <th scope="row">exemptions</th>
                <td>${countyInfo.exemptions}</td>
              </tr>
              <tr>
                <th scope="row">totalTaxableValue</th>
                <td>${countyInfo.totalTaxableValue}</td>
              </tr>
            </table>
          </div>
        </div>
        `
      break;
      case '9':
      return `
        <div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.ownerName}</td>
                <th scope="row">ownerName</th>
              </tr>
              <tr>
                <td>${countyInfo.siteAddress}</td>
                <th scope="row">siteAddress</th>
              </tr>
              <tr>
                <td>${countyInfo.mailAddress}</td>
                <th scope="row">mailAddress</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.useDesc}</td>
                <th scope="row">useDesc</th>
              </tr>
              <tr>
                <td>${countyInfo.neighborhood}</td>
                <th scope="row">neighborhood</th>
              </tr>
              <tr>
                <td>${countyInfo.taxDistrict}</td>
                <th scope="row">taxDistrict</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.totalLandArea}</td>
                <th scope="row">totalLandArea</th>
              </tr>
              <tr>
                <td>${countyInfo.description}</td>
                <th scope="row">description</th>
              </tr>
              <tr>
                <td>${countyInfo.mkLandValue}</td>
                <th scope="row">mkLandValue</th>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.agLandValue}</td>
                <th scope="row">agLandValue</th>
              </tr>
              <tr>
                <td>${countyInfo.buildingValue}</td>
                <th scope="row">buildingValue</th>
              </tr>
              <tr>
                <td>${countyInfo.XFOBValue}</td>
                <th scope="row">XFOBValue</th>
              </tr>
            </table> 
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.totalAppraisedValue}</td>
                <th scope="row">totalAppraisedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.justValue}</td>
                <th scope="row">justValue</th>
              </tr>
              <tr>
                <td>${countyInfo.classValue}</td>
                <th scope="row">classValue</th>
              </tr>
            </table>
          </div>
          <div style="margin: 40px;">
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Value</th>
                  <th scope="col">Variable</th>
                </tr>
              </thead>
              <tr>
                <td>${countyInfo.assessedValue}</td> 
                <th scope="row">assessedValue</th>
              </tr>
              <tr>
                <td>${countyInfo.exemptions}</td>
                <th scope="row">exemptions</th>
              </tr>
              <tr>
                <td>${countyInfo.totalTaxableValue}</td>
                <th scope="row">totalTaxableValue</th>
              </tr>
            </table>
          </div>
        </div>
        `
      break;



    }
  }
}