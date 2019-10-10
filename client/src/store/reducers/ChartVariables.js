const InitialState ={
        offsetX: 0,
        offsetY: 0,
        height: 400,
        background: 'transparent',
    dropShadow: { enabled: false},
    animations: {
        enabled: true,
        easing: 'easeinout', // linear, easeout, easein, easeinout
        speed: 800,
        animateGradually: {
        delay: 250,
        enabled: true
        },
        dynamicAnimation: {
        enabled: true,
        speed: 350
        }
    },
    toolbar: {
        show: false,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
            autoSelected: 'zoom' // accepts -> zoom, pan, selection
        },
    legend:{
        position: 'bottom',
        horizontalAlign: 'left',
        offsetX: 40
      }, 
      theme: {
        palette: 'palette3',
        /*monochrome: { // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
            enabled: true,
            color: '#5A2A27',
            shadeTo: 'dark',
            shadeIntensity: 0.90
          }*/
      },
      fill: { opacity: 1 },
      stroke: { width: 1, colors: ['#fff'] },
      plotOptions:{
        bar: {
          horizontal: false,
          distributed: false,
          columnWidth: '80%', // should be in percent 0 - 100
          barHeight: '100%', // should be in percent 0 - 100
          colors: {
            ranges: [],
            backgroundBarColors: [],
            backgroundBarOpacity: .8
          },
          dataLabels: {
            position: 'bottom' // top, center, bottom
          }
        }
      },
      responsive: [
        {
          breakpoint: 5000,
          options: {
            chart: { 
                height:600,
            }
          }
        },{
            breakpoint: 2000,
            options: {
              chart: { 
                  height:500,
              }
            }
          },
          {
          breakpoint: 1024,
          options: {
            chart: { 
                height:300,
            }
          }
        }
      ]
  
}

const ChartLoad = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){}
		return state;
	}
export default ChartLoad;