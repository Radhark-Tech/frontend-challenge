import './styles.css';

export default function TitlePage({title}: string | any){
    return(
        <div className='title-page-container'>
            <h1 className='title-page'>{title}</h1>
        </div>
    );
}