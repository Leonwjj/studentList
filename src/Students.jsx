import './Students.scss';
import Filters from './Filters';
import CuzTable from './CuzTable';
import { useState } from 'react';

function Students() {
    const [filters, setFilters] = useState({ status: '', grade: '', name: '' });
    const resetFilters = () => {
        setFilters({
            ...filters,
            status: '',
            grade: '',
            name: ''
        });
    };
    return (
        <>
            <div className="banner">
                Student List
            </div>
            <div className="main">
                <div className='list'>
                    <Filters handleSelect={setFilters} filters={filters} onResetFilters={resetFilters}></Filters>
                    <CuzTable filters={filters}></CuzTable>
                </div>
            </div>
        </>
    );
};

export default Students;
