### Modal default
```js
import Button from '../Button'
import Typography from '../Typography'
import ProductCard from '../ProductCard'

const [opened, setOpened] = React.useState(false)

;<>
  <Button label="Open modal" onClick={() => setOpened(true)} />

  <Modal opened={opened} onClose={() => setOpened(false)} className="modalTeste">
    <Typography variant="displayLG" element="h3">
      Esse é o detalhe do curso de Endodontia
    </Typography>

    <Typography variant="bodyMD" element="p">
      Negative alive building possible service higher experiment feel straw problem key degree
      should camera poor raise shall again teach before found disappear hello chemical.
    </Typography>

    <ProductCard
      title="Atualização em endodontia"
      area="Odontologia"
      begin="Ago/20"
      description="Com esse curso você vai se especializar nas mais novas técnicas para localização do sistema de canais radiculares. Com foco em situações clijfkasjfljfaskd."
      image="https://i.ibb.co/wBvgjRy/IMG.png"
      currentPlan={{ total: 4520, installment: 12 }}
    />

    <Typography variant="bodyMD" element="p">
      Him series shirt personal grain arrive garage post handle noise at open record green stream
      become remarkable trouble acres everything today average parallel along
    </Typography>

    <Typography variant="bodyMD" element="p">
      lesson thank consider sunlight wooden among engineer still flies amount process dead express
      design off each town add too current acres ship pool wall
    </Typography>

    <Typography variant="bodyMD" element="p">
      Satellites harder proper fruit teacher mud shall differ snow press mission slowly his journey
      species held along supply difficult hide long bat ordinary fourth
    </Typography>

    <Typography variant="bodyMD" element="p">
      Certain worse jack classroom village near morning get dangerous public somebody whenever
      applied square indicate soil third molecular possible separate practical hang rhythm toy
    </Typography>

    <Typography variant="bodyMD" element="p">
      Product see shall divide minute cabin double stiff vertical coast flight make surrounded lot
      name proper time therefore stand today great block come tonight
    </Typography>

    <Typography variant="bodyMD" element="p">
      Throughout frighten bell strange shown inside instead object loose mostly great move ship our
      throat tribe opportunity lot affect truck money establish physical command
    </Typography>

    <Typography variant="bodyMD" element="p">
      Certain worse jack classroom village near morning get dangerous public somebody whenever
      applied square indicate soil third molecular possible separate practical hang rhythm toy
    </Typography>

    <Typography variant="bodyMD" element="p">
      Product see shall divide minute cabin double stiff vertical coast flight make surrounded lot
      name proper time therefore stand today great block come tonight
    </Typography>

    <Typography variant="bodyMD" element="p">
      Throughout frighten bell strange shown inside instead object loose mostly great move ship our
      throat tribe opportunity lot affect truck money establish physical command
    </Typography>
  </Modal>
</>
```
