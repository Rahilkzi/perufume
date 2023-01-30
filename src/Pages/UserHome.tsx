// import React, { useState } from "react";
import { Image, AutoCenter, Divider, Space, Grid } from "antd-mobile";
import styles from "./demo1.less";
import { useWindowSize } from "usehooks-ts";

const demoSrc = "https://i.ibb.co/RzQ79qB/download-1.webp";

const categories = [
  {
    name: "Category 1",
    image: demoSrc
  },
  {
    name: "Category 2",
    image: demoSrc
  },
  {
    name: "Category 3",
    image: demoSrc
  },
  {
    name: "Category 4",
    image: demoSrc
  },
  {
    name: "Category 5",
    image: demoSrc
  },
  {
    name: "Category 6",
    image: demoSrc
  }
];

export default () => {
  const { width } = useWindowSize();
  // const [searchValue, setSearchValue] = useState("");
  const columnNum = width <= 576 ? 2 : 3;
  const imageWidth = width <= 576 ? 171 : 303;
  const bannerwidth = width <= 576 ? 355 : 1465;
  const bannerHeigth = width <= 576 ? 170 : 550;

  // const handleSearch = (value: string) => {
  //   setSearchValue(value);
  // };

  return (
    <div>
      <AutoCenter>
        {/* <SearchBar
          value={searchValue}
          placeholder="Search categories"
          showCancelButton
          onChange={handleSearch}
          style={{
            "--border-radius": "100px",
            "--background": "#ffffff",
            "--height": "32px",
            "--padding-left": "12px"
          }}
        /> */}
        <Image
          src={demoSrc}
          width={bannerwidth}
          height={bannerHeigth}
          fit="fill"
        />
      </AutoCenter>
      <AutoCenter>
        <h1 style={{ fontSize: "20px" }}>Top categories</h1>
        <Space wrap>
          <Grid columns={columnNum} gap={15}>
            {categories
              // .filter((category) =>
              //   category.name.toLowerCase().includes(searchValue.toLowerCase())
              // )
              .map((category) => (
                <Grid.Item key={category.name}>
                  <div className={styles["grid-demo-item-block"]}>
                    <Image
                      src={category.image}
                      width={imageWidth}
                      height={imageWidth}
                      fit="fill"
                    />
                    <h3>{category.name}</h3>
                  </div>
                </Grid.Item>
              ))}
          </Grid>
        </Space>
      </AutoCenter>
      <Divider />
      <div
        style={{
          // backgroundColor: "#411",
          padding: "0 0 30px 40px",
          // color: "#551",
          textAlign: "left"
        }}
      >
        <div>
          <h3
            style={{
              fontSize: "20px"
            }}
          >
            Quick links
          </h3>
          <ul>
            <li>
              <a href="/categories">Shop</a>
            </li>

            <li>
              <a href="/categories/attar-and-perfumes-fragrances-1">
                Attar and Perfumes Fragrances
              </a>
            </li>

            <li>
              <a href="/categories/ibne-rafiq-perfumes">IBNE RAFIQ PERFUMES</a>
            </li>

            <li>
              <a href="/categories/combo">Combo Offers</a>
            </li>

            <li>
              <a href="/categories/noorson">Noorson</a>
            </li>

            <li>
              <a href="/categories/al-ahmad-india">Al Ahmed India</a>
            </li>

            <li>
              <a href="/categories/bakhur">Bakhur</a>
            </li>
          </ul>
        </div>
        <div>
          <h5>Address: Rajapur, Maharashtra 416702, India</h5>
          <div></div>
        </div>
        <Space>
          <br />
        </Space>
      </div>
    </div>
  );
};
