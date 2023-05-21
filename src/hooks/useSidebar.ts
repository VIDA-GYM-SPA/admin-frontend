import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../config/store';
import { getSidebarMode, setSidebarMode } from '../config/reducers/sidebarSlice';

export const useSidebar = () => {
  const dispatch = useDispatch();
  const { active, width } = useSelector((state: RootState) => state.sidebar);

  const getSidebar = (): void => {
    dispatch(getSidebarMode());
  };

  const setSidebar = (active: boolean, width: number): void => {
    dispatch(setSidebarMode({ active, width }));
  };

  return useMemo(() => ({
    active,
    width,
    getSidebar,
    setSidebar,
  }), [active, width]);
}