from google import genai


client = genai.Client(api_key="AIzaSyC-BD6oIOM4ZeekJ7oMNf6Wv_6C6p14jec")

try:
    # In 2026, 'gemini-3-flash-preview' is the standard for free-tier/hackathons
    response = client.models.generate_content(
        model='gemini-3-flash-preview', 
        contents="Hello, are you active?"
    )
    print("✅ Success! Gemini 3 says:", response.text)
except Exception as e:
    print("❌ Error:", e)