## Default

```js
import NavItem from '../NavItem'

const [navOpened, setNavOpened] = React.useState(false)
const switchNav = () => setNavOpened(!navOpened)

;<NavHeader
  transparent={false}
  navOpened={navOpened}
  onNavClick={switchNav}
  logoPath="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png"
  >
  <NavItem url="#navheader" label="Conheça a Platos" icon="mono_book" onClick={switchNav} />
  <NavItem url="#navheader" label="Perguntas frequentes" icon="mono_book" onClick={switchNav} />
  <NavItem url="#navheader" label="Baixe o app AVA" icon="mono_book" onClick={switchNav} />
</NavHeader>
```

### With transparent background

```js
import NavItem from '../NavItem'


const [navOpened, setNavOpened] = React.useState(false)
const switchNav = () => setNavOpened(!navOpened)

;<div style={{ backgroundColor: 'var(--color-primary-900)', padding: 16 }}>
  <NavHeader
    transparent
    navOpened={navOpened}
    onNavClick={switchNav}
    logoPath="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png"
  >
    <NavItem
      transparent
      url="#navheader"
      label="Conheça a Platos"
      icon="mono_book"
      onClick={switchNav}
    />

    <NavItem
      transparent
      url="#navheader"
      label="Perguntas frequentes"
      icon="mono_book"
      onClick={switchNav}
    />

    <NavItem
      transparent
      url="#navheader"
      label="Baixe o app AVA"
      icon="mono_book"
      onClick={switchNav}
    />
  </NavHeader>
</div>
```
