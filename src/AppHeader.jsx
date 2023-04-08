import Nav from './Nav';
import './AppHeader.scss';
function AppHeader() {
    return (
        <div id="app-header">
            <div id='logo'>Logo</div>
            <div className='divider'>|</div>
            <Nav />
        </div>
    );
};
export default AppHeader;