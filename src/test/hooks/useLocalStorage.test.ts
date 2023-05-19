import { renderHook, act } from '@testing-library/react-hooks';
import useLocalStorage from '../../hooks/useLocalStorage';

it('test_correct_initial_value', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const key = 'test_key';
  const initialValue = { name: 'John', age: 30 };

  renderHook(() => {
    const [storedValue] = useLocalStorage(key, initialValue);
    expect(storedValue).toEqual(initialValue);
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

it("test_updates_when_stored_value_changes", () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const key = 'test_key';
  const initialValue = { name: 'John', age: 30 };

  renderHook(() => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);
    expect(storedValue).toEqual(initialValue);
    
    const updatedValue = { name: 'Jane', age: 31 };
    act(() => {
      setValue(updatedValue);
    });

    expect(storedValue).toEqual(updatedValue);
    expect(consoleSpy).not.toHaveBeenCalled();
  });
});

it('test_correct_error_handling', () => {
  const consoleSpy = jest.spyOn(console, 'log');
  const key = 'test_key';
  const initialValue = { name: 'John', age: 30 };

  renderHook(() => {
    const [storedValue, setValue] = useLocalStorage(key, initialValue);
    expect(storedValue).toEqual(initialValue);

    const updatedValue = { name: 'Jane', age: '31' };
    act(() => {
      setValue(updatedValue as any);
    });

    expect(storedValue).toEqual(initialValue);
    expect(consoleSpy).toHaveBeenCalled();
  });
});
