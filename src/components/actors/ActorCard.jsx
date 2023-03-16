import { SearchCard, SearchImgWrapper} from '../common/SearchCard'

const ActorCard = ({image,name,gender,country,birthday,deathday}) => {
    return <SearchCard>
    <SearchImgWrapper> <img src={image} alt={name}></img></SearchImgWrapper>
    <h1>{name} {!!gender && `(${gender})`}</h1>
    <p>{country ? `comes from ${country}` : 'country not known'}</p>
    {!!birthday && <p> Born {birthday}</p>}
    <p>{deathday ? `Died at ${deathday}` : 'Alive'}</p>

    </SearchCard>
}

export default ActorCard;