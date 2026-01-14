import".//index.css"

const App = () => {
  return (
    <div>
      <h1 className="hook">All HOOKS</h1>
      | Hook Name             | कब/क्यों इस्तेमाल होता है                                | Example/Code         |
| --------------------- | -------------------------------------------------------- | --------------------------------------- |
| `useState`            | State को manage करने के लिए                              | Counter, Input value                    |
| `useEffect`           | Side-effects, API calls, timers                          | Component mount/unmount, fetch data     |
| `useRef`              | DOM reference, value store without re-render             | Input focus, storing previous value     |
| `useContext`          | Global state, parent → child data without props drilling | Theme, Auth state                       |
| `useReducer`          | Complex state logic, state with multiple sub-values      | Todo list, complex forms                |
| `useMemo`             | Expensive calculations optimize करने के लिए              | Filtering large data                    |
| `useCallback`         | Function reference preserve करने के लिए                  | Child component re-renders prevent      |
| `useLayoutEffect`     | DOM mutations after render, measure DOM                  | Scroll position, animations             |
| `useImperativeHandle` | Customizing ref behavior                                 | Exposing functions from child to parent |
| `custom hooks`        | Logic reuse across components                            | `useFetch`, `useCounter`                |

    </div>
  )
}

export default App
