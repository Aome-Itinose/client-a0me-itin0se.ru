import s from './FullName.module.css';

function FullName({fullName}) {
  return (
      <div className={s.FullName}>
        <p>{fullName}</p>
      </div>
  );
}

export default FullName;
