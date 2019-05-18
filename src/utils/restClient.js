import axios from "axios";
import { Observable } from "rxjs";
import { BACKEND_URL } from "../constants";

const restClient = {
  get: api => {
    const optionsGet = options(api);
    optionsGet.method = "GET";
    return Observable.fromPromise(
      axios(optionsGet)
        .then(
          rp => {
            return rp;
          },
          (err) => {
            console.log(err);
            return {
              status: 500,
              message: err
            };
          }
        )
        .catch(err => err)
    );
  }
};

function options(api) {
  return {
    url: `${BACKEND_URL}/${api}`,
    headers: {
      "Access-Control-Allow-Origin": "*",
      crossDomain: true
    }
  };
}

export { restClient };
