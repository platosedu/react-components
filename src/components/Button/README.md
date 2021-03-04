### Filled

```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Outline
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button fillType="outline" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### With prefix icon
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Small
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button display="sm" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Large
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button display="lg" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Circular
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button display="circular" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Circular micro
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))'
  }}>
    {variants.map(variant => (
      <Button display="circularMicro" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
    ))}
  </div>
</>
```

### Loading state
```tsx
const variants = ['primary', 'secondary', 'neutral-dark', 'neutral-light', 'error', 'alert', 'info', 'success'];

const [loading, setLoading] = React.useState(true)

React.useEffect(() => {
  const switchLoadingInterval = setInterval(() => {
    setLoading(!loading)
  }, 3000)

  return () => clearInterval(switchLoadingInterval)
})

;<>
  <div style={{
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))'
  }}>
    <>
      {variants.map(variant => (
        <Button loading={loading} display="md" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
      ))}
    </>
    <>
      {variants.map(variant => (
        <Button loading={loading} display="circular" prefixIcon="mono_university_hat" key={variant} variant={variant} label={variant} />
      ))}
    </>
  </div>
</>
```

### Example: using `<a>` instead `<button>`
```tsx
<div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
  <Button
    display="md"
    element="a"
    href="https://google.com"
    target="_blank"
    label="Go to Google"
  />
</div>
```
