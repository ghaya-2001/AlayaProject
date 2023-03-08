import React from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

const data = {
  labels: [],

  datasets: [
    {
      label: "",
      data: [22, 18, 11, 29, 11],
      backgroundColor: [
        "#222B41",
        "#555E74",
        "#808697",
        "#AAAFB9",
        "#D5D7DC",
        "#F5F5F7",
      ],
      borderWidth: 0,
    },
  ],
};
const options = {
  plugins: {
    datalabels: {
      formatter: (value = "22,18,11,29,11,") => {
        let percentage = value + "%";
        return percentage;
      },
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
  },
};

function Categories() {
  const colorsData = [
    {
      name: "Necklace",
      color: "#222b41",
    },
    {
      name: "Bracelet",
      color: "#555e74",
    },
    {
      name: "Earrings",
      color: "#808697",
    },
    {
      name: "Solitaire ring",
      color: "#aaafb9",
    },
    {
      name: "Normal ring",
      color: "#d5d7d7",
    },
    {
      name: "Others",
      color: "#f5f5f7",
    },
  ];
  return (
    <div className="categories">
      <div className="title">
        <h1>Product Categories</h1>
      </div>
      <div className="content_stats">
        <div className="doughnut">
          <Doughnut data={data} plugins={[ChartDataLabels]} options={options} />
        </div>
        <div className="colors">
          {colorsData.map((el, index) => (
            <div className="color_line" key={index}>
              <div
                className="color__fill"
                style={{ backgroundColor: `${el.color}` }}
              ></div>
              <div className="color__name">{el.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
