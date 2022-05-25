import React from 'react'
import Tag from './Tag'
import styles from '../../styles/card/TagList.module.css'

const TagList = () => {
  return (
    <div className={styles.container}>
        <Tag />
        <Tag />
        <Tag />
        <Tag />
    </div>
  )
}

export default TagList