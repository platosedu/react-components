### Checkbox SM
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="small"
  label="Já conclui a graduação"
  size="sm"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
/>
```

### Checkbox MD
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="medium"
  label="Já conclui a graduação"
  size="md"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
/>
```

### Checkbox LG
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="large"
  label="Já conclui a graduação"
  size="lg"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
/>
```

### Checkbox disabled
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="disabled"
  label="Já conclui a graduação"
  checked={isChecked}
  disabled
  onChange={(e) => { setIsChecked(e.target.checked) }}
/>
```

### Checkbox disabled checked
```tsx
const [ isChecked, setIsChecked ] = React.useState(true)

;<CheckBox
  name="disabledChecked"
  label="Já conclui a graduação"
  checked={isChecked}
  disabled
  onChange={(e) => { setIsChecked(e.target.checked) }}
/>
```
