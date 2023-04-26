import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardRegisterInfo } from '../../types/card.type';
import * as Styled from './MyCardList.styles';
import AddCardButton from '../../components/pages/CardList/AddCardButton/AddCardButton';
import CardContent from '../../components/pages/CardList/CardContent/CardContent';
import { getItemFromLocalStorage } from '../../utils/localStorage';

export default function MyCardList() {
  const navigate = useNavigate();
  const [registeredCards] = useState(getItemFromLocalStorage<CardRegisterInfo[]>('CardList'));

  return (
    <Styled.Root dir='column' align='center'>
      {registeredCards &&
        registeredCards.map((card, index) => {
          return (
            <>
              <CardContent key={index} {...card} />
              <p>{card.cardAlias}</p>
            </>
          );
        })}
      <AddCardButton onClick={() => navigate('/registerCard')} />
    </Styled.Root>
  );
}
