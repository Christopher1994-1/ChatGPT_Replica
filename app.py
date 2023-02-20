from flask import Flask, render_template, request, jsonify
import openai
import json
import os


app = Flask(__name__)


# example prompts
example_prompt_one = "Explain quantum computing in simple terms"
example_prompt_two = "Got any creative ideas for a 10 year old's birthday?"
example_prompt_three = "How do I make an HTTP request in JavaScript?"

new_chat = 0


def api_response(prompt, tokens, temp):
    """
    Generates a text response based on a given prompt using the OpenAI API.
    
    Parameters:
        prompt (str): The text prompt that the API will use as the starting point for generating a response.
    
    Returns:
        str: The generated text response.
        
    Example:
        response = api_response("What is the weather like today?")
        print(response)
        # Output: "The weather today is sunny with a high of 75 degrees."
    """
    # Use your API key
    openai.api_key = os.environ("OpenAI_Key")
    # openai.api_key = "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"
    
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
        return render_template('index.html', 
                           example_prompt_one=example_prompt_one,
                           example_prompt_two=example_prompt_two,
                           example_prompt_three=example_prompt_three,
                           responses=responses, prompt=prompt)

    return render_template('index.html', 
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
        
    api = api_response(input_text, tokens, temp)
    output_text = f'This is a test, This is a test!!'
    return jsonify({'result': api})


if __name__ == "__main__":
    app.run(debug=True)