/**
 * @jest-environment jsdom
 */

import { TaskStorage } from '../localStorage.js';
// eslint-disable-next-line no-unused-vars
import { createTodos } from '../htmlDisplay.js';
import changeStatus from '../__mocks__/ChangeTaskStatus.js';

describe('LocalStorage', () => {
  const tasks = {
    description: 'tongoona',
    completed: false,
    index: 0,
  };

  const func = new TaskStorage();

  test('getTask function should work', () => {
    const Mockfn = jest.spyOn(func, 'getTask');
    func.getTask();
    expect(Mockfn).toBeCalled();
  });

  test('Remove tasks function should work and clear tasks completed', () => {
    const spyFn = jest.spyOn(func, 'removeTasks');
    func.removeTasks();
    expect(spyFn).toBeCalled();
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
    // eslint-disable-next-line no-underscore-dangle
    expect(Object.keys(localStorage.__STORE__).length).toBe(localStorage.length);
  });

  test('should be querry for items in localStorage', () => {
    expect(localStorage.getItem).toHaveBeenCalledWith('alltasks');
  });

  test(' getTask should be querry for items in localStorage', () => {
    const arr = [];
    arr[0] = tasks;
    arr[0].index = 1;
    expect(func.getTask()).toEqual(
      expect.arrayContaining([
        { completed: false, description: 'tongoona', index: '0' },
        { completed: false, description: 'tongoona', index: '1' },
      ]),
    );
  });

  test('completed should change value after changeStatus function called', () => {
    expect(changeStatus(tasks)).toEqual({ 'description': 'tongoona', 'completed': true, 'index': 1 });
  });

  test('removing tasks should return undefined if no localStorage defined', () => {
    expect(typeof func.removeTasks()).toBe('undefined');
  });
});
