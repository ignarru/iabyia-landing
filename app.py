import os
import logging
from flask import Flask, render_template

# Configure logging for debugging
logging.basicConfig(level=logging.DEBUG)

# Create the Flask app
app = Flask(__name__)
app.secret_key = os.environ.get("SESSION_SECRET", "dev-secret-key-change-in-production")

@app.route('/')
def index():
    """Serve the main landing page"""
    return render_template('index.html')

@app.route('/health')
def health():
    """Health check endpoint"""
    return {'status': 'healthy'}, 200

if __name__ == '__main__':
    # Run the application
    app.run(host='0.0.0.0', port=5000, debug=True)