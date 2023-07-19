const unallowed = ['/login']

export const Authorization = () => {
  return unallowed.includes(window.location.pathname)
}