import s from './UserField.module.css'

export default function UserField(props){
    const {user = 'Человек №3596921'} = props;
    return(
        <div>
            <h1 className={s.header}>Здравствуйте, <span className={s.span}>{user}</span></h1>
        </div>
    )
}