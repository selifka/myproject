from flask import Flask, render_template
app = Flask(__name__)

@app.route("/")
def index():
    return render_template('index.html')

def before_request():
    app.jinja_env.cache = {}

app.before_request(before_request)

if __name__ == '__main__':
    app.run(host='0.0.0.0')
