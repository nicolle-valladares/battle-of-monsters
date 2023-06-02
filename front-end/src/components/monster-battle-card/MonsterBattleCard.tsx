import { Fragment } from 'react';
import { Monster } from '../../models/interfaces/monster.interface';
import {
  BattleMonsterCard,
  BattleMonsterTitle,
  Hr,
  Image,
  ProgressBar,
  PropertyTittle,
} from './MonsterBattleCard.styled';

type MonsterCardProps = {
  monster?: Monster | null;
  title?: string;
};

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
  const monsterProperties = {
    HP: monster?.hp,
    Attack: monster?.attack,
    Defense: monster?.defense,
    Speed: monster?.speed,
  };

  const properties = Object.entries(monsterProperties);

  return (
    <BattleMonsterCard centralized>
      <Image src={monster?.imageUrl}></Image>
      <BattleMonsterTitle>{title!}</BattleMonsterTitle>
      {monster && (
        <>
          <Hr />
          {properties.map(([property, value]) => (
            <Fragment key={property}>
              <PropertyTittle>{property}</PropertyTittle>
              <ProgressBar variant="determinate" value={value}></ProgressBar>
            </Fragment>
          ))}
        </>
      )}
    </BattleMonsterCard>
  );
};

export { MonsterBattleCard };
