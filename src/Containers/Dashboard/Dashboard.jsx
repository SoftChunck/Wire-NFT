import React from 'react';
import { useState } from 'react';
import { All_Participates, Joining, Total_Earning,All_Income,Earned_Wire,Earned_USD,Id_Number,Profit} from '../../Components';
import './Dashboard.css'
const Dashboard = () => {
    let [joining,setjoining] = new useState({        
        series: [{
            name: "STOCK ABC",
            data: [[1, 34], [3, 54], [5, 23] , [15, 43]]
          }],
        options : {          
        chart: {
          toolbar: {
            show: false,
              },
          offsetX: 0,
          zoom: {
            enabled: false,
               },
          },
            dataLabels: {
                enabled: false
              },
              stroke: {
                curve: 'straight',
                colors: ['#FFFFFF']
              },
              fill: {
                colors: ['#ffffff'],
                opacity: 1,
                type: 'gradient',
                gradient: {
                    shadeIntensity: 0.5,
                    opacityFrom: 0.8,
                    opacityTo: 0,
                }                
              },
              grid: {
                show: false,
                borderColor: '#90A4AE',
                strokeDashArray: 0,
                position: 'back',
                xaxis: {
                    lines: {
                        show: false
                    }
                },
                padding: {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                },  
              },
              xaxis: {
                type: 'category',
                categories: [],
                labels: {
                  show: false,
                },
                axisBorder: {
                  show: false,
                },
                axisTicks: {
                  show: false,
                }
              },
              yaxis: {
                type: 'category',
                categories: [],
                labels: {
                  show: false,
                },
              }              
        },      
    });
    let [earning,setearning] = new useState({
        series: [70],  
        options:{          
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 225,
              hollow: {
                margin: 0,
                size: "70%",
                colors: "#293450"                
              },
              track: {
                show: true,
                startAngle: undefined,
                endAngle: undefined,
                background: '#000',
                strokeWidth: '97%',
                opacity: 0.1,
                margin: 5,                
            },                        
              dataLabels: {
                name: {
                  offsetY: 0,
                  color: "#fff",
                  fontSize: "1.5rem"
                },
                value: {
                  show: false
                }
              }
            }
          },
          fill: {
            type: "solid",
          },
          colors:['#ffffff'],
          stroke: {            
            dashArray: 4, 
          },          
        labels:['12345$'] ,
        },      
    });
    let [earned_wire,setearned_wire] = new useState({        
      series: [{
          name: "STOCK ABC",
          data: [[1, 34], [3, 54], [5, 23] , [15, 43]]
        }],
      options : {          
      chart: {
        toolbar: {
          show: false,
            },
        offsetX: 0,
        zoom: {
          enabled: false,
             },
        },
          dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              colors: ['#FFFFFF']
            },
            fill: {
              colors: ['#ffffff'],
              opacity: 1,
              type: 'gradient',
              gradient: {
                  shadeIntensity: 0.5,
                  opacityFrom: 0,
                  opacityTo: 0,
              }                
            },
            grid: {
              show: false,
              borderColor: '#90A4AE',
              strokeDashArray: 0,
              position: 'back',
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },  
            },
            xaxis: {
              type: 'category',
              categories: [],
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              }
            },
            yaxis: {
              type: 'category',
              categories: [],
              labels: {
                show: false,
              },
            }              
      },      
    });
    let [id_number,setid_number] = new useState({        
      series: [{
        data: [{
          x: 'category A',
          y: 10
        }, {
          x: 'category B',
          y: 18
        }, {
          x: 'category C',
          y: 13
        },
        {
          x: 'category D',
          y: 10
        }, {
          x: 'category E',
          y: 18
        }, {
          x: 'category F',
          y: 13
        },
        {
          x: 'category G',
          y: 10
        }, {
          x: 'category H',
          y: 18
        }, {
          x: 'category I',
          y: 13
        }]
      }],
      options : {          
      chart: {
        toolbar: {
          show: false,
            },
        offsetX: 0,
        zoom: {
          enabled: false,
            },
        },
          dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              colors: ['#FFFFFF']
            },
            fill: {
              colors: ['#ffffff'],
              opacity: 1,
              type: 'solid',
              gradient: {
                  shadeIntensity: 0.5,
                  opacityFrom: 0,
                  opacityTo: 0,
              }                
            },
            grid: {
              show: false,
              borderColor: '#90A4AE',
              strokeDashArray: 0,
              position: 'back',
              xaxis: {
                  lines: {
                      show: false
                  }
              },
              padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
              },  
            },
            xaxis: {
              type: 'category',
              categories: [],
              labels: {
                show: false,
              },
              axisBorder: {
                show: false,
              },
              axisTicks: {
                show: false,
              }
            },
            yaxis: {
              type: 'category',
              categories: [],
              labels: {
                show: false,
              },
            },
            plotOptions: {
              bar: {
                  horizontal: false,
                  s̶t̶a̶r̶t̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                  e̶n̶d̶i̶n̶g̶S̶h̶a̶p̶e̶: 'flat',
                  borderRadius: 0,
                  columnWidth: 7,
                  barHeight: '70%',
                  
              }
          }             
      },      
    });
    let [profit,setprofit] = new useState({
      options:{          
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              colors: "#293450"                
            },
            track: {
              show: true,
              startAngle: undefined,
              endAngle: undefined,
              background: '#000',
              strokeWidth: '97%',
              opacity: 0.1,
              margin: 5,                
          },                        
            dataLabels: {
              name: {
                show: false
              },
              value: {
                offsetY: 10,
                color: "#fff",
                fontSize: "2.5rem"
              }              
            }
          }
        },
        fill: {
          type: "solid",
        },
        colors: ['#2cd719'],
        stroke: {   
          curve: 'smooth',
          lineCap: "round",
        },          
      labels:['300%'] ,
      },      
    });

    return ( 
        <div className='Dashboard row m-0 justify-content-center pt-5 '>
            <div className=' row col-11 justify-content-center align-items-start gap-3'>
                <div className='col-lg-3 row m-0 p-0 gap-3'>                  
                  <div className=''>
                    <All_Participates data={{participates_count:'652.9',active_participates_count:'500'}} />
                  </div>
                  <div className=''>
                    <Joining data={{joined:8256}} opt={joining}/>
                  </div>
                </div>
                <Total_Earning data={{netbalance:'563',withdrawal:'985'}} opt={earning}/>
                <div className='col-lg-5 row m-0 gy-3 p-0'> 
                      <Id_Number data={{id:8256}} opt={id_number} />
                      <Earned_Wire data={{joined:8256}} opt={earned_wire}/>
                  <Earned_USD data={{earned_usd:'500',total_usd:'652.9'}} />
                </div>
                <div className='col-lg-6 mb-5 mt-4'>
                  <All_Income data={{referral_income:'123',total_referral_income:'23',matching_income:'123',total_matching_income:'100',matching_level_income:'123',total_matching_level_income:'30',rio_income:'123',total_rio_income:'90',reward_income:'123',total_reward_income:'73'}} />
                </div>
                <div className='col-lg-5 mb-5 mt-4'>
                  <Profit data={{earned:'14200.25',earned_outof:'150000'}} opt={profit}  />
                </div>                
            </div>            
        </div>
     );
}
 
export default Dashboard;