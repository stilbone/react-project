import './StatusField.css'
import { useRef, useState } from 'react';

export default function StatusField(props){
    const [statusText, setStatusText] = useState('Прежде чем действовать, надо понять');
    const [visible, setVisible] = useState(false)
    const inputFocus = useRef(null)
    
    const handleStatus = (newStatus) => {               
        setStatusText(newStatus.target.value)        
    }

    const enterHandler = (event) => {
        if(event.key === 'Enter'){
            setVisible(!visible)
        }
    }

    const changeStatus = () => {
        inputFocus.current.focus()
        setVisible(!visible)   
    }
    

    return(
        <div className='main'>
            <button 
                className='statusButton' 
                onClick={changeStatus}>
                Сменить статуc
            </button>            
            <div className='statusText'>{statusText}</div>
            <input 
                ref={inputFocus}                
                className={visible ? "input_visible" : 'input_notvisible'}
                type='text' 
                value={statusText} 
                onChange={handleStatus}
                onKeyPress={enterHandler} />
        </div>
    )
}
