### Checkbox SM
```tsx
<CheckBox
  name="small"
  description="Já conclui a graduação"
  size="sm"
  checked={true}
  onChange={(e) => e.target.checked }
/>
```

### Checkbox MD
```tsx
<CheckBox
  name="medium"
  description="Já conclui a graduação"
  size="md"
  onChange={(e) => e.target.checked }
/>
```

### Checkbox LG
```tsx
<CheckBox
  name="large"
  description="Já conclui a graduação"
  size="lg"
  onChange={(e) => e.target.checked }
/>
```

### Checkbox disabled
```tsx
<CheckBox
  name="disabled"
  description="Já conclui a graduação"
  readonly={true}
  onChange={(e) => e.target.checked }
/>
```

### Checkbox disabled checked
```tsx
<CheckBox
  name="disabledChecked"
  description="Já conclui a graduação"
  checked={true}
  readonly={true}
  onChange={(e) => e.target.checked }
/>
```
