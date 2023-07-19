import { renderHook } from '@testing-library/react-hooks';
import { useStep } from "../../hooks/useStep";

test('test_initial_current_step', () => {
  const { result } = renderHook(() => useStep(1));
  const [currentStep] = result.current;
  expect(currentStep).toBe(1);
});0

test('test_go_to_next_step', () => {
  const { result } = renderHook(() => useStep(1));
  const [currentStep, helpers] = result.current;
  const {
    goToNextStep
  } = helpers;
  expect(currentStep).toBe(1);
  goToNextStep();
  expect(currentStep).toBe(2);
});

test('test_go_to_previous_step', () => {
  const { result } = renderHook(() => useStep(2));
  const [currentStep, helpers] = result.current;
  const {
    goToPrevStep
  } = helpers;
  expect(currentStep).toBe(2);
  goToPrevStep();
  expect(currentStep).toBe(1);
});
