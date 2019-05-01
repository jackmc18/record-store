const recordApi = {
  save(record) {
    let records = recordApi.getAll();
    records.push(record);
    const recordsData = JSON.stringify(records);
    localStorage.setItem('records', recordsData);
  },
  get() {
    const recordsData = localStorage.getItem('records');
    const records = JSON.parse(recordsData);
    return records[0];
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