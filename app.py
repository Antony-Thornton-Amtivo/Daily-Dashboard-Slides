from flask import Flask, render_template,make_response
import os

if os.path.exists("env.py"):
    import env


app = Flask(__name__)

os.environ['FLASK_ENV'] = 'development'

app.debug = True


# Define the home route
@app.route("/")
def home():
    return render_template("base.html")

@app.after_request
def add_csp_header(response):
    csp = (
        "default-src 'self'; "
        "style-src 'self' 'unsafe-inline'; "
        "frame-src 'self' https://bab.eu.qlikcloud.com https://login.qlik.com; "
        "connect-src 'self' https://bab.eu.qlikcloud.com; "
        "frame-ancestors 'self' https://myqlik.qlik.com;"
    )
    response.headers['Content-Security-Policy'] = csp
    return response

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)  # No debug=True for production
