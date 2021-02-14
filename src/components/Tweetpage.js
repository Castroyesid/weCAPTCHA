import React from 'react'
import './Tweetpage.css'
import Tweet from './Tweet'

let rs= {
    user: "CNN",
    uname: "@CNN",
    tval: "I'm here, live, I'm not a cat",
    valt: "Ég er hér, lifi, ég er ekki köttur ",
    l: 757,
    r: 203,
}

let u1= {
    user: "CNN",
    uname: "@CNN",
    tval: "I'm here, live, I'm not a cat",
    valt: "Ég er hér, lifi, ég er ekki köttur ",
    l: 757,
    r: 203,
}

let u2= {
    user: "Manchester United",
    uname: "@ManUtd",
    tval: "Happy birthday, El Matador",
    valt: "Til hamingju með daginn, El Matador ",
    l: 33100,
    r: 4158,
}

let u3= {
    user: "Jennifer Adcock",
    uname: "@JenKatWrites",
    tval: "You know who doesn’t get impostor syndrome? Cats. Not only does every cat know they’re a cat, I think every cat believes firmly, with conviction, that they are the best possible cat, the prime example of a cat, the most cat a cat could be.",
    valt: "Þú veist hver fær ekki svindlaraheilkenni? Kettir. Ekki aðeins veit hver köttur að þeir eru köttur, ég held að allir kettir trúi staðfastlega, með sannfæringu, um að þeir séu besti mögulegi köttur, helsta dæmið um kött, mestan kött sem köttur gæti verið. ",
    l: 1600,
    r: 450,
}

let u4= {
    user: "Melissa Fumero",
    uname: "@melissafumero",
    tval: "What’s this about new variants",
    valt: "Hvað er þetta við ný afbrigði?r",
    l: 3400,
    r: 181,
}

let u5= {
    user: "Justin Trudeau",
    uname: "@JustinTrudeau",
    tval: "We have some of the strongest border measures in the world. But to keep you safe from new variants that are emerging, we’re making them even stronger. For more on these measures - including new ones that come into effect on Monday, February 22nd - check out the post below.",
    valt: "Hvað er þetta við ný afbrigðVið erum með einhver sterkustu landamæraaðgerðir í heimi. En til að forða þér frá nýjum afbrigðum sem eru að koma upp, gerum við þau enn sterkari. Nánari upplýsingar um þessar ráðstafanir - þar á meðal nýjar sem taka gildi mánudaginn 22. febrúar - skoðaðu færsluna hér að neðani?r",
    l: 1100,
    r: 312,
}

let u6= {
    user: "Massimo",
    uname: "@Rainmaker1973",
    tval: "On Valentine's Day, exactly 31 years ago, cruising four billion miles from the Sun, the Voyager 1 spacecraft looked back one last time to make the first ever Solar System family portrait. 31 years later, look again at the Pale Blue Dot [read more: https://buff.ly/2SqOkst]st new variants",
    valt: "Á Valentínusardaginn, fyrir nákvæmlega 31 ári, þegar hann sigldi fjórum milljörðum mílna frá sólinni, leit Voyager 1 geimfarið í síðasta skipti til baka til að gera fyrstu fjölskyldumynd Sólkerfisins. 31 árum seinna skaltu líta aftur á Fölbláa punktinn [lesa meira: https://buff.ly/2SqOkst]ta við ný afbrigði?r",
    l: 247,
    r: 82,
}

let u7= {
    user: "Texas Tribune",
    uname: "@TexasTribune",
    tval: "Gov. Greg Abbott has issued a disaster declaration for every county in Texas as a massive winter storm envelopes the state.The freezing weather will put the state's power grid to the test as Texans crank up their heaters",
    valt: "Ríkisstjórinn Greg Abbott hefur sent frá sér hörmungaryfirlýsingu fyrir hvert fylki í Texas þar sem stórfelldur vetrarstormur umvefur ríkið.Frostveðrið mun reyna á rafmagnsnet ríkisins þegar Texans sveif hitari þeirra",
    l: 762,
    r: 517,
}


 class Tweetpage extends React.Component {
     constructor(props){
         super(props);
         this.state = {};
     }

     render() {
         return (
            <div>
                <Tweet tinfo={u1} />
                <Tweet tinfo={u2} />
                <Tweet tinfo={u3} />
                <Tweet tinfo={u4} />
                <Tweet tinfo={u5} />
                <Tweet tinfo={u6} />
                <Tweet tinfo={u7} />
            </div>
         );
     }
 } 

 export default Tweetpage