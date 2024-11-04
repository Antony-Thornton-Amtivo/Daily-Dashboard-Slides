from flask import Flask, render_template
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

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)  # No debug=True for production
