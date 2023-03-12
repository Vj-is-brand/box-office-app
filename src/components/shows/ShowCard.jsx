const ShowCard = ({ id, image, name, summary, onStarMeClick }) => {
  const summaryStripped = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No Description';
  return (
    <div>
      <div>
        <img src={image} alt={name}></img>
      </div>
      <h1>{name}</h1>
      <div>{summaryStripped}</div>

      <a href={`/shows/${id}`} target="_blank" rel="noreferrer">
        Read more
      </a>
      <button type="button" onClick={()=>onStarMeClick(id)}>
        star me
      </button>
    </div>
  );
};

export default ShowCard;
