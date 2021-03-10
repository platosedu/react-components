/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import NavIcon from './index'

test('NavIcon: simple render test', () => {
  const component = renderer.create(<NavIcon closeIcon={false} onClick={() => {}} />)

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
