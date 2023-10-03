import React, { ReactElement } from 'react';
import Header from "../Header/Header";
import { Outlet } from "react-router";
import CenteredContent from "../CenteredContent/CenteredContent";
import { useBreakpoints } from "../../../utils/hooks/useBreapoints";
import Footer from "../Footer/Footer";

export default function PageLayout(): ReactElement {
  const breakpoints = useBreakpoints()

  return (
    <>
      <Header/>

      <CenteredContent
        wrapperStyles={{
          minHeight: `calc(100vh - ${breakpoints.up('md') ? '112' : '80'}px)`,
          background: '#fbfbfb',
        }}
        inlinePadding={breakpoints.up('md') ? 30 : 20}
      >
        <Outlet/>
      </CenteredContent>

      <Footer/>
    </>
  );
}
