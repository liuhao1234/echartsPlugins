$(function(){
    $.initLineChartBase({
        id:"chart01"
    })

    $.initLineChartBase({
        id:"chart02",
        customOption:{
            areaStyle:{
                show:true,
                opacity:0.3
            }
        }
    })

    $.initBarChartBase({
        id:"chart03"
    })

    $.initLineBarChartBase({
        id:"chart04"
    })

    $.initHorizontalBarChartBase({
        id:"chart05"
    })

    $.initPieChartBase({
        id:"chart06"
    })

    $.initPieChartBase({
        id:"chart07",
        option:{
            series:{
                radius:["50%","70%"]
            }
        }
    })

    $.iniRadarChartBase({
        id:"chart08"
    })
})