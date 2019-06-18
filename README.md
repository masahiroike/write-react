# write react

elementを指定することなく、reactをrenderします
htmlファイルでreactを使いたい人向けのプログラムです
https://github.com/masahiroike/write-react

# install

1. npm install
```
# shell command line
npm install write-react
```

2. import this
```
# index.tsx
import writeReact from 'write-react';
window.writeReact = writeReact;
```

3. execute example
```
# index.html
<script>writeReact(ExampleComponent, {className: 'exampleClassName'}, ...ExampleChildElement)</script>
```

