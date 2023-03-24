from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/team", methods=["GET"])
def team():
    return render_template('team.html')

@app.route("/about", methods=["GET"])
def about():
    return render_template('about.html')

@app.route("/impact", methods=["GET"])
def impact():
    return render_template('impact.html')