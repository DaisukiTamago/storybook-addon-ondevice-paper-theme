import React from 'react'
import addons from '@storybook/addons'

import { ADDON_ID, PANEL_ID } from './constants'
import ThemePanel from './ThemePanel'

addons.register(ADDON_ID, api => {
  const channel = addons.getChannel()
  addons.addPanel(PANEL_ID, {
    title: 'PAPER THEMES',
    render: ({ active }) => (
      <ThemePanel channel={channel} api={api} active={active} />
    )
  })
})
