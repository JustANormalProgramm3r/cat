import requests
import os
import string
import random
i = 1
while True:
    try:
        req = requests.get('https://api.thecatapi.com/v1/images/search')
        r = requests.get(req.json()[0]['url'],  allow_redirects=True)
        path = f"./{i}.png"
        if not os.path.isfile(path):
            print(path)
            open(path,
                 'wb').write(r.content)
        i = i +1
    except requests.exceptions.JSONDecodeError:
        print('Error')
