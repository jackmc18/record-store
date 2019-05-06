const recordApi = {
  key: 'records',
  save(record) {
    let records = recordApi.getAll();
    records.push(record);
    const recordsData = JSON.stringify(records);
    localStorage.setItem(recordApi.key, recordsData);
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
    const recordsData = localStorage.getItem(recordApi.key);
    let records = JSON.parse(recordsData);
    if(!records) {
      records = [];
    }
    return records;
  }
};

export default recordApi;