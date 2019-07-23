#!/bin/bash

curl "https://git.heroku.com/whispering-fjord-26435.git" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "car": {
      "make": "'"$MAKE}"'",
      "model": "'"${MODEL}"'",
      "year": "'"${YEAR}"'",
      "vehicle_type": "'"${TYPE}"'",
      "grade": "'"${GRADE}"'"
    }
  }'

echo
