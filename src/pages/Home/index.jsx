// import React from "react";
// // import "antd/dist/antd.css";
// import { Layout, Menu, Card } from "antd";

// const { Header, Sider, Content } = Layout;

// export default function Home() {
//   return (
//     <Layout style={{ minHeight: "100vh" }}>
//       <Sider collapsible>
//         <div className="logo" />
//         <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
//           <Menu.Item key="1">Overview</Menu.Item>
//           <Menu.Item key="2">Reports</Menu.Item>
//           <Menu.Item key="3">Analytics</Menu.Item>
//           <Menu.Item key="4">Settings</Menu.Item>
//         </Menu>
//       </Sider>
//       <Layout>
//         <Header className="site-layout-background" style={{ padding: 0 }}>
//           <h1 className="text-center text-2xl font-bold">Sales Dashboard</h1>
//         </Header>
//         <Content style={{ margin: "0 16px" }}>
//           <div
//             className="site-layout-background"
//             style={{ padding: 24, minHeight: 360 }}
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//               <Card title="Total Sales">$1,234.00</Card>
//               <Card title="Total Orders">567</Card>
//               <Card title="New Customers">45</Card>
//               <Card title="Pending Orders">8</Card>
//             </div>
//             <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
//               <Card title="Sales Overview">
//                 <div className="h-64 bg-gray-200 rounded-lg"></div>
//               </Card>
//               <Card title="Customer Overview">
//                 <div className="h-64 bg-gray-200 rounded-lg"></div>
//               </Card>
//             </div>
//           </div>
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }
import React from "react";
import { Layout, Menu, Card } from "antd";
import {
  DashboardOutlined,
  BarChartOutlined,
  PieChartOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

export default function Home() {
  return (
    <Layout className="bg-gray-100 min-h-screen">
      <Sider collapsible width={250} className="bg-gray-800">
        <div className="logo text-white text-center text-xl font-bold mb-8">
          My Dashboard
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          className="text-lg"
        >
          <Menu.Item
            key="1"
            icon={<DashboardOutlined />}
            className="text-white"
          >
            Overview
          </Menu.Item>
          <Menu.Item key="2" icon={<BarChartOutlined />} className="text-white">
            Reports
          </Menu.Item>
          <Menu.Item key="3" icon={<PieChartOutlined />} className="text-white">
            Analytics
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />} className="text-white">
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white shadow-none border-none p-4">
          <h1 className="text-center text-2xl font-bold">Sales Dashboard</h1>
        </Header>
        <Content className="m-4">
          <div
            className="bg-white shadow-md rounded-lg p-4"
            style={{ minHeight: 360 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card title="Total Sales" bordered={false}>
                $1,234.00
              </Card>
              <Card title="Total Orders" bordered={false}>
                567
              </Card>
              <Card title="New Customers" bordered={false}>
                45
              </Card>
              <Card title="Pending Orders" bordered={false}>
                8
              </Card>
            </div>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
              <Card title="Sales Overview" bordered={false}>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </Card>
              <Card title="Customer Overview" bordered={false}>
                <div className="h-64 bg-gray-200 rounded-lg"></div>
              </Card>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}
