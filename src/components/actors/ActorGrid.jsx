import ActorCard from './ActorCard';
import {FlexGrid} from '../common/FlexGrid'

const ActorGrid = ({ actors }) => {
  return (
    <FlexGrid>
      {actors.map(data => (
        <ActorCard
          key={data.person.id}
          image={
            data.person.image
              ? data.person.image.medium
              : '/no-image-found.png'
          }
          name={data.person.name}
          birthday={data.person.birthday}
          gender={data.person.gender}
          country={data.person.country ? data.person.country.name : null }
          deathday={data.person.deathday ? data.person.deathday : null}
        />
      ))}
    </FlexGrid>
  );
};

export default ActorGrid;
