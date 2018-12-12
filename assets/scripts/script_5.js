var pie=new d3pie("pieChart",{
  header:{
    title:{
      text:"Sales March 2018",
      color:"#6473ce",
      fontSize:22,
      font:"verdana"
    }
  },
  size:{
    canvasHeight:500,
    canvasWidth: 600
  },
  data:{
    content:[
      {
        label:"Master Course",
        value:2807,
        color:"#6473ce"
      },
      {
        label:"Affiliates",
        value:1072,
        color:"#f4837d"
      },
      {
        label:"Ebook",
        value:972,
        color:"#1b2038"
      },
      {
        label:"Javascript",
        value:380,
        color:"green"
      },
      {
        label:"Reactjs",
        value:580,
        color:"blue"
      }
    ]
  },
  labels:{
    outer:{
      pieDistance:35
    },
    mainLabel:{
      font:"verdana",
      color:"#6473ce",
      fontSize: 13
    },
    percentage:{
      color:"#fff",
      font:"verdana",
      decimalPlaces: 0,
      fontSize: 15
    },
    // value:{
    //   color:"blue",
    //   font:"verdana",
    // },
    lines:{
      enabled:!0,
      color:"#ccc"
    }
  },
   effects:{
     pullOutSegmentOnClick:{
       effect:"linear",
       speed:400,
       size:8
     }
  }
});