import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import openSocket from "socket.io-client";

class One extends
 Component {
  
  state = {
    labels: [],
    datasets: [
      {
        label: "Binance BNBBTC",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  };

  componentDidMount() {
    const socket = openSocket("http://localhost:4000/Binance_BNBBTC");
    socket.on("stock", (data) => {
      data = JSON.parse(data);

      let p = this.props.adjustArrays(
        this.state.datasets[0].data,
        data.data[0].p
      );
      let t = this.props.adjustArrays(
        this.state.labels,
        new Date(data.data[0].t).toLocaleTimeString()
      );
      console.log("P: " + p);
      console.log("T: " + t);
      this.setState({
        datasets: [
          {
            label: "Binance BNBBTC",
            fill: false,
            lineTension: 0.5,
            backgroundColor: "rgba(75,192,192,1)",
            borderColor: "rgba(0,0,0,1)",
            borderWidth: 2,
            data: p,
          },
        ],
        labels: t,
      });
    });
  }

  render() {
    return (
      <div>
      <h1>Binance BNBBTC</h1>
        <Line
          data={this.state}
          options={{
            title: {
              display: true,
              text: "Binance BNBBTC",
              fontSize: 20,
            },
            legend: {
              display: true,
              position: "right",
            },
          }}
        />
      </div>
    );
  }
}

export default One;
