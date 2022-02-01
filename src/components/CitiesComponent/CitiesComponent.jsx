import s from './CitiesComponent.module.css'
import cities from '../../cities.json'




export default function CitiesComponent(){
    const bigCities = cities.filter(city => city.population >= 50000 )
    const maxCity = bigCities.reduce((acc, curr) => +acc.population > curr.population ? acc : curr) 
    const newCities = [maxCity, ...bigCities]  
    console.log(cities)
    console.log(bigCities)
    console.log(maxCity)
    console.log(newCities)

    return(
        <div className={s.div}>
            <h1 className={s.header}>Ваш город</h1>
            <select className={s.select} name="cities" id="">
                {newCities.map(city => 
                    <option value={city.city}>{city.city}</option>)}
            </select>
        </div>
    )
}
