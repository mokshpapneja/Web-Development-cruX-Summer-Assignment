var button = document.querySelector(".button");
var input1 = document.querySelector(".inputvalue");
var name1 = document.querySelector(".location");
var temp=document.querySelector(".temp");
var climate=document.querySelector(".climate");
var ppt=document.querySelector(".ppt");
var humid=document.querySelector(".humid");
var wind=document.querySelector(".wind");
var dates=document.querySelector('.date');
var day = document.querySelector('.day');
var day1=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(1) > p:nth-child(2)');
var day2=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(2) > p:nth-child(2)');
var day3=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(3) > p:nth-child(2)');
var day4=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(4) > p:nth-child(2)');
var icon = document.querySelector('.down i');
var icon1=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(1) > i');
var temp1=document.querySelector('body > div.container > div.rightbox > div.nextdays > ul > li:nth-child(1) > p.temps');




var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
let arr=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
dates.innerHTML=dd + " " + arr[parseInt(mm)-1]+" "+yyyy;
 let arr1=[
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];
day.innerHTML=arr1[today.getDay()];
day1.innerHTML=arr1[today.getDay()].slice(0,3);
day2.innerHTML=arr1[(today.getDay()+1)%7].slice(0,3);
day3.innerHTML=arr1[(today.getDay()+2)%7].slice(0,3);
day4.innerHTML=arr1[(today.getDay()+3)%7].slice(0,3);









button.addEventListener('click', function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input1.value+'&appid=4d5af29a5f09853516973cfb67ae85af')
    .then(response=>response.json())
    .then(data =>
       {var namevalue = data['name'];
        var tempvalue =data['main']['temp'];
        var country = data['sys']['country'];
        var climatevalue= data['weather'][0]['main'];
        var pptvalue=data['clouds']['all'];
        var humidvalue=data['main']['humidity'];
        var windvalue=data['wind']['speed'];
        name1.innerHTML='<i class="fas fa-map-marker-alt"></i> '+namevalue + "," + country;
        temp1.innerHTML=temp.innerHTML=(Math.round(tempvalue-273))+"&#176;C";
        climate.innerHTML=climatevalue;
        ppt.innerHTML=pptvalue+"%";
        humid.innerHTML=humidvalue+"%"
        wind.innerHTML=windvalue+" Km/h";
        console.log(namevalue,tempvalue,country,climatevalue);
        
        const weathermap =new Map([["Clouds",'cloud'],["Mist",'cloud-rain'],["Sunny",'sun'],["Clear",'sun'],["Haze",'sun'],["Smoke",'smog'],["Wind",'wind'],["Rain",'cloud-showers-heavy']]);

        icon.setAttribute("class","fas fa-"+weathermap.get(climatevalue)+" fa-4x");
        icon1.setAttribute("class",`fas fa-${weathermap.get(climatevalue)} fa-2x`);



    
}).catch(err => {console.log(input1.value);alert('Wrong city name!')});
})

var button1 = document.querySelector(".button1");
button1.addEventListener('click',function(){alert('Write the City Name in Search Bar!')});




