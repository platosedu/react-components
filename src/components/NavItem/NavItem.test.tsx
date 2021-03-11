/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import NavItem from './index'

test('NavItem: simple render test', () => {
  const component = renderer.create(
    <NavItem
      url="#"
      label="baixe o app Ahazou"
      icon="mono_book"
      target="_blank"
      isActive
    />
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
