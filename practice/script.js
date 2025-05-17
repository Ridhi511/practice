document.getElementById("inputdata").addEventListener("change" , async () => {
    //get user input
    const userinput=document.getElementById("inputdata").ariaValueMax;

    //fetch data
    const weatherdata= await getdata(userinput);

    //display 
    display(weatherdata);

});

const getdata= async (userinput) => {
    if(!userinput){
        return {};
    }
    const apikey=`e0fe53c8846e65559c4685b811e65dfb`;
    const response =await fetch(`https://home.openweathermap.org/api_keys`);
    const data=await response.json();

    return data;
}

function backgroundcolor(temp){
    if(temp<0){
        return `lightblue`;
    }else if(temp<10){
        return `lightgreen`;
    }
    else if(temp<20){
        return `orange`;
    }
    else{
        return`red`;
    }
}

const display = (data)=>{
    const weatherdataelement=document.getElementById(inputdata);

    const background =backgroundcolor(Math.floor(data.main.temp-275.15));
    weatherdataelement.style.backgroundColor=background;

    if(Object.keys(data).length=== 0){
        weatherdataelement.innerHTML=`please enter a location`;
    }
    else{
    weatherdataelement.innerHTML=`
       <h2>${data.name}</h2>
       <p>temperature : ${Math.floor(data.main.temp-275.15)} C</p>
       <p>wind : ${data.wind.speed} m/s</p>
    `;
    }
}
  
window.onload=async () => {
    const weattherdata= await getdata();
    display(weattherdata);
}