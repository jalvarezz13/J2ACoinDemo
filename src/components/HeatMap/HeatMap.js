import React from "react"
import HeatMapItem from "../HeatMapItem/HeatMapItem"

import heatMap_avalanche from "../../assets/JSONs/heatMap_avalanche.json"
import heatMap_bitcoin from "../../assets/JSONs/heatMap_bitcoin.json"
import heatMap_bnb from "../../assets/JSONs/heatMap_bnb.json"
import heatMap_cardano from "../../assets/JSONs/heatMap_cardano.json"
import heatMap_ethereum from "../../assets/JSONs/heatMap_ethereum.json"
import heatMap_solana from "../../assets/JSONs/heatMap_solana.json"
import heatMap_terra from "../../assets/JSONs/heatMap_terra.json"
import heatMap_tether from "../../assets/JSONs/heatMap_tether.json"
import heatMap_usdc from "../../assets/JSONs/heatMap_usdc.json"
import heatMap_xrp from "../../assets/JSONs/heatMap_xrp.json"

import "./heatMap.css"

const style = (size) => {
  return {
    fontSize: size,
  }
}

const HeatMap = () => {
  return (
    <div className="heat-map">
      <div className="heat-map-1">
        <HeatMapItem data={heatMap_bitcoin.data} style={style(45)} />
      </div>
      <div className="heat-map-2">
        <HeatMapItem data={heatMap_ethereum.data} style={style(38)} />
      </div>
      <div className="heat-map-3">
        <HeatMapItem data={heatMap_tether.data} style={style(30)} />
      </div>
      <div className="heat-map-4">
        <HeatMapItem data={heatMap_bnb.data} style={style(32)} />
      </div>
      <div className="heat-map-5">
        <HeatMapItem data={heatMap_usdc.data} style={style(26)} />
      </div>
      <div className="heat-map-6">
        <HeatMapItem data={heatMap_xrp.data} style={style(20)} />
      </div>
      <div className="heat-map-7">
        <HeatMapItem data={heatMap_terra.data} style={style(18)} />
      </div>
      <div className="heat-map-8">
        <HeatMapItem data={heatMap_solana.data} style={style(15)} />
      </div>
      <div className="heat-map-9">
        <HeatMapItem data={heatMap_cardano.data} style={style(14)} />
      </div>
      <div className="heat-map-10">
        <HeatMapItem data={heatMap_avalanche.data} style={style(12)} />
      </div>
    </div>
  )
}

export default HeatMap
