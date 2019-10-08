import ReactGA from 'react-ga';

export function STORE_Device(m){
    ReactGA.event({ category:"Device", action:m, label:m });
}
export function GA(c,a,l){
    ReactGA.event({
        category:c,
        action:a,
        label:l
      });
}


export function PageView(p){  ReactGA.pageview(p); }

export function BasicTracking(t,p,pv){
    ReactGA.event({ category:"Player Viewed", action:p, label:t });
    ReactGA.event({ category:"Team Viewed", action:t, label:p });
    ReactGA.event({ category:"Page Viewed (Player)", action:pv, label:p });
    ReactGA.event({ category:"Page Viewed (Team)", action:pv, label:t });
}

export function GA_Form_Select_Year (y){
    ReactGA.event({ category:'Form Select', action:"Select a Year", label:y });
}

// Chart Events
export function ChartMouseEnter(c,a,l){
    ReactGA.event({ category:c, action:a, label:l });
}