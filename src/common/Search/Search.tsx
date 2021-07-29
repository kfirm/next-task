import './Search.scss'

type SearchProps = {
    placeholder: string,
    onSearch: Function
}


export const Search: React.FC<SearchProps> = ({placeholder, onSearch}) => {

    const handleChange = (event: any) => {
        const value = event?.target?.value;
        onSearch(value);
    }

    return (
        <div className={'Search flex-center'}>
            <input placeholder={placeholder} onChange={handleChange}/>
        </div>);
}
