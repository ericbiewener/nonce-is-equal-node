This shows how Chrome & Firefox will return `false` for `node1.isEqualNode(node2)` on script tags that are equivalent when a `nonce` attribute is present, while Safari returns `false`. Based on the [spec](https://dom.spec.whatwg.org/#concept-node-equals), this appears to be a bug in Chrome/FF. Interestingly, both of those browsers also hide the `nonce` value in the Elements pane of their dev tools, while Safari shows it.

**Quick Start**
1. `yarn dev`
2. Open browser, open console. Observe console logs.
