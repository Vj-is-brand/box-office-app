const ActorCard = ({image,name,gender,country,birthday,deathday}) => {
    return <div>
    <div> <img src={image} alt={name}></img></div>
    <h1>{name} {!!gender && `(${gender})`}</h1>
    <p>{country ? `comes from ${country}` : 'country not known'}</p>
    {!!birthday && <p> Born {birthday}</p>}
    <p>{deathday ? `Died at ${deathday}` : 'Alive'}</p>

    </div>
}

export default ActorCard;