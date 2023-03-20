import { CastItem } from './../CastItem/CastItem';

export const Cast = items => {
  return (
    <ul>
      {items.map(() => {
        return (
          <CastItem
            key={id}
            id={id}
            img={img}
            name={actorName}
            character={characterName}
          />
        );
      })}
    </ul>
  );
};
