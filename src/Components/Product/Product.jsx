import React from "react";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const data = {
  labels: [],

  datasets: [
    {
      label: "",
      data: [71, 29],
      backgroundColor: [" #2B3651", "#D5D7DC"],
      borderWidth: 0,
      cutout: "80%",
    },
  ],
};

const options = {
  plugins: {
  
      color: "white",
      labels: {
        title: {
          font: {
            size: "10",
            family: "Plus Jakarta Sans",
          },
        },
      },
    },
  }
;
const textcenter = {
  id: "doughnutlabel",
  beforeDraw(chart) {
       const { ctx,data } = chart;
       const xCoor=chart.getDatasetMeta(0).data[0].x
       const yCoor=chart.getDatasetMeta(0).data[0].y

  
     ctx.save();
  
     ctx.font = "bolder 30px Plus Jakarta Sans";
     ctx.fillStyle = "#141522"
     ctx.textAlign = "center";
     ctx.textBaseline = "middle";
     ctx.fillText(data.datasets[0].data[0],xCoor,yCoor-5);
     //total

     ctx.font = "10px Plus Jakarta Sans";
     ctx.fillStyle = " #9C9CA4"
     ctx.fillText('Total' ,xCoor,yCoor+20);
  }, };


function Product() {
  const colorData = [
    {
      names: "Sold - 71%",
      colors: "#2B3651",
    },
    {
      names: "Stand By - 29%",
      colors: " #D5D7DC",
    }

  ]
  return (
    <div className="Product">
      <div className="title">
        <h1>Product Status</h1>
      </div>
      <div className="content_stats">
        <Doughnut
          className="doughnut"
          data={data}
          options={options}
          
        plugins={[textcenter]}
        />

        <div className="colors">
          {colorData.map((el, index) => (
            <div className="color_line" key={index}>
              <div
                className="color__fill"
                style={{ backgroundColor: `${el.colors}` }}
              ></div>
              <div className="color__name">{el.names}</div>
            </div>



          ))}


        </div >
      </div>
    </div>
    )
}




export default Product;
