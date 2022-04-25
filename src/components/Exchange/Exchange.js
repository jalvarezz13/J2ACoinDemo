import React, { useState, useEffect } from "react"
import ExchangeItem from "../ExchangeItem/ExchangeItem"
import Loading from "../Loading/Loading"
import "./exchange.css"
import jsonData from "../../assets/JSONs/exchangeList.json"

const Exchange = () => {
  const [data, setData] = useState()

  useEffect(function () {
    setData(Object.values(jsonData.data))
  }, [])

  return (
    <div className="exchange-list">
      {data === undefined ? (
        <Loading />
      ) : (
        data.map((element) => {
          return <ExchangeItem key={element.id} item={element} />
        })
      )}
    </div>
  )
}

export default Exchange
