## Default

```js
import NavItem from '../NavItem'

const [navOpened, setNavOpened] = React.useState(false)
const switchNav = () => setNavOpened(!navOpened)

const Logo = () => (
  <figure>
    <img src="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png" />
  </figure>
)

;<NavHeader
  isTransparent={false}
  navOpened={navOpened}
  onNavClick={switchNav}
  logoComponent={Logo}
  >
  <NavItem url="#navheader" label="Conheça a Platos" onClick={switchNav} />
  <NavItem url="#navheader" label="Perguntas frequentes" onClick={switchNav} />
  <NavItem url="#navheader" label="Baixe o app AVA" onClick={switchNav} />
</NavHeader>
```

## With Extra Content

```js
import NavItem from '../NavItem'
import Button from '../Button'

const [navOpened, setNavOpened] = React.useState(false)
const switchNav = () => setNavOpened(!navOpened)

const Logo = () => (
  <figure>
    <img src="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png" />
  </figure>
)

const NavHeaderExtraContent = () => (
  <Button label="Experimente 7 dias" />
)

;<NavHeader
  isTransparent={false}
  navOpened={navOpened}
  onNavClick={switchNav}
  logoComponent={Logo}
  extraContentComponent={NavHeaderExtraContent}
  >
  <NavItem url="#navheader" label="Conheça a Platos" onClick={switchNav} />
  <NavItem url="#navheader" label="Perguntas frequentes" onClick={switchNav} />
  <NavItem url="#navheader" label="Baixe o app AVA" onClick={switchNav} />
</NavHeader>
```
