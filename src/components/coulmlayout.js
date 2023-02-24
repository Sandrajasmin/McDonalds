const cardDetail = [
    { id: 0, title: "Om vår mat", text: "I McDonald's er vi stolte av å støtte den norske bonden og norsk kvalitetsmat, derfor kommer mesteparten av våre råvarer fra norske bønder.", img: "https://s7d1.scene7.com/is/image/mcdonalds/960x639_matenvaar-new:2-column-desktop?resmode=sharp2" },
    { id: 1, title: "Gavekort", text: "Nå har vi gavekort som vil falle i smak hos alle! Våre gavekort kan brukes som hel- eller delbetaling på restaurantene og er gyldig i ett år.", img: "https://s7d1.scene7.com/is/image/mcdonalds/574x382_gavekort_header:2-column-desktop?resmode=sharp2" },
    { id: 2, title: "Jobb hos Mcdonal's", text: "Vi er alltid på utkikk etter glade og engasjerte medarbeidere. Se ledige stillinger eller les mer om fordeler ved å jobbe hos oss.", img: "https://s7d1.scene7.com/is/image/mcdonalds/960x639_arbeidsliv_ansatte-gruppe:2-column-desktop?resmode=sharp2" },
    { id: 3, title: "Gi oss din feedback", text: "Takk for at du tar deg tid til å gi oss tilbakemelding på ditt besøk. Vi i McDonald's setter veldig stor pris på din mening.", img: "https://s7d1.scene7.com/is/image/mcdonalds/960x639_mcfeedback-new:2-column-desktop?resmode=sharp2" },
]

function columnLayout() {
    return (
        <div className="layout" >
            {cardDetail.map((cardDetail, index) => (
                <div className="column-layout" key={index}>
                    <img alt={cardDetail.title} className="product-img" src={cardDetail.img} />
                    <h2>{cardDetail.title}</h2>
                    <span>{cardDetail.text}</span>
                    <button className="cta-button">
                        <a href="qq">Les mer</a>
                    </button>
                </div>
            ))}
        </div>
    );
}

export default columnLayout;