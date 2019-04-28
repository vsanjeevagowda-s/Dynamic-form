export default [
  {
    id: 1,
    selectLabel: 'Input field',
    compName: 'InputField',
    props: {
      label: ''
    }
  },
  {
    id: 2,
    selectLabel: 'Select field',
    compName: 'SelectField',
    props: {
      label: '',
      options:[
        {
          id: Math.random(),
          value: 'value1',
          label: 'label1'
        },
        {
          id: Math.random(),
          value: 'value2',
          label: 'label2'
        }
      ]
    }
  },
  {
    id: 3,
    selectLabel: 'Date field',
    compName: 'DateField',
    props: {
      label: ''
    }
  }
];