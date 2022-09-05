from asyncio.windows_events import NULL
import http
from flask import Flask, request
import pandas as pd

try:
    df = pd.read_csv("db.csv",header=0, usecols=['numero_do_cartão','codigo_de_seguranca','validade'])
except:
    df = pd.DataFrame({
        'numero_do_cartão' : [],
        'codigo_de_seguranca' : [],
        'validade' : []
    })

app = Flask(__name__)

@app.route('/teste', methods=['POST'])
def login():

    data = request.get_data(as_text=True).split('&') 

    df.loc[len(df.index)] = [data[0].split('=')[1],data[1].split('=')[1],data[2].split('=')[1]] 

    df.to_csv("db.csv")
    
    return ""

app.run()