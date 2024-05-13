import React, { useState, useEffect, useRef } from "react";
import { Form, Navbar, Nav } from "react-bootstrap";
import { FaCog, FaBell, FaUser, FaHome, FaUserCog, FaFileAlt, FaSignOutAlt, FaSearch } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Chart from "chart.js/auto";

function AdminStats() {
    const [searchTerm, setSearchTerm] = useState("");
    const lineChartRef = useRef(null);
    const barChartRef = useRef(null);
    const doughnutChartRef = useRef(null);

    useEffect(() => {
        // Sample chart data
        const lineChartData = {
          labels: ["Jan", "Feb", "March", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: "Download Count Per Month",
              data: [105, 200, 50, 114, 189, 132, 105, 200, 50, 114, 189, 132],
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
              fill: false,
            },
          ],
        };
    
        // Sample bar chart data
        const barChartData = {
          labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
          datasets: [
            {
              label: "Amount Donated Per Day",
              data: [100000, 50000, 150000, 32000, 12124, 23455, 99000],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        };
    
        // Sample doughnut chart data
        const doughnutChartData = {
          labels: ["Reacts", "Comments", "Shares", "Contacts"],
          datasets: [
            {
              data: [50342, 100233, 95000, 44032],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
                "rgba(255, 206, 86, 0.5)",
                "rgba(45, 22, 86, 0.5)",
              ],
              hoverOffset: 4,
            },
          ],
        };
    
        // Get chart contexts
        const lineChartCtx = lineChartRef.current.getContext("2d");
        const barChartCtx = barChartRef.current.getContext("2d");
        const doughnutChartCtx = doughnutChartRef.current.getContext("2d");
    
        // Create charts
        const lineChart = new Chart(lineChartCtx, {
          type: "line",
          data: lineChartData,
        });
    
        const barChart = new Chart(barChartCtx, {
          type: "bar",
          data: barChartData,
        });
    
        const doughnutChart = new Chart(doughnutChartCtx, {
          type: "doughnut",
          data: doughnutChartData,
        });
    
        // Cleanup functions when the component unmounts
        return () => {
          lineChart.destroy();
          barChart.destroy();
          doughnutChart.destroy();
        };
      }, []); // Empty dependency array to run only once on mount

    function NavigationBar() {
        return (
            <Navbar className="nav-bar" expand="lg">
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-link-icon-right">
                        <div className="nav-icon-circle"><Nav.Link href="#home" className="nav-link-icon"><FaCog /></Nav.Link></div>
                        <div className="nav-icon-circle"><Nav.Link href="#link1" className="nav-link-icon"><FaBell /></Nav.Link></div>
                        <div className="nav-icon-circle"><Nav.Link href="#link2" className="nav-link-icon"><FaUser /></Nav.Link></div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

    function SidePanel() {
        return (
            <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home" className="side-panel-icon mt-5"><FaHome /></Nav.Link>
                <Nav.Link eventKey="link-1" className="side-panel-icon"><FaUserCog /></Nav.Link>
                <Nav.Link eventKey="link-2" className="side-panel-icon"><FaFileAlt /></Nav.Link>
                <Nav.Link eventKey="logout" className="side-panel-icon2"><FaSignOutAlt /></Nav.Link>
            </Nav>
        );
    }

    function ChartBox({ title, chartRef }) {
        return (
            <div className="chart-box">
                <h4>{title}</h4>
                <canvas className="" ref={chartRef}></canvas>
            </div>
        );
    }

    function ChartBox2({ title, chartRef }) {
        return (
            <div className="chart-box2">
                <h4>{title}</h4>
                <canvas ref={chartRef}></canvas>
            </div>
        );
    }

    function ChartBox3({ title, chartRef }) {
        return (
            <div className="chart-box3">
                <h4>{title}</h4>
                <canvas ref={chartRef}></canvas>
            </div>
        );
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-1">
                    <SidePanel />
                </div>
                <div className="col-md-11 statsbackground">
                    <NavigationBar />
                    <ToastContainer />
                    <div className="d-flex align-items-center justify-content-between mt-3">
                        <h4 className="titleleft">Home/Dashboard</h4>
                        <Form.Control
                            className="search-bar"
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <div className="d-flex justify-content-between mt-1">
                    <ChartBox title="" chartRef={lineChartRef} />
                    <ChartBox  title="TBD"/>
                    <ChartBox  title="TBD"/>
                    </div>
                    <div className="d-flex justify-content-between mt-2">
                        <ChartBox2 title="" chartRef={barChartRef} />
                        <ChartBox2 title="TBD" />
                        <ChartBox3 title="" chartRef={doughnutChartRef} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminStats;
