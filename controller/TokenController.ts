import axios from "axios";
import { COIN_MARKET_CAP_APIKEY } from "../config/env";

const getInfo = (req: any, res: any) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=8000&&limit=5000&&sort=name",
      {
        headers: {
          "X-CMC_PRO_API_KEY": COIN_MARKET_CAP_APIKEY,
        },
      }
    )
    .then((value) => {
      let arr = value.data.data.find((item) => {
        return item.symbol == "WPT";
      });
      res.json(arr);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("sorry we can't get the data");
    });
};

export default {
  getInfo,
};
