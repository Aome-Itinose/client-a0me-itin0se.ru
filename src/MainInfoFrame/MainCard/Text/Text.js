import s from './Text.module.css';

function Text({text}) {
    return (
        <div className={s.Text}>
            <p>{text}</p>
        </div>
    );
}

export default Text;
