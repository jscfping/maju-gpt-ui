# Maju GPT UI

This is a simple UI for ChatGPT, integrated with LIFF login if you want. Chat data are stored in browser localStorage.


## Getting Started
1. create an env file
```bash
# server side
OPENAI_API_KEY= #optional if mode is host
LINE_CHANNEL_ID= #optional if enable liff auth

# client side
NEXT_PUBLIC_MODE=host # static or host
NEXT_PUBLIC_ENABLE_AUTH=false #optional
NEXT_PUBLIC_LIFF_ID=xxxx #optional if enable liff auth
NEXT_PUBLIC_OPENAI_OPTION_MAX_TOKENS=1024 #optional
NEXT_PUBLIC_OPENAI_MAX_MESSAGES=8 #optional
```

2. run the development server:

```bash
$ npm install
$ npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

3. Mode
### static mode
This will allow build into static bundles to deploy to any static server, which ask user to enter their own API key to use.
```bash
NEXT_PUBLIC_MODE=static
NEXT_PUBLIC_ENABLE_AUTH=false
```

### host mode
This will allow to call api to NextJs server with your given API key in env. This won't ask user to enter API key.
```bash
OPENAI_API_KEY=xxxxx
NEXT_PUBLIC_MODE=host
```


## Line Auth
If you want to auth for user from your channel, just adjust env and you're ready to go!