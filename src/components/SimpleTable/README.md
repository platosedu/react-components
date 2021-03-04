### SimpleTable
```js
<div
  style={{
    margin: 50,
    width: 500
  }}
>
  <SimpleTable
    data={[
      { elements: ['12x de R$ 291,66', 'R$ 3.499,92'] },
      { elements: ['18x de R$ 219,33', 'R$ 3.947,94'] },
      { elements: ['24x de R$ 170,70', 'R$ 4.096,80'] },
      {
        elements: [
          'À vista - R$ 3.149,91',
          'R$ 3.149,91 </br><em>(economize até R$ 946,89)</em>'
        ]
      }
    ]}
    columns={[
      {
        header: 'Parcelamento',
        accessor: 'col1'
      },
      {
        header: 'Total',
        accessor: 'col2'
      }
    ]}
  />
</div>
```
