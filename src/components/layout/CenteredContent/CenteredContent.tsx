import React, { CSSProperties, ReactElement } from 'react';
import classes from './CenteredContent.module.scss';
import { WithChildren } from '../../../typescript/common';

interface IProps extends WithChildren {
  maxContentWidth?: string | number;
  inlinePadding?: number;
  wrapperStyles?: CSSProperties;
}

export default function CenteredContent({
  children,
  maxContentWidth = 1240,
  inlinePadding,
  wrapperStyles,
}: IProps): ReactElement {
  console.log(wrapperStyles);
  return (
    <div
      className={classes.content_wrapper}
      style={{
        ...wrapperStyles,
      }}
    >
      <div
        className={classes.content}
        style={{
          maxWidth: maxContentWidth,
          marginInline: inlinePadding,
        }}
      >
        {children}
      </div>
    </div>
  );
}
