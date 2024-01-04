
import './App.css';
import { QueryClient,  QueryClientProvider} from '@tanstack/react-query';
import UserList from './components/UserList/UserList';
const queryClient = new QueryClient();




function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <h1>REACT QUERY EXAMPLES</h1>
        </header>
        <div>
          <p>in main</p>
          <UserList />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
