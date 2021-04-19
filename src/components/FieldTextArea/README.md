### Normal
```js
const [value, setValue] = React.useState('')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<div style={{ backgroundColor: "#E0E0E0", padding: "1rem" }}>
  <FieldTextArea
    name="name-0"
    label="Mensagem"
    value={value}
    onChange={handleChange}
  />
</div>
```
