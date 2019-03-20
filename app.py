from flask import Flask, render_template,jsonify
import time

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/api/message')
def message():

    # Simulate a latency on the network
    time.sleep(1)

    return jsonify({'message': 'Hello from the API!'})


if __name__ == '__main__':
    app.run(debug=True)
