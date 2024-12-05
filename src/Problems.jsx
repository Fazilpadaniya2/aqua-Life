import './Problems.jsx'

function problems() {

    return (<div className="problem-analysis-container">
        <h1 className="main-title">Problems We will be tackling</h1>
        <h2 className="subtitle">
            Aqua Life aligns with UN SDG 6: Clean Water and Sanitation
        </h2>
        <div className="cards-container">
            <div className="card">
                <h3 className="card-title">Water Contamination in Delhi:</h3>
                <p className="card-description">
                    Over 70% of households in low-income areas of Delhi rely on unsafe
                    water sources, exposing them to high levels of contaminants like
                    bacteria, viruses, and industrial pollutants.
                </p>
            </div>
            <div className="card">
                <h3 className="card-title">Health Crisis:</h3>
                <p className="card-description">
                    Waterborne diseases such as diarrhea, cholera, and typhoid are
                    rampant, disproportionately affecting children and vulnerable
                    populations.
                </p>
            </div>
            <div className="card">
                <h3 className="card-title">Economic Burden:</h3>
                <p className="card-description">
                    Families spend a significant portion of their income on healthcare
                    expenses caused by preventable waterborne illnesses.
                </p>
            </div>
            <div className="card">
                <h3 className="card-title">Lack of Awareness:</h3>
                <p className="card-description">
                    Limited understanding of the link between contaminated water and
                    diseases perpetuates poor hygiene practices.
                </p>
            </div>
        </div>
    </div>
    )
}



export default problems;