from flask import Flask, render_template

app = Flask(__name__)

# Define the home route
@app.route("/")
def home():
    return render_template("base.html")

if __name__ == "__main__":
    app.run(debug=True)