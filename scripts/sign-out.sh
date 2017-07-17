curl "https://aqueous-atoll-85096.herokuapp.com/sign-out/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \
