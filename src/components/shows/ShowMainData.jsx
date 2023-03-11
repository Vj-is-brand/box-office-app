const ShowMainData = props => {
  const { image, name, rating, summary, genres } = props;
  return (
    <div>
      <div>
        <img
          src={image ? image.medium : '/no-image-found.png'}
          alt={name}
        ></img>
      </div>
      <div>
        <h1>{name} </h1>

        <div>{rating.average || 'N/A'}</div>
        <div dangerouslySetInnerHTML={{__html: summary}}/>

        <div>
          Genres:
          <div>
            {genres.map(genre => (
              <span key={genre}>{genre}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMainData;
