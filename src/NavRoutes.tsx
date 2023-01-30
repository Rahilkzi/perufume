import React, { FC } from "react";
import {
  Route,
  useNavigate,
  useLocation,
  MemoryRouter as Router,
  Routes
} from "react-router-dom";

import { Badge, NavBar, SearchBar, Dropdown, TabBar } from "antd-mobile";
import { SearchOutline } from "antd-mobile-icons";

import {
  FaHome,
  FaFileInvoiceDollar,
  FaUserCircle,
  FaCog
} from "react-icons/fa";

import UserHome from "./Pages/UserHome";
import Profile from "./Pages/Profile";

function Shop() {
  return <h1>Shop</h1>;
}

function Cart() {
  return <h1>Cart</h1>;
}

const Bottom: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value: string) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/home",
      title: "Home",
      icon: <FaHome />
    },
    {
      key: "/shop",
      title: "Shop",
      icon: <FaFileInvoiceDollar />
    },
    {
      key: "/Bag",
      title: "Bag",
      icon: <FaCog />
    },
    {
      key: "/profile",
      title: "Account",
      icon: <FaUserCircle />,
      badge: Badge.dot
    }
  ];

  return (
    <TabBar
      style={{
        background: "#ffffff",
        bottom: 0,
        left: 0,
        position: "fixed",
        zIndex: 5,
        width: "100%"
      }}
      activeKey={pathname}
      onChange={(value) => setRouteActive(value)}
    >
      {tabs.map((item) => (
        <TabBar.Item
          key={item.key}
          icon={item.icon}
          title={item.title}
          badge={item.badge}
        />
      ))}
    </TabBar>
  );
};

export default () => {
  const right = (
    <div style={{ fontSize: 24 }}>
      {/* <Space style={{ "--gap": "16px" }}>
        <SearchOutline />
        <MoreOutline />
      </Space> */}
      <Dropdown>
        <Dropdown.Item key="Search" title={<SearchOutline />}>
          <div style={{ padding: 10 }}>
            <SearchBar
              placeholder="Search categories"
              showCancelButton
              style={{
                "--border-radius": "100px",
                "--background": "#ffffff",
                "--height": "32px",
                "--padding-left": "12px"
              }}
            />
          </div>
        </Dropdown.Item>
      </Dropdown>
    </div>
  );

  return (
    <Router initialEntries={["/home"]}>
      <div>
        <div>
          <NavBar right={right}>Ibne Rafiq Perfumes</NavBar>
          {/* <NavBar>
            Ibne Rafiq Perfumes <Space />
            <Dropdown>
              <Dropdown.Item key="Search" title="Search">
                <div style={{ padding: 10 }}>
                  <SearchBar
                    placeholder="Search categories"
                    showCancelButton
                    style={{
                      "--border-radius": "100px",
                      "--background": "#ffffff",
                      "--height": "32px",
                      "--padding-left": "12px"
                    }}
                  />
                </div>
              </Dropdown.Item>
            </Dropdown>
          </NavBar> */}
        </div>
        <div>
          <Routes>
            <Route path="/home" element={<UserHome />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/Bag" element={<Cart />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
        <div>
          <Bottom />
        </div>
      </div>
    </Router>
  );
};
