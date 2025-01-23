from flask import Flask, render_template, request, jsonify
import openai
import json
import os
from test import main_api_call


app = Flask(__name__)


# example prompts
example_prompt_one = "Explain quantum computing in simple terms"
example_prompt_two = "Got any creative ideas for a 10 year old's birthday?"
example_prompt_three = "How do I make an HTTP request in JavaScript?"

new_chat = 0


def api_response(prompt, tokens, temp):
    # Use your API key
    openai.api_key = os.environ("OpenAI_Key")
    
    if tokens == 0:
        tokens = 100

    model_response = str(openai.Completion.create(
    model="text-davinci-003",
    prompt=prompt,
    max_tokens=tokens,
    temperature=temp
    ))
    json_obj = json.loads(model_response)
    response = json_obj["choices"][0]["text"]
    return response






responses = {}
chats = []


@app.route('/', methods=["GET", "POST"])
def index():
    prompt = ''
    if request.method == "POST":
        prompt = request.data
        b_string = prompt
        decoded_string = b_string.decode()
        api = 'ummm no' # replace this with your actual API response
        responses[decoded_string] = api
        return render_template('index2.html', 
                           example_prompt_one=example_prompt_one,
                           example_prompt_two=example_prompt_two,
                           example_prompt_three=example_prompt_three,
                           responses=responses, prompt=prompt)

    return render_template('index2.html', 
                           example_prompt_one=example_prompt_one,
                           example_prompt_two=example_prompt_two,
                           example_prompt_three=example_prompt_three,
                           responses=responses, prompt=prompt)




@app.route('/my_backend_endpoint', methods=['POST'])
def my_backend_function():
    input_text = request.json.get('text')
    temp = request.json.get('temp')
    tokens = int(request.json.get('tokens'))
    
    if temp == "0":
        temp = 0.9
    else:
        temp = float(temp)
        
    api = main_api_call(input_text)
    output_text = f'This is a test, This is a test!!'
    return jsonify({'result': api})


if __name__ == "__main__":
    app.run(debug=True)