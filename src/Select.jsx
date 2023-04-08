import './Select.scss';
function Select({ name, id, options, handleSelect, filters }) {
    return (
        <>
            <div className="cuz-select">
                <label className="label" htmlFor={id}>{name}</label>
                <select id={id} className="select" onChange={(e) => { handleSelect({ ...filters, [id]: e.target.value }) }}>
                    <option value={''} key=''>{`Please choose the ${name}`}</option>
                    {options.map(({ label, value }) => <option key={value} value={value}>{label}</option>)}
                </select>
            </div>
        </>
    );
};
export default Select;