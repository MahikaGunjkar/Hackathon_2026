from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from google import genai  # Updated to the 2026 SDK
import os
from audit_engine import run_audit

app = Flask(__name__)

# Allow requests from your React frontend (Vite port 5173)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# 1. Initialize the New Gemini Client
# Replace with your key ending in ...4jec
client = genai.Client(api_key="AIzaSyC-BD6oIOM4ZeekJ7oMNf6Wv_6C6p14jec")

@app.route('/api/audit', methods=['POST'])
def process_audit():
    if 'file' not in request.files:
        return jsonify({"error": "No file uploaded"}), 400
    
    file = request.files['file']
    industry = request.form.get('industry', 'General')
    region = request.form.get('region', 'Global')

    try:
        # 2. Read the CSV using Pandas
        df = pd.read_csv(file)
        
        # 3. Run the Math Logic from your audit_engine.py
        audit_data = run_audit(df, industry, region)

        # 4. Add AI Insights for each row using Gemini 3
        for item in audit_data:
            prompt = (
                f"Metric: {item['metric']} Scored: {item['score']}/100. "
                f"Context: {region} {industry}. "
                "Provide a one-sentence, highly technical fix. "
                "Do not explain why. Start with the action. Maximum 20 words."
            )
            
            try:
                # Updated calling convention for the 2026 SDK
                response = client.models.generate_content(
                    model='gemini-3-flash-preview',
                    contents=prompt
                )
                item['insight'] = response.text
            except Exception as ai_err:
                print(f"⚠️ AI insight failed for {item['metric']}: {ai_err}")
                item['insight'] = "Insight currently unavailable. Please check technical documentation."

        return jsonify(audit_data)

    except Exception as e:
        print(f"❌ Server Error: {e}")
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    # Running on port 5000 for the backend
    app.run(port=5000, debug=True)