import { RouteObject } from 'react-router-dom';
import React from 'react';
import PageLayout from '../../components/layout/PageLayout/PageLayout';
import Contact from '../../pages/public/Contact/Contact';

export const defaultPublicPath = '/contact';

export const publicRoutes: RouteObject[] = [
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <Contact />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
];
