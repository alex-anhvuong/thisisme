import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import useLocalStorage from '../scripts/localStorageData';

const SvgImageProgramming = ({programmingText, imgHeight}) => (
    <svg width="495" height={imgHeight} viewBox={`0 0 495 ${imgHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="0.5" y="0.5" width="99%" height="99%" rx="4.5" fill="#FFFEFE" stroke="#E4E2E2"/>
        {programmingText}
    </svg>
);

function Programming() {
    const [valueProgramming, setValueProgramming] = useLocalStorage(
        'programmingValueStored'
      );
    const valueChangeProgramming = event => setValueProgramming(event.target.value);

    const programmingText = (valueProgramming === '') ? null : <text x="25" y="36"><tspan x="25" y="36" fill="#2F80ED" fontFamily="Segoe UI" fontWeight="600" fontSize="18px">Programming languages I code in</tspan><tspan x="25" y="60" fill="#333" fontFamily="Segoe UI" fontWeight="400" fontSize="14px">{valueProgramming}</tspan></text>;

    const imgHeight = (valueProgramming === '') ? 26 : 82;

    return (
        <>
            <Navigation/>
            <div id="section-wrapper">
                <div>
                    <section id="section">
                        <div id="form-wrapper">
                            <form>
                                <div>
                                    <label htmlFor="programming">Programming languages I code in <span>(comma separated)</span></label><br/>
                                    <input onChange={valueChangeProgramming} value={valueProgramming} type="text" id="programming" name="programming" minlength="0" maxlength="50"/>
                                </div>
                            </form>
                        </div>
                    </section>
                    <aside id="section-aside">
                        <h1>Notes:</h1>
                        <p><span>*</span> all inputs are optional.<br/><span>*</span> comma separated example: JavaScript, Ruby, ...<br/><span>*</span> non-programming languages are also included (eg. HTML).<br/><span>*</span> for information about data, see <Link to="/privacy-policy" exact>Privacy Policy</Link>.</p>
                    </aside>
                </div>
                <div>
                    <SvgImageProgramming programmingText={programmingText} imgHeight={imgHeight}/>
                    <p id="preview-text">preview <span>- you can edit the layout in the <Link to="/s/result" exact>Result</Link> section.</span></p>
                </div>
            </div>
        </>
    );
}

export default Programming;
export {programmingText, imgHeight}
export { SvgImageProgramming }