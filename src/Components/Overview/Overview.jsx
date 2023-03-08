import React from "react";
import { Profile2User } from "iconsax-react";
import { DocumentCopy } from "iconsax-react";
import { Note } from "iconsax-react";
import { Shop } from "iconsax-react";

function Overview() {
  const overviewData = [
    {
      name: "Users",
      total: 9,
      icon: <Profile2User size="15" color="#FFF" />,
    },
    {
      name: "Vendors",
      total: 15,
      icon: <Shop size="15" color="#FFF" />,
    },
    {
      name: "Categories",
      total: 7,
      icon: <DocumentCopy size="15" color="#FFF" />,
    },
    {
      name: "Products",
      total: 187,
      icon: <Note size="15" color="#FFF" />,
    },
  ];
  return (
    <div className="overview">
      <div className="title">
        <h1>Overview</h1>
      </div>
      <div className="box">
        {overviewData.map((el, index) => (
          <div className="user" key={index}>
            <div className="left_block">
              <div className="icon_overview">{el.icon}</div>
              <span>{el.name}</span>
            </div>
            <div className="right_block">
              <span>{el.total}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
