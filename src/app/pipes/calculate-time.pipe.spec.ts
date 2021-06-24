import { CalculateTimePipe } from './calculate-time.pipe';

describe('CalculateTimePipe', () => {
  const pipe = new CalculateTimePipe();
  const dateProcesed = '2021-06-13 23:30:00';
  const dateEntry = '2021-06-13 23:00:00'
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('providing value returns empty', () => {
    const status = 'pending'
    expect(pipe.transform(status, dateEntry, dateProcesed)).toBe('');
  });
  it('providing value returns time elapsed', () => {
    const status = 'delivering'
    expect(pipe.transform(status, dateEntry, dateProcesed)).toBe('time: 30 min');
  });
});
