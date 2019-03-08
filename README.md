# SIMPLE RESTful API Practice (Shop)

## Getting To Start

1. Make project directory.
```console
mkdir <project_name>
```

2. Install Express in the project dir.
```console
npm install --save express
```

3. Install nodemon in only dev environment(for the convenience)
```console
npm install --save-dev nodemon
```

4. Add 'start' into your package.json, "scripts"
```
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "nodemon server.js"  <--- this part 
  },
```

5. Now you don't need to re-run the server everytime you make any difference in your code and check.
```console
npm start
```

6. Install morgan(logger) in the project to see the logs on your prompt.
```console
npm install --save morgan
```

7. Install mongoose to use MongoDB fluently(and follow the code in proper commit)
```console
npm install --save mongoose
```

8. Go further improvement by yourself from here.


## Sources from

[Videos](https://www.youtube.com/playlist?list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q)
<br />
[Source Code](https://github.com/academind/node-restful-api-tutorial/tree/13-controllers)


