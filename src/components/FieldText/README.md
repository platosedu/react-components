### Normal without label
```js
const [value, setValue] = React.useState('')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<div style={{ backgroundColor: "#E0E0E0", padding: "1rem" }}>
  <FieldText
    name="name-0"
    label="Nome completo"
    value={value}
    onChange={handleChange}
    required
  />
</div>
```

### Bordered with two icons
```js
const [value, setValue] = React.useState('')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<FieldText
  bordered
  name="name-1"
  label="Nome"
  hint="Digite seu nome completo"
  value={value}
  onChange={handleChange}
  prefixIcon="mono_university_hat"
  suffixIcon="mono_university_hat"
  required
/>
```

### Normal with only suffix icon
```js
const [value, setValue] = React.useState('abc')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<FieldText
  bordered
  name="name-2"
  label="Nome"
  hint="Digite seu nome completo"
  value={value}
  onChange={handleChange}
  suffixIcon="mono_university_hat"
/>
```

### Error
```js
const [value, setValue] = React.useState('abc')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<FieldText
  bordered
  name="name-4"
  label="Nome"
  error="Digite seu nome completo"
  value={value}
  onChange={handleChange}
  required
/>
```

### Disabled
```js
const [value, setValue] = React.useState('abc')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<FieldText
  bordered
  name="name-5"
  label="Nome"
  hint="Digite seu nome completo"
  value={value}
  onChange={handleChange}
  prefixIcon="mono_university_hat"
  suffixIcon="mono_university_hat"
  disabled
/>
```

### On Suffix Icon Click
```js
const [showPassword, setShowPassword] = React.useState(false)
const [value, setValue] = React.useState('abc')

const handleChange = (e) => {
  setValue(e.target.value)
}

;<FieldText
  bordered
  name="password-1"
  type={showPassword ? 'text' : 'password'}
  label="Senha"
  onChange={handleChange}
  value={value}
  suffixIcon={showPassword ? 'mono_visibility_off' : 'mono_visibility_on'}
  onSuffixIconClick={() => setShowPassword(!showPassword)}
/>
```

### Multiple Fields in a column (spacing test)
```js
const [userValue, setUsername] = React.useState('Lorem Ipsum Sit Amet')
const [emailValue, setUseremail] = React.useState('loremipsum@platos.io')
const [addressValue, setUseraddress] = React.useState('Avenue Street, 101, Carnegie Hall')

const handleChangeUser = (e) => {
  setUsername(e.target.value)
}
const handleChangeMail = (e) => {
  setUseremail(e.target.value)
}
const handleChangeAddress = (e) => {
  setUseraddress(e.target.value)
}
;<div>
  <FieldText
    bordered
    name="name-6"
    label="Nome"
    hint="Digite seu nome"
    value={userValue}
    onChange={handleChangeUser}
    prefixIcon="mono_university_hat"
    required
  />
  <FieldText
    bordered
    name="email-7"
    label="Email"
    hint="Digite seu email"
    value={emailValue}
    onChange={handleChangeMail}
    prefixIcon="mono_university_hat"
    required
  />
  <FieldText
    bordered
    name="address-8"
    label="Endereço"
    hint="Digite seu endereço"
    value={addressValue}
    onChange={handleChangeAddress}
    prefixIcon="mono_university_hat"
    required
  />
</div>
```
