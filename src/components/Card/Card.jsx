export default function Card({card}) {
    
    return (
        <div className="flex-ctr-ctr-cards align-ctr cards-container shdo-dk" style={{margin:'3rem auto', width:'80%'}}>
            <div class="card-front shdo-dk">
                <div class="card-inner">
                    <div class="cards-front">
                        <div className="flex-ctr-ctr card-content">{card.word}</div>
                    </div>
                </div>
            </div>
            <div class="card-back shdo-dk">
                <div class="card-inner">
                    <div class="cards-front">
                        <div className="flex-ctr-ctr card-content">{card.definition}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}