import React from 'react'
import _ from 'lodash'
import { Field } from 'redux-form'
import { FormControl, Checkbox } from 'react-bootstrap'

export default React.createClass({

  getInitialState() {
    const value = this.props.input.value
  },

  getValue() {
    const { value } = this.state
  },

  onChange(e) {
    const { onChange } = this.props.input
    this.setState({ value: [] }, ()=>{
      onChange(this.getValue())
    })
  },

  clear() {
    const { onChange } = this.props.input
    this.setState({ value: [] }, ()=>{
      onChange(this.getValue())
    })
  },

  shouldComponentUpdate(nextProps) {
    return this.props != nextProps
  },

  render() {
    const { input, label, meta, field, group: FieldGroup } = this.props
    const { newValue } = this.state
    return (
      <FieldGroup label={label} meta={meta} input={input} field={field}>
        
      </FieldGroup>
    )
  }

})
