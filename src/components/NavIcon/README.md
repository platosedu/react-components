```js
const [navOpened, setNavOpened] = React.useState(false)

;<div style={{ backgroundColor: '#ebebeb', padding: 16 }}>
  <NavIcon isCloseIcon={navOpened} onClick={() => setNavOpened(!navOpened)} />
</div>
```
