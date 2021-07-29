import './TopBar.scss'
import Logo from '../../assets/logo/Logo2.png'



export const TopBar = () =>
    <div className={'TopBar'}>
        <img className={'TopBar-logo'} src={Logo} alt={'Next Movies'}/>
    </div>
