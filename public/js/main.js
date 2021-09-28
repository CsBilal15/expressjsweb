const serchbtn=document.getElementById('serchbtn');
const cityname=document.getElementById('cityName');
const city_name=document.getElementById("city_name");
const temp=document.getElementById('temp');
const temp_status=document.getElementById("temp_status");
const datahide=document.querySelector('.middle_layer');
const getinfo= async(event)=>{
    event.preventDefault();
   let cityval=cityname.value;
     if(cityval === ""){
      city_name.innerText=`please Write The Name Before Search`;
      datahide.classList.add('data_hide');
     }else{
         try{
            let url=`http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=07d90d9b1995c415f4ddbd01b68c0fef`;
            const response=await fetch(url); 
            const data=await response.json();
            const arrdata=[data];
             city_name.innerText=`${arrdata[0].name}, ${arrdata[0].sys.country}`
            temp.innerText=arrdata[0].main.temp;
            const tempmod=arrdata[0].weather[0].main;

            if(tempmod=="Clear"){
              temp_status.innerHTML='<i class="fas fa-sun" style="color: #eccc68;"></i>'  
            }
            else if(tempmod=="Clouds"){
              temp_status.innerHTML='<i class="fas fa-cloud" style="color: #f1f2f6;"></i>'  
            }
            else if(tempmod=="Rain"){
              temp_status.innerHTML='<i class="fas fa-cloud-rain" style="color: #a4b0be;"></i>'  
            }
            else{
              temp_status.innerHTML='<i class="fas fa-cloud" style="color: #f1f2f6;"></i>'  
            }
            
            datahide.classList.remove('data_hide');
         }
         catch{
            city_name.innerText=`please Enter Correct City Name`;
            datahide.classList.add('data_hide'); 
        }
       
    }
}
serchbtn.addEventListener('click',getinfo)