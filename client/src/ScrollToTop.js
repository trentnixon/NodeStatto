import React,  { Component } from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/*
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}



*/
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);