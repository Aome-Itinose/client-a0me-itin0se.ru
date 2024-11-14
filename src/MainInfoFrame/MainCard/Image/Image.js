import s from './Image.module.css';

function Image({imageSrc}) {
    return (
        <div className={s.Image}>
          <img className={s.ProfileImageSrc} src={imageSrc} alt={""}></img>
        </div>
    );
}

export default Image;
