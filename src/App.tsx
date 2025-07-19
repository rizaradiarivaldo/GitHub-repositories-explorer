import { Provider } from "react-redux"
import { store } from "./store"
import SearchRepo from "./components/ui/pages/search-repo"

function App() {
  return (
    <Provider store={store}>
      <SearchRepo />
    </Provider>
  )
}

export default App
