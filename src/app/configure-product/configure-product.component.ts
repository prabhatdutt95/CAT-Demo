import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-configure-product',
  templateUrl: './configure-product.component.html',
  styleUrls: ['./configure-product.component.css']
})
export class ConfigureProductComponent implements OnInit {

  dataArray = [
    {
    "section": "1",
    "isMandatory": "true",
    "msg": " The CE Certification package is madatory for the UK",
    "values": [
        {
            "id": "CE",
            "name": "CE Certification",
            "desc": "Certifies conformity with health,safety, and environmental protection standards"
        }
      ]
    },
    {
        "section": "2",
        "isMandatory": "false",
        "msg": "Select from the following options to suit your project needs.The most common configurations are pre-selected. ",
        "values": [
            {
                "id":"Battery Charger",
                "name": "Battery Charger",
                "desc": "Keeps the battery charged.Default configuration has no battery charger",
                "isSelect":"true"
            },
            {
                "id":"Battery",
                "name":"Battery",
                "desc":"Battery to power system ignition and control panel",
                "isSelect":"true"
            },
            {
                "id":"24 hour fuel tank",
                "name":"24 hour fuel tank",
                "desc":"Replaces the default 300 L fuel tank with a 1000 L version",
                "isSelect":"true"
            },
            {
                "id":"Low fuel alarm",
                "name": "Low fuel alarm",
                "desc":"Indicates when fuel running low",
                "isSelect":"false"
            },
            {
                "id":"Galvanised Enclosure",
                "name":"Galvanised Enclosure",
                "desc": "Galvanisation offers an extra level of protection against the elements",
                "isSelect":"false"
            },
            {
                "id":"Industrial Silencer",
                "name": "Industrial Silencer",
                "desc":"Reduces noise output by a factor of 0.23",
                "isSelect":"false"
            },
            {
                "id":"Installation Kit",
                "name": "Installation Kit",
                "desc": "Provides all the accessories required for a seamless installation",
                "isSelect":"true"        
            },
            {
                "id":"Radiator transition flange",
                "name":"Radiator transition flange",
                "desc": "Lorem ipsum dolor sit amet",
                "isSelect":"false"
            },
            {
                "id": "Electrical governer",
                "name":"Electrical governer",
                "desc": "Replaces the default mechanical governer",
                "isSelect":"true"
            },
            {
                "id":"Jacket water heater",
                "name": "Jacket water heater",
                "desc": "Keeps water lines from freezing, recommended for northern Europe",
                "isSelect":"true"
            },
            {
                "id":"EMCP",
                "name":"EMCP",
                "desc":"Upgrades control panel",
                "isSelect":"false"
            },
            {
                "id":"ATI load transfer panel",
                "name":"ATI load transfer panel",
                "desc":"Lorem ipsum dolor sit amet",
                "isSelect":"false"
            },
            {
                "id":"4-Pole circuit breaker",
                "name":"4-Pole circuit breaker",
                "desc": "A 4-Pole circuit breaker instead of the standard 3-Pole circuit breaker",
                "isSelect":"false"
            },
            {
                "id":"PT300E",
                "name":"PT300E monitoring system",
                "desc":"This monitor includes a custom harness, has four($) additional programmable bias inputs and one (1) ADC input",
                "isSelect":"false"
            }
        
        ]
    },
    {   
        "section": "3",
        "isMandatory": "false",
        "msg": "Recommended dealer options that can be included",
        "values": [
            {
                "id": "Auto mains",
                "name": "Auto Mains Failure Control Panel",
                "desc": "Your bridge between mains power and your backup generators. Automatic transfer switch(ATS) panels make the power switch to the emergency standby generator in the event of a significant loss of mains power.",
            },
            {
                "id": "Power Control",
                "name": "Power Control Center Panel",
                "desc": "Used for diverse industrial applications and to provide reliable and effective service. These panels are manufactured per cliet's specifications and reuirements"
            },
            {
                "id":"CAT Filter Package",
                "name": "CAT Filter Package ",
                "desc": "Keep your generator performing. This set consists of 1 fuel filter,1 air filter and 1 oil filter."
            },
            {
                "id":"Socket box",
                "name":"Socket box",
                "desc":"Connect your appliances easily to your generator set with our socket box. 2x16A 230 V / 2x16A 400 V CEE from plugs"
            }
        ]
    },
    {
        "section": "4",
        "countries":[
            "Uganda","Ukraine","UAE","United Kingdom","United states",
            "Uruguay", "Uzbekistan","Vanuatu"
        ]
    }
  ]
  selectedConfigurations = [];
  availableConfigurations = [];

  constructor(private router: Router) { }

  ngOnInit() {
      this.dataArray.forEach(section => {
          if(section.values){
            section.values.forEach((value)=>{
                this.availableConfigurations.push({name: value.name, value: false})
            })
          }
      })
      console.log(this.availableConfigurations)
  }
  goBack() {
    this.router.navigate(['/product']);
  }
  addSelectedConfiguration(name){
    this.selectedConfigurations.push(name);
  }
}
