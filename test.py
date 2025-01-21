import requests
import json
import os


banned_words = [
    'nigger',
    'nigga',
    'niglet'
]

butt = "you are a helpful assistant"


def checking_words(promt):
    spllit = str(promt).lower().split(' ')
    
    for i in spllit:
        if i in banned_words:
            a = str(promt).replace(i, 'n-word')
            return a

    return promt


#. MAIN FUNCTION FOR API CALL
def main_api_call(promot: str) -> str:
    
    return_message = checking_words(promot)

    openai_api_key = os.environ['OPENAI_API_KEY']

    url = "https://api.openai.com/v1/chat/completions"

    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {openai_api_key}"
    }

    data = {
        "model": "gpt-3.5-turbo",
        "messages": [
            {
                "role": "system",
                "content": "you are a helpful assistant"
            },
            {
                "role": "user",
                "content": return_message
            }
        ]
    }

    response = requests.post(url, headers=headers, json=data)

    # Check if the request was successful
    if response.status_code == 200:
        return str(response.json()['choices'][0]['message']['content'])
    else:
        print("Error:", response.status_code, response.text)
        return ''


