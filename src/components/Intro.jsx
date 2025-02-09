import borsuk from "../assets/borsuk.jpg"
import reactLogo from "../assets/logos/react.svg";
import jsLogo from "../assets/logos/js.svg";
import htmlLogo from "../assets/logos/html.svg";
import cssLogo from "../assets/logos/css.svg";
import cppLogo from "../assets/logos/cpp.svg";
import mongodbLogo from "../assets/logos/mongodb.svg";
import expressLogo from "../assets/logos/expressjs.svg";
import nodejsLogo from "../assets/logos/nodejs.svg";

function Intro() {
    return (<div className="intro">
        <div id="introContainer">
            <article>
                <h1>Hi, my name is Nikita</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo omnis deleniti atque eveniet similique iste possimus earum obcaecati doloremque iure repellat minus commodi ad sed maiores magnam iusto, soluta sapiente est cum numquam. Nihil, ipsam mollitia? Suscipit dolorem nihil dicta alias molestiae culpa ex odio!</p>
                {/* <p>I'm a 19yo sophomore student at Vistula University based in Warsaw. Originally I'm from Ukraine but I've been living in Poland for 4 years. I fluently speak English, Polish, Russian & Ukrainian. Other than coding, I'm really into travelling and all kinds of sports like running, calisthenics, acrobatics & muay thai.</p> */}
            </article>
            <div className="">
                <h2 className="skillHeader">How can I help you?</h2>
                <p>I design and develop fast, responsive, and user-friendly websites using modern web technologies. <br></br>From development to optimization and hosting, I handle it all - so your users can simply enjoy the experience!</p>
            </div>

            <div>
                <h2 className="skillHeader">Tech i work with:</h2>
                <div className="skillContainer">
                    <img src={reactLogo} alt="React" title="React" className="box" />
                    <img src={jsLogo} alt="JavaScript" title="JavaScript" className="box" />
                    <img src={htmlLogo} alt="HTML" title="HTML" className="box" />
                    <img src={cssLogo} alt="CSS" title="CSS" className="box" />
                    <img src={nodejsLogo} alt="Node.js" title="Node.js" className="box" />
                    <img src={mongodbLogo} alt="MongoDB" title="MongoDB" className="box" />
                    <img src={expressLogo} alt="Express.js" title="Express.js" className="box" />
                    <img src={cppLogo} alt="C++" title="C++" className="box" />


                </div>

            </div>
        </div>


        <img src={borsuk} />
    </div >)
}
export default Intro;