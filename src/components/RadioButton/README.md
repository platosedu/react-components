### RadioButton
```tsx
<>
  <RadioButton
    value="radio1"
    name="grupo1"
    description="Checked"
    size="sm"
    checked={true}
    onChange={(e) => e.target.checked}
  />
  <RadioButton
    value="radio2"
    name="grupo1"
    description="Unchecked"
    size="sm"
    onChange={(e) => e.target.checked}
  />
</>
```

### Grupo 2 - Desabilitado
```tsx
<>
  <RadioButton
    value="radio3"
    name="grupo2"
    description="Disabled"
    readonly={true}
    onChange={(e) => e.target.checked}
  />
  <RadioButton
    value="radio4"
    name="grupo2"
    description="Disabled checked"
    checked={true}
    readonly={true}
    onChange={(e) => e.target.checked}
  />
</>
```
