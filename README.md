# AI Web Integration

A simple demo project that shows how a **website can connect to a local AI model**.

This project is part of my learning journey with **Local AI** and is also a small web interface for my other project, [Cerebro-Local](https://github.com/Ashray-poojary/Cerebro-Local).

## About

The goal of this project is to understand how a normal website can communicate with an AI running locally instead of using a cloud AI service.

The project uses basic:

* HTML
* CSS
* JavaScript
* Local AI API

The AI backend can be provided by **llama.cpp**, which is used in Cerebro-Local to run AI models locally on Android (also works in Laptops in building this project i used model in laptop).

## How It Works

The basic flow is:

```text
User
  ↓
Web Page
  ↓
JavaScript
  ↓
Local AI API
  ↓
llama.cpp
  ↓
Local AI Model
  ↓
Response
  ↓
Web Page
```

The website sends the user's message to the local AI server and displays the response on the webpage.

## Technologies Used

* HTML
* CSS
* JavaScript
* llama.cpp
* Local GGUF AI Models
* REST API

## Project Structure

```text
AI-web-Integration/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the webpage and AI chat interface.

### `style.css`

Contains the styling and appearance of the website.

### `script.js`

Handles the interaction between the website and the local AI API.

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Ashray-poojary/AI-web-Integration.git
```

```bash
cd AI-web-Integration
```

### 2. Run a Local AI Server

This project can work with a local AI server such as **llama.cpp**.

For example:

```bash
./build/bin/llama-server \
  -m YOUR_MODEL.gguf \
  --host 0.0.0.0 \
  --port 8080
```
(Here a pre-compiled llama package can be used no need to build from scratch, It works as same above or below steps).

The local server will run on:

```text
http://localhost:8080
```

### 3. Open the Website

Open `index.html` in your browser.

Make sure the local AI server is running before sending messages.

## Related Project

This project is connected to my **Cerebro-Local** project.

Cerebro-Local is a beginner-friendly guide for running AI locally on Android using:

* Termux
* llama.cpp
* GGUF models
* Local REST API

**Cerebro-Local:**
https://github.com/Ashray-poojary/Cerebro-Local

## What I Learned

Through this project, I learned the basics of:

* Running AI locally
* Using llama.cpp
* Working with local AI APIs
* Sending requests using JavaScript
* Connecting a frontend to an AI backend
* Understanding how local AI applications communicate

## Future Improvements

Some features I would like to add in the future:

* Better chat interface
* Streaming AI responses
* Chat history
* Model selection
* Markdown support
* Mobile-friendly design
* Voice input and output
* Connection with the full Cerebro-Local project

## Note

This is a **learning project** and is still under development.

The project is mainly focused on understanding how **web applications and local AI models can work together**.

And note that ai can only work in current IDE, It wont work with live server or port forwarding because they assign different ports.
## License

This project is open source and available under the MIT License.
