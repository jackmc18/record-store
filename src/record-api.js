const recordApi = {
  storage: localStorage,
  save(record) {
    let records = recordApi.getAll();
    records.push(record);
    const recordsData = JSON.stringify(records);
    recordApi.storage.setItem('records', recordsData);
  },
  get(albumTitle) {
    const records = recordApi.getAll();
    for(let i = 0; i < records.length; i++) {
      let record = records[i];
      if(record.albumTitle === albumTitle) {
        return record;
      }
    }
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