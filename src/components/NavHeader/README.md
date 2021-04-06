## Default

```js
import NavItem from '../NavItem'

const [navOpened, setNavOpened] = React.useState(false)
const switchNav = () => setNavOpened(!navOpened)

;<NavHeader
  isTransparent={false}
  navOpened={navOpened}
  onNavClick={switchNav}
  logoPath="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png"
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

const NavHeaderExtraContent = () => (
  <Button label="Entrar" />
)

;<NavHeader
  isTransparent={false}
  navOpened={navOpened}
  onNavClick={switchNav}
  logoPath="http://d9hhrg4mnvzow.cloudfront.net/www.platosedu.com.br/28f9146a-asset-4_104q00r000000000000028.png"
  extraContent={NavHeaderExtraContent}
  >
  <NavItem url="#navheader" label="Conheça a Platos" onClick={switchNav} />
  <NavItem url="#navheader" label="Perguntas frequentes" onClick={switchNav} />
  <NavItem url="#navheader" label="Baixe o app AVA" onClick={switchNav} />
</NavHeader>
```
