# lr-client-router reference

A Lagoon road extension that gives you route functionality on the client.

| Information | - |
| ----------- | - |
| Code coverage | - |
| Repo link | [lr-client-router](https://github.com/lagoon-road/lr-client-router) |
| Dependencies | - |
| Size (Browserify, Babel and Gzip)| 632 bytes |
| Version | 1.0.0 |
| License | MIT |
| Usage | [guide](https://lagoonroad.com/guide) |

---

### Adding the extension to lagoon road

```
const router   = require('lr-client-router');
const core     = require('lr-core');
const road     = core('client')
  .extension('router', router, true);
```

---

### router.redirect(path)

```
router.redirect('/some-page');
```

**path:string**  
The path to where you want to redirect, this will trigger an update event on the road.

---
