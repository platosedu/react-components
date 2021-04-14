/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'
import NavItem from '../NavItem'
import NavHeader from './index'

test('NavHeader: simple render test', () => {
  const component = renderer.create(
    <NavHeader
      navOpened={false}
      onNavClick={(): void => {
        console.log('clicked')
      }}
      isTransparent={false}
    >
      <NavItem url="#" label="conheça a Ahazou" icon="mono_book" />
      <NavItem url="#" label="perguntas frequentes" icon="mono_book" />
      <NavItem url="#" label="baixe o app Ahazou" icon="mono_book" />
    </NavHeader>
  )

  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
