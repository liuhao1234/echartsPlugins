(function($){
    $.extend({
        // 获取echarts实例方法
        initChartInstance:function(domId,theme){
            var dom = document.getElementById(domId);
            var myChart = echarts.getInstanceByDom(dom);
            if(myChart){
                myChart.clear();
            }else{
                myChart = echarts.init(dom,theme||"macarons");
            }
            $(window).resize(function(){
                myChart.resize();
            })
            return myChart
        },
        initLineChartBase:function(options){
            var defs = {
                id:"",
                data:{
                    category:["类目一","类目二","类目三"],
                    series:[{
                        name:"系列一",
                        data:[10,36,20]
                    },{
                        name:"系列二",
                        data:[10,30,20]
                    }]
                },
                option:{},
                customOption:{
                    areaStyle:{
                        show:false,
                        opacity:0.5
                    }
                }
            }
            
            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)
            var title = $.copyObj(defaultOptionSetting.title)
            var grid = $.copyObj(defaultOptionSetting.grid)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var axisCategory = $.copyObj(defaultOptionSetting.axisCategory)
            var axisValue = $.copyObj(defaultOptionSetting.axisValue)
            var legendName = $.getArrPropty(opts.data.series,"name")

            axisCategory.data = opts.data.category
            var seriesData = []
            $.each(opts.data.series,function(index,value){
                var series = $.copyObj(defaultOptionSetting.lineSeries)
                var areaStyle = opts.customOption.areaStyle
                if(areaStyle.show){
                    series.areaStyle.normal.opacity=areaStyle.opacity
                }
                series.name = value.name
                series.data = value.data
                seriesData.push(series)
            })
            var option = {
                title:title,
                grid:grid,
                tooltip:tooltip,
                legend:legend,
                xAxis:axisCategory,
                yAxis:axisValue,
                series:seriesData
            }
            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                legend:{
                    top:10,
                    data:legendName
                },
                xAxis:{
                    name:"aaa"
                },
                yAxis:{
                    name:""
                }
            });
            myChart.setOption(opts.option);
            return myChart;
        },
        initBarChartBase:function(options){
            var defs = {
                id:"",
                data:{
                    category:["类目一","类目二"],
                    series:[{
                        name:"系列一",
                        data:[10,36]
                    },{
                        name:"系列二",
                        data:[10,36]
                    }]
                },
                option:{}
            }
            
            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)
            var title = $.copyObj(defaultOptionSetting.title)
            var grid = $.copyObj(defaultOptionSetting.grid)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var axisCategory = $.copyObj(defaultOptionSetting.axisCategory)
            var axisValue = $.copyObj(defaultOptionSetting.axisValue)
            var legendName = $.getArrPropty(opts.data.series,"name")

            axisCategory.data = opts.data.category
            var seriesData = []
            $.each(opts.data.series,function(index,value){
                var series = $.copyObj(defaultOptionSetting.barSeries)
                series.name = value.name
                series.data = value.data
                seriesData.push(series)
            })
            var option = {
                title:title,
                grid:grid,
                tooltip:tooltip,
                legend:legend,
                xAxis:axisCategory,
                yAxis:axisValue,
                series:seriesData
            }
            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                legend:{
                    top:10,
                    data:legendName
                },
                xAxis:{
                    name:""
                },
                yAxis:{
                    name:""
                }
            });
            myChart.setOption(opts.option);
            return myChart;
        },
        initLineBarChartBase:function(options){
            var defs = {
                id:"",
                barChartIndex:[0],
                data:{
                    category:["类目一","类目二","类目三","类目四","类目五"],
                    series:[{
                        name:"系列一",
                        data:[10,36,67,98,16,85]
                    },{
                        name:"系列二",
                        data:[50,26,47,78,46,55]
                    }]
                },
                option:{}
            }
            
            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)
            var title = $.copyObj(defaultOptionSetting.title)
            var grid = $.copyObj(defaultOptionSetting.grid)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var axisCategory = $.copyObj(defaultOptionSetting.axisCategory)
            var axisValue = $.copyObj(defaultOptionSetting.axisValue)
            var legendName = $.getArrPropty(opts.data.series,"name")
            
            axisCategory.data = opts.data.category
            var seriesData = []
            $.each(opts.data.series,function(index,value){
                var series
                if(opts.barChartIndex.includes(index)){
                    series = $.copyObj(defaultOptionSetting.barSeries)
                }else{
                    series = $.copyObj(defaultOptionSetting.lineSeries)
                }
                series.name = value.name
                series.data = value.data
                seriesData.push(series)
            })
            
            var option = {
                title:title,
                grid:grid,
                tooltip:tooltip,
                legend:legend,
                xAxis:axisCategory,
                yAxis:axisValue,
                series:seriesData
            }
            
            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                legend:{
                    top:10,
                    data:legendName
                },
                xAxis:{
                    name:""
                },
                yAxis:{
                    name:"",
                    axisLabel:{
                        rotate:0
                    }
                }
            });
            myChart.setOption(opts.option);
            return myChart;
        },
        initHorizontalBarChartBase:function(options){
            var defs = {
                id:"",
                data:{
                    category:["类目一","类目二"],
                    series:[{
                        name:"系列一",
                        data:[10,36]
                    }]
                },
                option:{}
            }
            
            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)
            var title = $.copyObj(defaultOptionSetting.title)
            var grid = $.copyObj(defaultOptionSetting.grid)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var axisCategory = $.copyObj(defaultOptionSetting.axisCategory)
            var axisValue = $.copyObj(defaultOptionSetting.axisValue)
            var legendName = $.getArrPropty(opts.data.series,"name")

            axisCategory.data = opts.data.category
            var seriesData = []
            $.each(opts.data.series,function(index,value){
                var series = $.copyObj(defaultOptionSetting.barSeries)
                series.name = value.name
                series.data = value.data
                seriesData.push(series)
            })
            var option = {
                title:title,
                grid:grid,
                tooltip:tooltip,
                legend:legend,
                xAxis:axisValue,
                yAxis:axisCategory,
                series:seriesData
            }
            
            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                legend:{
                    top:10,
                    data:legendName
                },
                xAxis:{
                    name:""
                },
                yAxis:{
                    name:"",
                    axisLabel:{
                        rotate:0
                    }
                },
                series:[{
                    label:{
                        normal:{
                            position:"right"
                        }
                    }
                }]
            });
            myChart.setOption(opts.option);
            return myChart;
        },
        initPieChartBase:function(options){
            var defs = {
                id:"",
                data:[{
                    name:"系列一",
                    value:30
                },{
                    name:"系列二",
                    value:70
                }],
                option:{}
            }
            
            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)
            var title = $.copyObj(defaultOptionSetting.title)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var series = $.copyObj(defaultOptionSetting.pieSeries)
            var legendName = $.getArrPropty(opts.data,"name")
            var option = {
                title:title,
                tooltip:tooltip,
                legend:legend,
                series:series
            }

            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                tooltip:{
                    trigger:"item",
                },
                legend:{
                    top:10,
                    data:legendName
                },
                series:{
                    center:["50%","55%"],
                    radius:"70%",
                    data:opts.data
                }
            });
            myChart.setOption(opts.option);
            return myChart;
        },
        iniRadarChartBase:function(options){
            var defs = {
                id:"",
                data:{
                    indicator:[{
                        name:"指标一"
                    },{
                        name:"指标二"
                    },{
                        name:"指标三"
                    },{
                        name:"指标四"
                    },{
                        name:"指标五"
                    }],
                    series:[{
                        name:"系列一",
                        data:[10,36,67,98,16]
                    }]
                },
                option:{}
            }

            var opts = $.extend({},defs,options)
            var myChart = $.initChartInstance(opts.id)

            var title = $.copyObj(defaultOptionSetting.title)
            var tooltip = $.copyObj(defaultOptionSetting.tooltip)
            var radar = $.copyObj(defaultOptionSetting.radar)
            var legend = $.copyObj(defaultOptionSetting.legend)
            var series = $.copyObj(defaultOptionSetting.radarSeries)
            var legendName = $.getArrPropty(opts.data.series,"name")
            
            var dataTotal = []
            $.each(opts.data.series,function(index,value){
                dataTotal = dataTotal.concat(value.data)
                series.data.push({
                    name:value.name,
                    value:value.data
                })
            })
            var maxValue = Math.max.apply(null,dataTotal);
            $.each(opts.data.indicator,function(index,value){
                value.max = maxValue
            })
            radar.indicator = opts.data.indicator
            var option = {
                title:title,
                tooltip:tooltip,
                radar:radar,
                legend:legend,
                series:series
            }
            myChart.setOption(option);
            myChart.setOption({
                title:{
                    show:false
                },
                tooltip:{
                    trigger:"item",
                },
                radar:{
                    center:['50%','65%']
                },
                legend:{
                    top:10,
                    data:legendName
                },
                series:{}
            })
            myChart.setOption(opts.option);
            
            return myChart;
        },
        
        //获取对象数组某个属性的数值
        getArrPropty:function(arr,propty){
            var result = []
            $.each(arr,function(index,value){
                result.push(value[propty])
            })
            return result
        },
        //f复制json对象
        copyObj:function(obj){
            return JSON.parse(JSON.stringify(obj))
        }
    })
    var defaultOptionSetting = {
        //标题默认配置
        title:{
            show:true,
            left:"center",
            top:"auto",
            right:"auto",
            bottom:"auto",
            text:"默认标题",
            textStyle:{
                color:"#333",
                fontSize:18,
                fontWeight:"normal"
            },
            subtext:"默认副标题",
            subtextStyle:{
                color:"#aaa",
                fontSize:14,
                fontWeight:"normal"
            }
        },
        //图例默认配置
        legend:{
            show:true,
            left:"center",
            top:"auto",
            right:"auto",
            bottom:"auto",
            itemGap:10,
            scrollDataIndex:0,
            pageButtonItemGap:5,
            pageButtonGap:0,
            pageButtonPosition:'end',
            pageFormatter:'{current}/{total}',
            pageIconColor: '#2f4554' ,
            pageIconInactiveColor: '#aaa' ,
            pageIconSize: 15 ,
            pageTextStyle:{}
        },
        //直角坐标系默认配置
        grid:{
            show:false,
            left:10,
            top:60,
            right:10,
            bottom:10,
            containLabel:true
        },
        //类目轴默认配置
        axisCategory:{
            type:"category",
            show:true,
            position:"bottom",
            name:"名称",
            nameLocation:"end",
            nameTextStyle:{
                fontSize:12,
                fontWeight:"normal",
                align:"left",
                verticalAlign:"top",
                padding:0
            },
            nameGap:15,
            nameRotate:0,
            inverse:false,
            boundaryGap:true,
            axisLine:{
                show:true,
                onZero:true,
                onZeroAxisIndex:0,
                symbol:"none",
                symbolSize:[10,15],
                symbolOffset:[0,0],
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:1
                }
            },
            axisTick:{
                show:true,
                alignWithLabel:false,
                inside:false,
                length:5,
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:1
                }
            },
            axisLabel:{
                show:true,
                fontWeight:"normal",
                fontSize:12,
                interval:0,
                rotate:20,
                margin:8,
                formatter:"{value}"
            },
            splitLine:{
                show:false,
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:0
                }
            },
            splitArea:{
                show:false,
                interval:"auto",
                areaStyle:{
                    color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                    opacity:1
                }
            },
            data:[]
        },
        //数值轴默认配置
        axisValue:{
            type:"value",
            show:true,
            position:"left",
            name:"名称",
            nameLocation:"end",
            nameTextStyle:{
                fontSize:12,
                fontWeight:"normal",
                align:"left",
                verticalAlign:"top",
                padding:0
            },
            nameGap:15,
            nameRotate:0,
            inverse:false,
            boundaryGap:true,
            axisLine:{
                show:true,
                onZero:true,
                onZeroAxisIndex:0,
                symbol:"none",
                symbolSize:[10,15],
                symbolOffset:[0,0],
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:1
                }
            },
            axisTick:{
                show:true,
                alignWithLabel:true,
                interval:"auto",
                inside:false,
                length:5,
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:1
                }
            },
            axisLabel:{
                show:true,
                fontWeight:"normal",
                fontSize:12,
                interval:"auto",
                rotate:0,
                margin:8,
                formatter:"{value}"
            },
            splitLine:{
                show:true,
                interval:"auto",
                lineStyle:{
                    width:1,
                    type:"solid",
                    opacity:0
                }
            },
            splitArea:{
                normal:{
                    show:false,
                    interval:"auto",
                    areaStyle:{
                        color:['rgba(250,250,250,0.3)','rgba(200,200,200,0.3)'],
                        opacity:1
                    }
                }
            },
            data:[]
        },
        //提示框组件默认配置
        tooltip:{
            show:true,
            trigger:"axis",
            axisPointer:{
                type:'none'
            },
            showContent:true,
            alwaysShowContent:false,
            enterable:false,
            confine:true,
        },
        //雷达图基本配置
        radar: {
            radius: '75%',
            center: ['50%', '50%'],
            nameGap:5,
            name:{
                show:true,
                formatter:'{value}'
            },
            axisLine: {},
            axisTick: {},
            axisLabel: {},
            splitLine: {},
            splitArea: {},
            indicator: []
        },
        //折线图默认配置
        lineSeries:{
            type:"line",
            name:"",
            xAxisIndex:0,
            yAxisIndex:0,
            showSymbol:true,
            symbol:"emptyCircle",
            symbolSize:4,
            symbolRotate:0,
            label:{
                normal:{
                    show:true,
                    position:"top",
                    distance:5,
                    rotate:0,
                    offset:[0,0],
                    fontSize:12,
                    fontWeight:"normal"
                }
            },
            areaStyle:{
                normal:{
                    opacity:0
                }
            },
            data:[]
        },
        //柱形图默认配置
        barSeries:{
            type:"bar",
            name:"",
            stack:"",
            xAxisIndex:0,
            yAxisIndex:0,
            barWidth:14,
            showSymbol:true,
            symbol:"emptyCircle",
            symbolSize:4,
            symbolRotate:0,
            label:{
                normal:{
                    show:true,
                    position:"top",
                    distance:5,
                    rotate:0,
                    offset:[0,0],
                    fontSize:12,
                    fontWeight:"normal"
                }
            },
            data:[]
        },
        //饼图默认配置
        pieSeries:{
            type:"pie",
            name:"",
            clockwise:true,
            startAngle:90,
            minAngle:0,
            minShowLabelAngle:0,
            roseType:false,
            avoidLabelOverlap:true,
            stillShowZeroSum:true,
            center:['50%','50%'],
            radius:[0,"75%"],
            label:{
                normal:{
                    show:true,
                    position:"outside"
                }
            },
            labelLine:{
                normal:{
                    show:true,
                    length:5,
                    length:8,
                    smooth:false,
                    lineStyle:{
                        width:1,
                        type:"solid"
                    }
                }
            },
            data:[]
        },
        //雷达图默认配置
        radarSeries:{
            type: 'radar',
            symbolSize: 8,
            itemStyle: {
                borderWidth: 2,
            },
            areaStyle: {
                normal: {
                    width: 1,
                    opacity: 0.3,
                },
            },
            data: []
        }
    }
})(jQuery)