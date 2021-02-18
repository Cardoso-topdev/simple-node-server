import asyncHandler from 'express-async-handler'
import axios from 'axios'

const triggerCustomrules = asyncHandler(async(req, res) => {
  console.log('called', req);
  let url = 'https://sdk.loyaltylion.net/v2/activities';
  let reqData = {
    name: req.body.name,
    customer_id: req.body.customer_id,
    customer_email: req.body.customer_email
  }
  const headers = {
    'Authorization': 'Basic MzM5ZWM2MjcyMTcwZjg2YTk0NmU5YmI2MGMxZDA4MDY6Yjk0YWE4MzBjNzNkNDYzZjgyNzgzYTk1NTI5YTBlYWU=',
    'Content-Type': 'application/json'
  }

  const {data, status} = await axios({
    method: 'POST',
    url,
    data: JSON.stringify(reqData),
    headers,
    json: true
  })

  try {
    res.status(status).json(data)
  } catch(err) {
    res.status(err.response.status).send("The Server is " + err.response.statusText)
  }
})

export {
  triggerCustomrules
}