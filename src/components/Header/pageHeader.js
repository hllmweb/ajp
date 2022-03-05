import Logo from '../Logo';
import Nav from '../Nav';
import './style.css';

function PageHeader(){
    return(
        <>
            <div className="page_header">
                <div className="page_header_top">
                    <Logo />
                    <Nav />
                </div>
                
            </div>
        </>
    );
}

export default PageHeader;