curl --include --request POST http://localhost:4741/recipes \
 --header "Content-Type: application/json" \
 --data '{
    "recipe": {
      "name": "'"${NAME}"'",
      "ingredients": "'"${INGREDIENTS}"'",
      "on_menu": "'"${ON_MENU}"'",
      "link": "'"${LINK}"'"
    }
  }'
