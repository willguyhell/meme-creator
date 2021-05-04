from flask import Flask
import requests
import random

app = Flask(__name__)

@app.route("/api/images")
def images():
    api_request = requests.get("https://api.imgflip.com/get_memes")
    # View the json response
    json_api_request = api_request.json()
    # Get a random image
    grab = json_api_request["data"]["memes"][random.randint(0, 99)]
    # Set an empty list
    data = []
    for y in grab.values():
        # print(x, y)
        data.append(y)
        print(data)
    # print(data[2], data[1])
    # data = {"link": grab["url"], "name": grab["name"]}
    # Set these to variables we can pass to our Images.js file
    return {"link": data[2], "name": data[1], "width": data[3], "height": data[4]}


if __name__ == "__main__":
    app.run()
