# Mutation Observer API demo

A simple demo shows the MutationSummary + TreeMirror libs to de/serialize content, using socket.io to sync the data.

We also try to catch & propagate two events - scroll + click.

![](https://raw.githubusercontent.com/parallelo3301/dom-cloner-demo/master/assets/demo.jpg)

---


## Demo/notes

- `<base>` tag; handling relative path - `assets/test.css` in `clone.html` vs `test-dir/clone.html`
- `scroll` event on any tag
- `iframe` (chat box handling, ...)
- differences in a font or OS UI elements rendering


## Usage

```sh
npm ci
npm start
```

Open:
- [http://localhost:3000/origin.html](http://localhost:3000/origin.html) in the first tab
- [http://localhost:3000/clone.html](http://localhost:3000/clone.html) in the second tab

Observe mirrored page (origin) in the cloned one.


## Demo video

https://raw.githubusercontent.com/parallelo3301/dom-cloner-demo/master/assets/demo.mp4
