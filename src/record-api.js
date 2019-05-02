const recordApi = {
  storage: localStorage,
  save(record) {
    let records = recordApi.getAll();
    records.push(record);
    const recordsData = JSON.stringify(records);
    recordApi.storage.setItem('records', recordsData);
  },
  get() {
    const recordsData = recordApi.storage.getItem('records');
    const records = JSON.parse(recordsData);
    return records[0];
  },
  getAll() {
    const recordsData = recordApi.storage.getItem('records');
    let records = JSON.parse(recordsData);
    if(!records) {
      records = [];
    }
    return records;
  }
};

export default recordApi;