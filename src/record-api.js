const recordApi = {
  save(records) {
    const recordsData = JSON.stringify(records);
    localStorage.setItem('records', recordsData);
  },
  get() {
    const recordsData = localStorage.getItem('records');
    const records = JSON.parse(recordsData);
    return records;
  },
  getAll() {
    const recordsData = localStorage.getItem('records');
    let records = JSON.parse(recordsData);
    if(!records) {
      records = [];
    }
    return records;
  }
};

export default recordApi;