[![Author](https://img.shields.io/badge/Dev-Nadi%20Duno-blueviolet%20)](https://portfolio-nadi.vercel.app/)
[![Social](https://img.shields.io/twitter/follow/nadiduno?label=%40nadiduno&style=social)](https://twitter.com/nadiduno)
[![Linkedin](https://img.shields.io/badge/in-Nadi%20Duno-blue)](https://www.linkedin.com/in/nadiduno/)
<br />
<br />

# HookReact
Using hook of react, useState and useEffect. which allow you to monitor real-time change of components

```javascript
import { useEffect, useState } from 'react'

# useState
const [list, setList] = useState<string[]>([])

# use Effect
useEffect(() => {
    if (list.length != 0)
      avisarAPI()
  },[list])

```

Documentation
https://legacy.reactjs.org/docs/hooks-intro.html

