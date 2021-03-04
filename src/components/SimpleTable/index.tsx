import React from 'react'
import style from './style.module.scss'
import classNames from 'classnames'

interface ColumProps {
  header: string
  accessor: string
}

interface RowProps {
  elements: string[]
}

interface SimpleTableProps {
  data: RowProps[]
  columns: ColumProps[]
  className?: string
}

const SimpleTable: React.FC<SimpleTableProps> = ({
  data,
  columns,
  className
}) => {
  return (
    <div className={classNames(className, style.container)}>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr className={style.tr}>
            {columns &&
              columns.map((colum, index) => {
                return (
                  <th
                    className={style.th}
                    key={index}
                    id={colum.accessor}
                    dangerouslySetInnerHTML={{ __html: colum.header }}
                  />
                )
              })}
          </tr>
        </thead>
        <tbody className={style.tbody}>
          {data &&
            data.map((row, index) => {
              return (
                <tr key={index} className={style.tr}>
                  {row.elements.map((element, index) => {
                    return (
                      <td
                        className={style.td}
                        key={index}
                        dangerouslySetInnerHTML={{ __html: element }}
                      />
                    )
                  })}
                </tr>
              )
            })}
        </tbody>
      </table>
    </div>
  )
}

export default SimpleTable
