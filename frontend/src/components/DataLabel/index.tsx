import './styles.css';

type Label = {
    text: string|undefined,
    children: React.ReactNode
}

export default function DataLabel({text, children}: Label){
    return(
        <div className="data-label-container">
            {children}
            <p className='text'>{text}</p>
        </div>
    );
}