import React, { ChangeEvent, ReactElement } from 'react';
import styles from './CustomCheckbox.module.scss';
import classNames from 'classnames';

interface IProps {
  label?: string;
  name?: string;
  value?: boolean | string;
  onChange?: (e: ChangeEvent) => void;
  radio?: boolean;
}

export default function CustomCheckbox({
  label,
  name,
  value,
  onChange,
  radio,
}: IProps): ReactElement {
  return (
    <label className={styles.customCheckbox}>
      <input
        type={radio ? 'radio' : 'checkbox'}
        name={name}
        className={styles.checkboxInput}
        checked={typeof value === 'string' ? undefined : value}
        value={typeof value === 'string' ? value : undefined}
        onChange={onChange}
      />
      <span className={styles.checkmark}>
        <i className={classNames('icon-check', styles.customIcon)} />
      </span>
      {label}
    </label>
  );
}
