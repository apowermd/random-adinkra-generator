let symbols = [
    {id: 1, name: "Gye Nyame", translation: "\"Except for God\"", meaning: "Supremacy of God"},
    {id: 2, name: "Hwe Mu Dua", translation: "\"Measuring Stick\"", meaning: "Examination and Quality Control"},
    {id: 3, name: "Kuronti Ne Akwamu", translation: "\"Kuronti and Akwamu\"", meaning: "Democracy, Sharing ideas, Taking council"},
    {id: 4, name: "Nsaa", translation: "\"A type of hand-woven fabric\"", meaning: "Excellence, Genuineness, Authenticity"},
    {id: 5, name: "Sepow", translation: "\"Executioner's Knife\"", meaning: "Justice"},
    {id: 6, name: "Adinkrahene", translation: "\"Chief of the Adinkra Symbols\"", meaning: "Greatness, Charisma and Leadership"},
    {id: 7, name: "Mpatapo", translation: "\"Knot of Pacification/Reconciliation\"", meaning: "Reconciliation, Peacemaking and Pacification"},
    {id: 8, name: "Osram Ne Nsoromma", translation: "\"The Moon and the Star\"", meaning: "Love, Faithfulness, Harmony"},
    {id: 9, name: "Nkyinkyim", translation: "\"Twisting\"", meaning: "Dynamism and Versatility"},
    {id: 10, name: "Mako", translation: "\"Pepper\"", meaning: "Inequality and Uneven development"},
    {id: 11, name: "Nyame Dua", translation: "\"Tree of God\"", meaning: "God’s Presence and Protection"},
    {id: 12, name: "Akoma", translation: "\"The Heart\"", meaning: "Patience and Tolerance"},
    {id: 13, name: "Nyame Nnwu Na Mawu", translation: "\"God never dies, therefore I cannot die\"", meaning: "God’s omnipresence and the perpetual existence of man’s spirit"},
    {id: 14, name: "Akoben", translation: "\"War Horn\"", meaning: "Vigilance and Wariness"},
    {id: 15, name: "Nkonsonkonson", translation: "\"Chain Link\"", meaning: "Unity and Human relations"},
    {id: 16, name: "Odo Nnyew Fie Kwan", translation: "\"Love never loses its way home\"", meaning: "The Power of Love"},
    {id: 17, name: "Funtunfunefu-Denkyemfunefu", translation: "\"Siamese Crocodiles\"", meaning: "Democracy and Unity"},
    {id: 18, name: "Denkyem", translation: "\"Crocodile\"", meaning: "Adaptability"},
    {id: 19, name: "Akoma Ntoso", translation: "\"Linked Hearts\"", meaning: "Understanding and Agreement"},
    {id: 20, name: "Nsoromma", translation: "\"Child of the heavens [stars] \"", meaning: "Guardianship"},
    {id: 21, name: "Tamfo Bebre", translation: "\"The enemy will stew in his own juice\"", meaning: "Jealousy and Envy"},
    {id: 22, name: "Akoko Nan", translation: "\"The leg of a hen\"", meaning: "Nurturing and Discipline"},
    // {id: 23, name: "?????", translation: "\"?????\"", meaning: "?????"},
    {id: 24, name: "Adwo", translation: "\"Peace\"", meaning: "Serenity, Peace, Calmness"},
    {id: 25, name: "Abe Dua", translation: "\"Palm Tree\"", meaning: "Wealth, Resourcefulness, and Self-sufficiency"},
    {id: 26, name: "Okuafo Pa", translation: "\"Good Farmer\"", meaning: "Diligence, Hard work, Entrepreneurship"},
    {id: 27, name: "Duafe", translation: "\"Wooden Comb\"", meaning: "Beauty and Cleanliness"},
    {id: 28, name: "Menso Wo Kenten", translation: "\"I am not carrying your basket\"", meaning: "Industry, Self-reliance, and Economic self-determination"},
    {id: 29, name: "Dwennimmen", translation: "\"Ram's Horns\"", meaning: "Humility and Strength"}
]

function getSymbol() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

class Adinkra extends React.Component {
    constructor(props) {
        super(props);
        let s = getSymbol();
        this.state = {
            id: s.id,
            name: s.name,
            translation: s.translation,
            meaning: s.meaning
        };
        this.getNextSymbol = this.getNextSymbol.bind(this);
    }

    getNextSymbol() {
        let s = getSymbol();
        this.setState( {id: s.id, name: s.name, translation: s.translation, meaning: s.meaning} );
    }

    render() {
        let imgSrc = `../Assets/Symbols/Adinkra${this.state.id}.svg`;
        return (
            <div className="Adinkra">
              <h1 className="Adinkra-h1">{this.state.name}</h1>
              <span className="Adinkra-row">
                <img src={imgSrc} alt={this.state.name} className="Adinkra-img grow"/>
                <span className="Adinkra-col">
                    <p className="Adinkra-p"><strong>Translation: </strong>{this.state.translation}</p>
                    <p className="Adinkra-p"><strong>Meaning: </strong>{this.state.meaning}</p>
                    {/* <button className="Adinkra-btn" onClick={this.getNextSymbol}>Next</button> */}
                </span>
              </span>
              <div className="center">
                 <button className="Adinkra-btn" onClick={this.getNextSymbol}>Next</button>
              </div>
              
            </div>
        )
    }
}