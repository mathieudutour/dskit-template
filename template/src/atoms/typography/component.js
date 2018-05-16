import { Size, TextAlign, Tone } from './index'

const symbols = []
const symbols2 = []

export default {
  name: 'typography',
  displayName: 'Typography',
  main: './index',
  doc: './doc',
  symbols: Object.keys(Size).reduce((prev, size) => {
    return prev.concat(
      Object.keys(TextAlign).reduce((prev2, alignment) => {
        return prev2.concat(
          Object.keys(Tone).map(tone => ({
            name: `Text / ${size} / ${alignment} / ${tone}`,
            props: {
              size: Size[size],
              textAlign: TextAlign[alignment],
              tone: Tone[tone],
              children: 'Enter something here',
            },
          }))
        )
      }, symbols2)
    )
  }, symbols),
}
