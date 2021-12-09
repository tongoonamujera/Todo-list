/**
 * @jest-environment jsdom
 */

import TaskStorage from '../localStorage';

describe('clases should return objects', () =>{
  const tasks = {
    description: 'tongoona',
    completed: false,
    index: 0,
    }
  const func = new TaskStorage;
  test('should be a object', () =>{
    expect(typeof func.getTask()).toBe('object');
  });

  test('should return undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).toBe('undefined');
  });

  test('should not return anyting other than undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).not.toBe('object');
  });

  test('removing tasks should return undefined if no localStorage defined', () => {
    expect(typeof func.removeTasks()).toBe('undefined');
  });
});
