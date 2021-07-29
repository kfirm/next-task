import './Button.scss'

type ButtonProps = {
    children: React.ReactNode,
};

export const Button: React.FC<ButtonProps> = ({children}) => {

    return (
        <button className={'Button flex-space-between flex-align-center'}>
            {children}
        </button>
    )
}