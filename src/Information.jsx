import image1 from './Screenshot 2024-11-30 123632.png'
import image2 from './Screenshot 2024-11-30 140851.png'
import './information2.css'

function information() {

    return (
        <>
            <section className='section'>
                <div className="information">
                    <h1>Who are we? </h1>
                    <p className="para">At AquaLife, our mission is to ensure access to clean, safe, and affordable water for everyone. We are dedicated to combating waterborne diseases by providing innovative water purification tablets that are both cost-effective and highly efficient. Each tablet is scientifically formulated to eliminate harmful contaminants, ensuring that every drop of water becomes a source of health and vitality. We prioritize quality and safety, adhering to the highest global standards in water purification. With a deep commitment to sustainability and community well-being, AquaLife envisions a future where no one suffers due to a lack of clean water. By choosing AquaLife, you’re not just purifying water—you’re saving lives and investing in a healthier tomorrow. Together, let’s make clean water a reality for all..</p>
                    <a href="https://www.who.int/teams/environment-climate-change-and-health/water-sanitation-and-health/water-safety-and-quality/drinking-water-quality-regulation">
                        <button className="button1">Know your water</button>
                    </a>
                </div>
                <div className="images">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                </div>
            </section>
        </>
    )
}


export default information;