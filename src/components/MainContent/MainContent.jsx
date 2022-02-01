import { Input } from "../Input/Input"
import CitiesComponent from '../CitiesComponent/CitiesComponent'
import UserField from '../UserField/UserField'
import { InputCheck } from '../Input/InputCheck/InputCheck'
import { Button } from "../Button/Button"
import StatusField from '../StatusField/StatusField'
import styles from './MainContent.module.css'

function MainContent(){        
    
    return(
        <div className={styles.mainContent}>
            <UserField />          
            <StatusField />  
            <CitiesComponent /> 
            <div className={styles.hr} />           
            <Input 
                header='Пароль' 
                type='password'
                paragraph='Ваш новый пароль должен содержать не менее 5 символов.' />
            <Input 
                header='Пароль еще раз' 
                type='password'
                paragraph='Повторите пароль, пожалуйста, это обезопасит вас с нами
                на случай ошибки.' /> 
            <div className={styles.hr}/>            
            <Input 
                header='Электронная почта'
                paragraph='Можно изменить адрес, указанный при регистрации. ' />                
            <InputCheck 
                header='Я согласен'                 
                paragraph='принимать актуальную информация на емейл '  />
            <Button 
                name='Изменить'/> 
            
        </div>
    )
}

export default MainContent