import "./style.css";

function PageTitle(props){
    return(
        <>
            <div className="page_section">
                <div className="page_title">{props.title}</div>
                <div className="page_description">
                    <p>
                    {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default PageTitle;