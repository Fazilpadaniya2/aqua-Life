import './collab.css'
import IMG from './djb.jpg'
function collab() {

    return (<>
        <section class="collaborations">
            <h2>Our Collaboration</h2>
            <div class="collaboration-list">
                <div class="collaboration-item">
                    <img src={IMG} alt="Collaborator 1 Logo" />
                    <p><strong>Delhi Jal Board(Djb)</strong>: Partnering for community outreach and public health initiatives.</p>
                </div>
            </div>
        </section>
    </>
    )
}

export default collab;