/**
 * @jest-environment jsdom
 */

import { TaskStorage } from '../localStorage';

describe('LocalStorage', () =>{
  const tasks = {
    description: 'tongoona',
    completed: false,
    index: 0,
  };

  const func = new TaskStorage;

  test('getTask function should work', () => {
    const Mockfn = jest.spyOn(func,'getTask');
    func.getTask();
    expect(Mockfn).toBeCalled();
  });

  test('should be a object', () => {
    expect(typeof func.getTask()).toBe('object');
  });

  test('should return undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).toBe('undefined');
  });

  test('should not return anything other than undefined if no localStorage defined', () => {
    expect(typeof func.addTask(tasks)).not.toBe('object');
  });

  test('should save to localStorage', () => {
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  test('should return length of localStorage', () => {
    expect(Object.keys(localStorage.__STORE__).length).toBe(localStorage.length)
  });

  test('should be querry for items in localStorage', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('alltasks');
  });

  test('removing tasks should return undefined if no localStorage defined', () => {
    expect(typeof func.removeTasks()).toBe('undefined');
  });
});
