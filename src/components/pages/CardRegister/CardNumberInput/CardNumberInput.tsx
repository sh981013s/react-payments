import React from 'react';
import { useCardRegisterContext } from '../../../../context/CardRegisterContext';
import { useCardNumber } from '../../../../hooks/card/card';
import { CardNumber } from '../../../../types/card.type';
import Flex from '../../../@common/Flex/Flex';
import Input from '../../../@common/Input/Input';
import * as Styled from './CardNumberInput.styles';

export default function CardNumberInput() {
  const { cardRegisterInfo, handleCardInfo } = useCardRegisterContext();
  const { defaultConditions } = useCardNumber();

  if (!cardRegisterInfo) {
    return null;
  }

  const { cardNumber } = cardRegisterInfo;

  const onChangeValue: <T extends keyof CardNumber>(key: T, value: CardNumber[T]) => void = (key, value) => {
    handleCardInfo('cardNumber', {
      ...cardNumber,
      [key]: value,
    });
  };

  return (
    <Styled.FieldSet>
      <Flex dir='column' justify='start' width='100%'>
        <Styled.Legend>카드 번호</Styled.Legend>
        <Styled.InputBackground>
          <Input>
            <Input.Field
              name='first'
              onChange={({ target: { value } }) => {
                onChangeValue('first', value);
              }}
              value={cardNumber['first']}
              {...defaultConditions}
            >
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['first'] || cardNumber['second'])}>-</Styled.Divider>
          <Input>
            <Input.Field name='second' value={cardNumber['second']} onChange={({ target: { value } }) => onChangeValue('second', value)} autoComplete='off' {...defaultConditions}>
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['second'] || cardNumber['third'])}>-</Styled.Divider>
          <Input>
            <Input.Field name='third' type='password' value={cardNumber['third']} onChange={({ target: { value } }) => onChangeValue('third', value)} {...defaultConditions}>
              <Styled.Input />
            </Input.Field>
          </Input>
          <Styled.Divider show={Boolean(cardNumber['third'] || cardNumber['fourth'])}>-</Styled.Divider>
          <Input>
            <Input.Field name='fourth' type='password' value={cardNumber['fourth']} onChange={({ target: { value } }) => onChangeValue('fourth', value)} {...defaultConditions}>
              <Styled.Input />
            </Input.Field>
          </Input>
        </Styled.InputBackground>
      </Flex>
    </Styled.FieldSet>
  );
}
