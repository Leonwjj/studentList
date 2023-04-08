import Select from './Select';
import './Filters.scss';
function Filters({ handleSelect, filters, onResetFilters }) {
    return (
        <div id='Filters'>
            <Select name="Status" id="status" options={[{ label: 'active', value: 'active' }, { label: 'negtive', value: 'negtive' }]} handleSelect={handleSelect} filters={filters}></Select>
            <Select name="Grade" id="grade" options={[{ label: 'A+', value: 'A+' }, { label: 'A-', value: 'A-' }, { label: 'B+', value: 'B+' }, { label: 'B-', value: 'B-' }]} handleSelect={handleSelect} filters={filters}></Select>
            <Select name="Name" id="name" options={[{ label: 'Leon', value: 'Leon' }, { label: 'Wendy', value: 'Wendy' }]} handleSelect={handleSelect} filters={filters}></Select>
            <div style={{ marginLeft: '20px' }}>
                <button onClick={() => { onResetFilters() }}>Reset</button>
            </div>
        </div>
    );
};
export default Filters;