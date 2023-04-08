import { useState } from 'react'
import './Modal.scss';
function Modal({ visible, onCancel, onOk }) {
    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('male');
    const [grade, setGrade] = useState(null);
    const [status, setStatus] = useState('')
    return (
        <div className={`modal ${visible ? '' : 'hidden'}`}>
            <div className='modal-header'>
                <span>Add New</span>
            </div>
            <form>
                <div>
                    <label htmlFor='name'>domicile</label>
                    <input id='name' onChange={(e) => { setName(e.target.value) }}></input>
                </div>
                <div>
                    <label htmlFor='id'>id</label>
                    <input id='id' onChange={(e) => { setId(e.target.value) }}></input>
                </div>
                <div>
                    <label htmlFor='birthday'>birthday</label>
                    <input id="birthday" type='date' onChange={(e) => { setBirthday(e.target.value) }}></input>
                </div>
                <div>
                    <input type="radio" id="male" name="gender" value="male" selected onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor='male'>male</label>
                    <input type="radio" id="female" name="gender" value="female" onChange={(e) => { setGender(e.target.value) }} />
                    <label htmlFor='female'>female</label>
                </div>
                <div>
                    <label htmlFor='grade'>grade</label>
                    <input id='grade' onChange={(e) => { setGrade(e.target.value) }}></input>
                </div>
                <div>
                    <label htmlFor='status'>status</label>
                    <select id='status' onChange={(e) => { setStatus(e.target.value) }}>
                        <option value=''>Please choose status</option>
                        <option value='acitve'>active</option>
                        <option value='negtive'>negtive</option>
                    </select>
                </div>
                <div className='footer'>
                    <button onClick={onCancel}>cancel</button>
                    <button onClick={() => { onOk({ name, id, birthday, gender, grade, status }) }}>submit</button>
                </div>
            </form>
        </div>
    );
};
export default Modal;