const calculateTemp=() =>
{
    const inputTemp=document.getElementById('temp').value;

const tempSelected = document.getElementById('temp_diff');
const valueTemp= temp_diff.options[tempSelected.selectedIndex].value;

// connvert temperature from celcius to fahrenheit
const celTofah=(cel)=>
{
    let  fahrenheit=((cel*9/5) +32).toFixed(1);
    return(fahrenheit);
}
// convert temperature from fahreheit to celcius
const fahTocel=(fah) =>
{
    let celcius = ((fah-32)*5/9).toFixed(1);
    return celcius;
}
if(valueTemp=='cel')
{
    document.getElementById("result").innerHTML= celTofah(inputTemp)+"&#176; Fahrenheit";
}
else
{
    document.getElementById("result").innerHTML= fahTocel(inputTemp)+"&#176; Celsius";

}
}