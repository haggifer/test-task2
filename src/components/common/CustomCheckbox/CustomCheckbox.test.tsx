import React from 'react';
import { render } from '@testing-library/react';
import CustomCheckbox from './CustomCheckbox';

describe('CommonSelect Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <CustomCheckbox label="test label" value={true} onChange={() => {}} />,
    );

    expect(container).toBeInTheDocument();
  });

  it('properly renders input type', () => {
    const { container: commonContainer } = render(
      <CustomCheckbox value={true} onChange={() => {}} />,
    );

    const commonInput = commonContainer.querySelector('input');

    expect(commonInput!.type).toEqual('checkbox');

    const { container: radioContainer } = render(
      <CustomCheckbox value={true} onChange={() => {}} radio />,
    );

    const radioInput = radioContainer.querySelector('input');

    expect(radioInput!.type).toEqual('radio');
  });

  it('properly renders input value', () => {
    const { container: trueContainer } = render(
      <CustomCheckbox value={true} onChange={() => {}} />,
    );

    const trueInput = trueContainer.querySelector('input');

    expect(trueInput!.value).toBeFalsy();
    expect(trueInput!.checked).toEqual(true);

    const { container: falseContainer } = render(
      <CustomCheckbox value={false} onChange={() => {}} />,
    );

    const falseInput = falseContainer.querySelector('input');

    expect(falseInput!.value).toBeFalsy();
    expect(falseInput!.checked).toEqual(false);

    const { container: stringContainer } = render(
      <CustomCheckbox value="test value" onChange={() => {}} />,
    );

    const stringInput = stringContainer.querySelector('input');

    expect(stringInput!.value).toEqual('test value');
    expect(stringInput!.checked).toBeFalsy();
  });
});
