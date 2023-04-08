import { useState } from 'react';
import Modal from './Modal';
import './CuzTable.scss';
function CuzTable({ filters }) {
    const [data, setData] = useState([
        { name: 'Leon', id: '1', birthday: '1998-02-02', gender: 'male', grade: 'A+', status: 'active' },
        { name: 'Wendy', id: '2', birthday: '2000-07-01', gender: 'female', grade: 'A+', status: 'negtive' },
        { name: 'Hedy', id: '3', birthday: '1979-01-07', gender: 'male', grade: 'B+', status: 'active' },
        { name: 'James', id: '4', birthday: '1977-09-02', gender: 'female', grade: 'A+', status: 'active' },
        { name: 'Hedy', id: '5', birthday: '1999-01-07', gender: 'female', grade: 'A+', status: 'negtive' },
    ]);
    const addNew = (row) => {
        setData([...data, row]);
        handleOk();
    }
    const cols = [{ label: 'Domicile', value: 'name' }, { label: 'ID', value: 'id' }, { label: 'Birthday', value: 'birthday' }, { label: 'Gender', value: 'gender' }, { label: 'Grade', value: 'grade' }, { label: 'Status', value: 'status' }];
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => { setIsModalOpen(true); };
    const handleCancel = () => { setIsModalOpen(false); };
    const handleOk = () => { setIsModalOpen(true); };
    const [sortedField, setSortedField] = useState({ name: null, id: null, birthday: null, gender: null, grade: null, status: null });
    let filtered = data.slice();
    let filterArr = Object.keys(filters).filter(v => filters[v]);
    filterArr.forEach(v => {
        filtered = filtered.filter(s => {
            return s[v] === filters[v];
        });
    });
    let sorted = filtered.slice();
    function getSort(fn) {
        return function (a, b) {
            var ret = 0;

            if (fn.call(this, a, b)) {
                ret = -1;
            } else if (fn.call(this, b, a)) {
                ret = 1;
            }

            return ret;
        }
    }

    function getMutipSort(arr) {
        return function (a, b) {
            var tmp, i = 0;

            do {
                tmp = arr[i++](a, b);
            } while (tmp == 0 && i < arr.length);

            return tmp;
        }
    }
    var nameSort = getSort(function (a, b) {
        if (sortedField.name === 'desc') {
            return a.name > b.name;
        } else {
            return a.name < b.name;
        }
    });

    var genderSort = getSort(function (a, b) {
        if (sortedField.gender === 'desc') {
            return a.gender > b.gender;
        } else {
            return a.gender < b.gender;
        }
    });
    // var idSort = getSort(function (a, b) {
    //     if (sortedField.id === 'desc') {
    //         return a.id - b.id;
    //     } else {
    //         return b.id - a.id;
    //     }
    // });
    // var birthdaySort = getSort(function (a, b) {
    //     if (sortedField.birthday === 'desc') {
    //         return a.birthday > b.birthday;
    //     } else {
    //         return b.birthday < a.birthday;
    //     }
    // });
    // var gradeSort = getSort(function (a, b) {
    //     if (sortedField.grade === 'desc') {
    //         return a.grade > b.grade;
    //     } else {
    //         return b.grade < a.grade;
    //     }
    // });
    var statusSort = getSort(function (a, b) {
        if (sortedField.status === 'desc') {
            return a.status > b.status;
        } else {
            return b.status < a.status;
        }
    });

    //判断条件先后顺序可调整
    var arr = [nameSort, genderSort];

    sorted.sort(getMutipSort(arr));
    return (
        <>
            <div className='table-header'>
                <span>Results({sorted.length} in total)</span>
                <div>
                    <button className='operate'>DownLoad Results</button>
                    <button className='operate' onClick={showModal}>Add New</button>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        {cols.map((col) =>
                            <th key={col.value}>
                                {col.label}<button className={[sortedField[col.value] === 'asc' ? 'active' : '']} onClick={() => setSortedField({ ...sortedField, [col.value]: 'asc' })}>Asc</button><button className={[sortedField[col.value] === 'desc' ? 'active' : '']} onClick={() => setSortedField({ ...sortedField, [col.value]: 'desc' })}>Desc</button>
                            </th>)}
                    </tr>
                </thead>
                <tbody>
                    {sorted.map((v) => <tr key={v.id} className="row">{cols.map((col, i) => <td key={`tr_${v.id}_col_${i}`} className="col">{v[col.value]}</td>)}</tr>)}
                </tbody>
            </table>
            <Modal visible={isModalOpen} onCancel={handleCancel} onOk={addNew}></Modal>
        </>
    );
};
export default CuzTable; 