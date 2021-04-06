### Checkbox SM
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="small"
  size="sm"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
>
  Já conclui a graduação
</CheckBox>
```

### Checkbox MD
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="medium"
  size="md"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
>
  Já conclui a graduação
</CheckBox>
```

### Checkbox LG
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="large"
  size="lg"
  checked={isChecked}
  onChange={(e) => { setIsChecked(e.target.checked) }}
>
  Já conclui a graduação
</CheckBox>
```

### Checkbox disabled
```tsx
const [ isChecked, setIsChecked ] = React.useState(false)

;<CheckBox
  name="disabled"
  description="Já conclui a graduação"
  checked={isChecked}
  disabled
  onChange={(e) => { setIsChecked(e.target.checked) }}
>
  Já conclui a graduação
</CheckBox>
```

### Checkbox disabled checked
```tsx
const [ isChecked, setIsChecked ] = React.useState(true)

;<CheckBox
  name="disabledChecked"
  description="Já conclui a graduação"
  checked={isChecked}
  disabled
  onChange={(e) => { setIsChecked(e.target.checked) }}
>
  Já conclui a graduação
</CheckBox>
```
