var options = {
   annotations: {
     position: 'front',
     yaxis: [{
       y: 0,
       strokeDashArray: 4,
       borderColor: '#c2c2c2',
       offsetX: 0,
       offsetY: 0,
       yAxisIndex: 0,
       label: {
         borderColor: '#c2c2c2',
         borderWidth: 1,
         text: undefined, // String
         textAnchor: 'end',
         position: 'right',
         offsetX: 0,
         offsetY: -3,
         style: {
           background: '#fff',
           color: '#777',
           fontSize: '12px',
           cssClass: 'apexcharts-yaxis-annotation-label',
           padding: {
             left: 5,
             right: 5,
             top: 0,
             bottom: 2
           }
         }
       }
     }],
     xaxis: [{
       x: 0,
       strokeDashArray: 4,
       borderColor: '#c2c2c2',
       offsetX: 0,
       offsetY: 0,
       label: {
         borderColor: '#c2c2c2',
         borderWidth: 1,
         text: undefined, // String
         textAnchor: 'middle',
         orientation: 'vertical',
         position: 'top',
         offsetX: 0,
         offsetY: 0,
         style: {
           background: '#fff',
           color: '#777',
           fontSize: '12px',
           cssClass: 'apexcharts-xaxis-annotation-label',
           padding: {
             left: 5,
             right: 5,
             top: 2,
             bottom: 2
           }
         }
       }
     }],
     points: [{
       x: 0,
       y: null,
       yAxisIndex: 0,
       seriesIndex: 0,
       marker: {
         size: 0,
         fillColor: '#fff',
         strokeWidth: 2,
         strokeColor: '#333',
         shape: 'circle', 
         radius: 2
       },
       label: {
         borderColor: '#c2c2c2',
         borderWidth: 1,
         text: undefined, // String
         textAnchor: 'middle',
         offsetX: 0,
         offsetY: -15,
         style: {
           background: '#fff',
           color: '#777',
           fontSize: '12px',
           cssClass: 'apexcharts-point-annotation-label',
           padding: {
             left: 5,
             right: 5,
             top: 0,
             bottom: 2
           }
         }
       }
     }]
   },
   chart: {
     animations: {
       enabled: true,
       easing: 'easeinout', // linear, easeout, easein, easeinout
       speed: 800,
       animateGradually: {
         delay: 150,
         enabled: true
       },
       dynamicAnimation: {
         enabled: true,
         speed: 350
       }
     },
     background: 'transparent',
     foreColor: '#373d3f',
     dropShadow: {
       enabled: false,
       enabledSeries: undefined, // Array of Numbers
       top: 2,
       left: 2,
       blur: 4,
       opacity: 0.35
     },
     events: {
       beforeMount: undefined, // Function
       mounted: undefined, // Function
       updated: undefined, // Function
       clicked: undefined, // Function
       selection: undefined, // Function
       dataPointSelection: undefined, // Function
       zoomed: undefined, // Function
       scrolled: undefined // Function
     },
     height: 'auto',
     offsetX: 0,
     offsetY: 0,
     scroller: {
       enabled: false,
       height: 30,
       track: {
         height: 2,
         background: '#e0e0e0'
       },
       thumb: {
         height: 2,
         background: '#008FFB'
       },
       scrollButtons: {
         enabled: true,
         size: 6,
         borderWidth: 2,
         borderColor: '#c3c3c3',
         fillColor: '#fff'
       },
       padding: {
         left: 10,
         right: 10
       },
       offsetX: 0,
       offsetY: 0
     },
     selection: {
       enabled: true,
       type: 'x',
       selectedPoints: undefined, // Array
       fill: {
         color: '#24292e',
         opacity: 0.1
       },
       stroke: {
         width: 1,
         color: '#24292e',
         opacity: 0.4,
         dashArray: 3
       },
       xaxis: {
         min: undefined, // Number
         max: undefined // Number
       },
       yaxis: {
         min: undefined, // Number
         max: undefined // Number
       }
     },
     sparkline: {
       enabled: false
     },
     stacked: false,
     stackType: 'normal',
     toolbar: {
       show: true,
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
     type: 'line',
     width: '100%',
     zoom: {
       enabled: true,
       type: 'x',
       zoomedArea: {
         fill: {
           color: '#90CAF9',
           opacity: 0.4
         },
         stroke: {
           color: '#0D47A1',
           opacity: 0.4,
           width: 1
         }
       }
     }
   },
   plotOptions: {
     bar: {
       horizontal: false,
       endingShape: 'flat',
       columnWidth: '70%', // should be in percent 0 - 100
       barHeight: '70%', // should be in percent 0 - 100
       distributed: false,
       colors: {
         ranges: [],
         backgroundBarColors: [],
         backgroundBarOpacity: 1
       },
       dataLabels: {
         position: 'top' // top, center, bottom
       }
       // stackedLabels: true // TODO
     },
     heatmap: {
       radius: 2,
       enableShades: true,
       shadeIntensity: 0.5,
       colorScale: {
         ranges: []
       }
     },
     radialBar: {
       size: undefined,  // Number
       inverseOrder: false,
       startAngle: 0,
       endAngle: 360,
       offsetX: 0,
       offsetY: 0,
       hollow: {
         margin: 5,
         size: '50%',
         background: 'transparent',
         image: undefined,  // String
         imageWidth: 150,
         imageHeight: 150,
         imageOffsetX: 0,
         imageOffsetY: 0,
         imageClipped: true,
         position: 'front',
         dropShadow: {
           enabled: false,
           top: 0,
           left: 0,
           blur: 3,
           opacity: 0.5
         }
       },
       track: {
         show: true,
         startAngle: undefined,  // Number
         endAngle: undefined, // Number
         background: '#f2f2f2',
         strokeWidth: '97%',
         opacity: 1,
         margin: 5, // margin is in pixels
         dropShadow: {
           enabled: false,
           top: 0,
           left: 0,
           blur: 3,
           opacity: 0.5
         }
       },
       dataLabels: {
         showOn: 'always', // hover/always
         name: {
           show: true,
           fontSize: '22px',
           color: undefined,  // String
           offsetY: -10
         },
         value: {
           show: true,
           fontSize: '16px',
           color: undefined, // String
           offsetY: 16,
           formatter: function (val) {
             return val + '%'
           }
         }
       }
     },
     pie: {
       size: undefined,  // Number
       donut: {
         size: '65%',
         background: 'transparent'
       },
       customScale: 0,
       offsetX: 0,
       offsetY: 0,
       dataLabels: {
         offset: 0 // offset by which labels will move outside
       }
     }
   },
   colors: undefined,  // Array of String Colors
   dataLabels: {
     enabled: true,
     formatter: function (val) {
       return val
     },
     textAnchor: 'middle',
     offsetX: 0,
     offsetY: 0,
     style: {
       fontSize: '14px',
       colors: undefined // Array of String Colors
     },
     dropShadow: {
       enabled: false,
       top: 1,
       left: 1,
       blur: 1,
       opacity: 0.45
     }
   },
   fill: {
     type: 'solid',
     colors: undefined, // Array of String Colors,
     opacity: 0.9,
     gradient: {
       shade: 'dark',
       type: 'horizontal',
       shadeIntensity: 0.5,
       gradientToColors: undefined, // Array of String Colors
       inverseColors: true,
       opacityFrom: 1,
       opacityTo: 1,
       stops: [0, 50, 100]
     },
     image: {
       src: [],
       width: undefined, // Number - optional
       height: undefined // Number -optional
     },
     pattern: {
       style: 'sqaures', // string or array of strings
       width: 6,
       height: 6,
       strokeWidth: 2
     }
   },
   grid: {
     show: true,
     borderColor: '#e0e0e0',
     strokeDashArray: 0,
     position: 'back',
     xaxis: {
       lines: {
         show: false,
         animate: false
       }
     },
     yaxis: {
       lines: {
         show: true,
         animate: true
       }
     },
     row: {
       colors: undefined, // Array - takes as array which will be repeated on rows
       opacity: 0.5
     },
     column: {
       colors: undefined, // Array - takes an array which will be repeated on columns
       opacity: 0.5
     },
     padding: {
       top: 0,
       right: 10,
       bottom: 0,
       left: 10
     }
   },
   labels: [],
   legend: {
     show: true,
     floating: false,
     position: 'bottom', // whether to position legends in 1 of 4
     // direction - top, bottom, left, right
     horizontalAlign: 'center', // when position top/bottom, you can
     // specify whether to align legends
     // left, right or center
     verticalAlign: 'middle',
     fontSize: '14px',
     textAnchor: 'start',
     offsetY: 0,
     offsetX: 0,
     formatter: undefined, // Function
     labels: {
       color: undefined, // String
       useSeriesColors: false 
     },
     markers: {
       size: 6,
       strokeWidth: 0,
       strokeColor: '#fff',
       offsetX: 0,
       offsetY: 0,
       shape: 'circle',
       radius: 2
     },
     itemMargin: {
       horizontal: 20,
       vertical: 5
     },
     containerMargin: {
       left: 5,
       top: 4,
       right: 0,
       bottom: 0
     },
     onItemClick: {
       toggleDataSeries: true
     },
     onItemHover: {
       highlightDataSeries: true
     }
   },
   markers: {
     discrete: [],
     size: 0,
     colors: undefined, // Array or string
     strokeColor: '#fff',
     strokeWidth: 2,
     strokeOpacity: 0.9,
     fillOpacity: 1,
     shape: 'circle',
     radius: 2,
     offsetX: 0,
     offsetY: 0,
     hover: {
       size: 6
     }
   },
   noData: {
     text: undefined, // String
     align: 'center',
     verticalAlign: 'middle',
     offsetX: 0,
     offsetY: 0,
     style: {
       color: '#888',
       fontSize: '16px'
     }
   },
   responsive: [], // breakpoints should follow ascending order 400, then 700, then 1000
   series: undefined, // Array of objects,
   states: {
     normal: {
       filter: {
         type: 'none',
         value: 0
       }
     },
     hover: {
       filter: {
         type: 'lighten',
         value: 0.15
       }
     },
     active: {
       allowMultipleDataPointsSelection: false,
       filter: {
         type: 'darken',
         value: 0.35
       }
     }
   },
   title: {
     text: undefined, // String,
     align: 'left',
     margin: 10,
     offsetX: 0,
     offsetY: 0,
     floating: false,
     style: {
       fontSize: '16px',
       color: '#263238'
     }
   },
   subtitle: {
     text: undefined, // String,
     align: 'left',
     margin: 10,
     offsetX: 0,
     offsetY: 0,
     floating: false,
     style: {
       fontSize: '14px',
       color: '#9699a2'
     }
   },
   stroke: {
     show: true,
     curve: 'smooth', // "smooth" or "straight"
     lineCap: 'butt', // round, butt , square
     width: 2,
     colors: undefined, // Array of colors
     dashArray: 0 // single value or array of values
   },
   tooltip: {
     enabled: true,
     shared: true,
     followCursor: false, // when disabled, the tooltip will show on top of the series instead of mouse position
     intersect: false, // when enabled, tooltip will only show when user directly hovers over point
     inverseOrder: false,
     custom: undefined, // Function
     fillSeriesColor: false,
     onDatasetHover: {
       highlightDataSeries: false
     },
     theme: 'light',
     x: { // x value
       show: true,
       format: 'dd MMM', // dd/MM, dd MMM yy, dd MMM yyyy
       formatter: undefined // Function - a custom user supplied formatter function
     },
     y: {
       formatter: undefined, // Function
       title: {
         formatter: function (seriesName) {
           return seriesName
         }
       }
     },
     z: {
       formatter: undefined, // Function
       title: 'Size: '
     },
     marker: {
       show: true
     },
     items: {
       display: 'flex'
     },
     fixed: {
       enabled: false,
       position: 'topRight', // topRight, topLeft, bottomRight, bottomLeft
       offsetX: -100,
       offsetY: 0
     }
   },
   xaxis: {
     type: 'category',
     categories: [],
     labels: {
       show: true,
       rotate: -45,
       rotateAlways: false,
       trim: true,
       maxHeight: 120,
       style: {
         colors: [],
         fontSize: '12px',
         cssClass: 'apexcharts-xaxis-label'
       },
       offsetX: 0,
       offsetY: 0,
       format: undefined, // String
       formatter: undefined, // Function - custom formatter function which will override format
       datetimeFormatter: {
         year: 'yyyy',
         month: 'MMM \'yy',
         day: 'dd MMM',
         hour: 'HH:mm'
       }
     },
     axisBorder: {
       show: true,
       color: '#78909C',
       offsetX: 0,
       offsetY: 0,
       strokeWidth: 1 // TODO: add in the website docs
     },
     axisTicks: {
       show: true,
       color: '#78909C',
       height: 6,
       offsetX: 0,
       offsetY: 0
     },
     tickAmount: undefined, // Number,
     min: undefined, // Number
     max: undefined, // Number
     range: undefined, // Number
     floating: false,
     position: 'bottom',
     title: {
       text: undefined, // String
       offsetX: 0,
       offsetY: 0,
       style: {
         color: undefined, // String
         fontSize: '12px',
         cssClass: 'apexcharts-xaxis-title'
       }
     },
     crosshairs: {
       show: true,
       width: 1, // tickWidth/barWidth or an integer
       position: 'back',
       opacity: 0.9,
       stroke: {
         color: '#b6b6b6',
         width: 0,
         dashArray: 0
       },
       fill: {
         type: 'solid', // solid, gradient
         color: '#B1B9C4',
         gradient: {
           colorFrom: '#D8E3F0',
           colorTo: '#BED1E6',
           stops: [0, 100],
           opacityFrom: 0.4,
           opacityTo: 0.5
         }
       },
       dropShadow: {
         enabled: false,
         left: 0,
         top: 0,
         blur: 1,
         opacity: 0.4
       }
     },
     tooltip: {
       enabled: true,
       offsetY: 0
     }
   },
   yaxis: {
     opposite: false,
     tickAmount: 6,
     max: undefined, // Number
     min: undefined, // Number
     decimalsInFloat: 2,
     floating: false,
     labels: {
       show: true,
       maxWidth: 160,
       offsetX: 0,
       offsetY: 0,
       style: {
         colors: [],
         fontSize: '12px',
         cssClass: 'apexcharts-yaxis-label'
       },
       formatter: undefined // Function
     },
     axisBorder: {
       show: false,
       color: '#78909C',
       offsetX: 0,
       offsetY: 0
     },
     axisTicks: {
       show: false,
       color: '#78909C',
       width: 6,
       offsetX: 0,
       offsetY: 0
     },
     title: {
       text: undefined, // String
       rotate: -90,
       offsetY: 0,
       offsetX: 0,
       style: {
         color: undefined, // String
         fontSize: '12px',
         cssClass: 'apexcharts-yaxis-title'
       }
     },
     tooltip: {
       enabled: false,
       offsetX: 0
     },
     crosshairs: {
       show: true,
       position: 'front',
       stroke: {
         color: '#b6b6b6',
         width: 1,
         dashArray: 0
       }
     }
   },
   theme: {
     palette: 'palette9', // If defined, it will overwrite globals.colors variable
     monochrome: { // monochrome allows you to select just 1 color and fill out the rest with light/dark shade (intensity can be selected)
       enabled: true,
       color: '#008FFB',
       shadeTo: 'light',
       shadeIntensity: 0.65
     }
   }
}