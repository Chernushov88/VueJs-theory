export default{
  data () {
    return {
      searchName: '',
      names: ['Sergey', 'Vlad', 'max', 'Elena']
    }
  },
  computed: {
    filtererNames() {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  },
  created() {
    console.log('created')
  }
}
