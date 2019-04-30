const recordApi = {
  save(record) {
    const recordData = JSON.stringify(record);
    localStorage.setItem('record', recordData);
  },
  get() {
    const recordData = localStorage.getItem('record');
    const record = JSON.parse(recordData);
    return record;
  }
};

export default recordApi;