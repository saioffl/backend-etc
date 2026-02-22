import Card from "./Card"

function Anime(){
    const animeNames = [
        {
            id:1 ,
            name:'Naruto'
        } , 
        {
            id:2,
            name:'Bleach'
        }
    ]

    const animeIter = animeNames.map((anime) => <Card key={anime.id} name={anime.name} />)

    return (
        <div>
            {animeIter}
        </div>
    )
}

export default Anime