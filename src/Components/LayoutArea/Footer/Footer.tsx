import "./Footer.css";

function Footer(): JSX.Element {
    return (
        <div className="Footer">
			<p>כל הזכויות שמורות - אופיר לוזון |{currentYear()}</p>
        </div>
    );
}

function currentYear(){
    const date = new Date();
    const year = date.getFullYear();
    return year;
}

export default Footer;
