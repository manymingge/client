// @flow
import * as React from 'react'
import {NativeSectionList} from '../../common-adapters/index.native'
import type {Props} from './list.render'

const listStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
}

const contentContainerStyle = {
  display: 'flex',
  flexGrow: 1,
}

export default (props: Props) => (
  <NativeSectionList
    renderItem={data => props.renderRow(0, data.item)}
    renderSectionHeader={({section}) => (section.tabs ? props.renderRow(1, section.tabs) : null)}
    sections={[
      {
        data: [props.headerRow],
        key: 'headerSection',
      },
      {
        key: 'bodySection',
        data: props.bodyRows.splice(1),
        tabs: props.bodyRows[0],
      },
    ]}
    style={listStyle}
    contentContainerStyle={contentContainerStyle}
  />
)
