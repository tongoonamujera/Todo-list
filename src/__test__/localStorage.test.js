/**
 * @jest-environment jsdom
 */

import TaskStorage from '../localStorage';
import MockStorage from '../__mocks__/StorageMock';

describe('clases should return objects', () =>{
  window.localStorage = MockStorage;
  window.sessionStorage = MockStorage;
  const tasks = {
    description: 'tongoona',
    completed: false,
    index: 0,
  };

  const func = new TaskStorage;
  const Mockfn = jest.fn(func.addTask(tasks));
  test('should be a object', () => {
    expect(typeof func.getTask()).toBe('object');
  });

  test('should return undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).toBe('undefined');
  });

  test('should not be called', () => {
    expect(Mockfn).not.toHaveBeenCalled();
  });

  test('should not return anything other than undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).not.toBe('object');
  });

  test('removing tasks should return undefined if no localStorage defined', () => {
    expect(typeof func.removeTasks()).toBe('undefined');
  });
});
